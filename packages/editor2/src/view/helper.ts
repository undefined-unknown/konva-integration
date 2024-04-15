import type { Page } from '../doc';
import type { BlockStdScope } from '../std';

import type { Surface } from './surface';
import { Selection } from './selection';
import { Selector } from './selector';
import { Scroller } from './scroller';

import Konva from 'konva';

export interface HelperConfig {
  std: BlockStdScope;
  view: Surface;
  page: Page;
}

export class Helper {
  container: Konva.Layer;
  selection: Selection;
  selector: Selector;
  scroller: Scroller;

  std: BlockStdScope;
  view: Surface;
  page: Page;

  get viewport() {
    return this.view.viewport;
  }

  get stage() {
    return this.view.stage;
  }

  constructor(cfg: HelperConfig) {
    const container = this.container = new Konva.Layer();
    const page = this.page = cfg.page;
    const view = this.view = cfg.view;
    const std = this.std = cfg.std;

    this.selection = new Selection({ page, std });
    this.selector = new Selector({
      selection: this.selection,
      container: this.viewport,
      stage: view.stage,
      page
    });

    this.scroller = new Scroller({
      viewport: view.viewport,
      stage: view.stage,
      page
    });

    this.handleEvents();
    this.updateMeta();

    container.add(this.selector);
    container.add(this.selection);

    // Scroller
    container.add(this.scroller);

    this.stage.add(container);
  }

  updateMeta() {
    const root = this.page?.root;
    const idSuffix = `${root?.flavour}:${root?.id}`;

    this.container.setAttrs({
      id: `helper:${idSuffix}`,
      name: 'helper'
    });

    this.scroller.setAttrs({
      id: `scroller:${idSuffix}`
    });
  }

  handleEvents() {
    const { std, page, selection, viewport } = this;

    // On Change
    page.slots.blockUpdated.on(() => {
      this.scroller.update();
    });

    // On Select
    std.selection.slots.changed.on(sels => {
      const nodes = sels.map(sel => {
        const model = page.getBlockById(sel.blockId);
        const node = viewport.findOne(`#${model?.flavour}:${model?.id}`);

        return node;
      })
        .filter(node => !!node);

      selection.nodes(nodes as Konva.Node[]);
    });

    // TODO: dragend -> dragmove
    viewport.on('dragend', e => {
      const node = e.target;
      const model = page.getBlockById(node.getAttr('modelId'));
      if (!model || !node.hasName('xpix:node')) {
        return;
      }

      page.updateBlock(model, {
        x: node.x(),
        y: node.y()
      });
    });

    // TODO: transformend -> transform
    selection.on('transformend', e => {
      const node = e.target;
      const model = page.getBlockById(node.getAttr('modelId'));
      if (!model || !node.hasName('xpix:node')) {
        return;
      }

      page.updateBlock(model, {
        x: node.x(),
        y: node.y(),
        width: node.width(),
        height: node.height(),
        rotation: node.rotation(),
        scaleX: node.scaleX(),
        scaleY: node.scaleY()
      });
    });
  }

  updatePage(page: Page) {
    this.reset();

    this.page = page;
    this.updateMeta();
  }

  reset() {
    // this.destroyChildren();

    this.selection.clear();
  }
};
