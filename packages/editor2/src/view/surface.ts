import { type Page } from '../doc';
import { BlockStdScope } from '../std';

import { EventEmitter } from 'eventemitter3';
import { throttle } from 'lodash-es';
import Konva from 'konva';

import type { XPixBlockModel as BlockModel } from '../base-block';
import type { XPixComponent, XPixRenderConfig } from '../specs/component';
import { Viewport } from './viewport';
import { Helper } from './helper';

type PageSlotUpdateEvt = {
  type: 'add' | 'delete' | 'update';
  id: string;
  flavour: string;
  model?: BlockModel;
  props?: { key: string };
};

export type ViewState = {
  currentFrameId: string;
  zoomRatio: number
};

export type ViewConfig = {
  root: HTMLDivElement;
  viewState: ViewState;
  std: BlockStdScope;
  page: Page;
};

export class Surface extends EventEmitter {
  root: HTMLElement;
  viewport: Viewport;
  page: Page;
  stage: Konva.Stage;
  std: BlockStdScope;
  helper: Helper;

  viewState: ViewState = {
    currentFrameId: '',
    zoomRatio: 1
  };

  constructor(cfg: ViewConfig) {
    super();

    const { root, std, page, viewState } = cfg;

    this.viewState = viewState;
    this.root = root;
    this.page = page;
    this.std = std;

    const stage = this.stage = new Konva.Stage({
      // draggable: true
      container: root,
      height: Math.max(10, root.offsetHeight),
      width: Math.max(10, root.offsetWidth)
    });

    // Disable context menu
    // TODO: Need to implementation context menu
    root.oncontextmenu = () => false;

    // TODO: Implementation viewport
    this.viewport = new Viewport({
      stage,
      page
    });

    // Init Helper
    this.helper = new Helper({
      std: this.std,
      view: this,
      page
    });

    this.handleEvents();
    this.handleRootResize();

    this.updatePage(page);
  }

  switchFrame(frame: BlockModel) {
    this.viewState.currentFrameId = frame.id;
    this.emit('frameSwitch', frame);
  }

  renderRoot() {
    const { page } = this;

    this.render({
      id: page.root?.id ?? '',
      flavour: page.root?.flavour ?? '',
      type: 'add'
    });
  }

  render(evt: PageSlotUpdateEvt) {
    const { std, page, stage } = this;
    const { id, flavour, type } = evt;
    const model = evt?.model ?? page.getBlockById(id) as BlockModel;
    const component = std.spec.getView(flavour)?.component as XPixComponent;

    if (!model) {
      throw new Error('model not found');
    }

    const renderCfg: XPixRenderConfig = {
      action: type,
      stage,
      std
    };

    if (type === 'update') {
      const key = evt.props?.key;
      renderCfg.props = key ? { [key]: model[key] } : {};

      component.update(model, renderCfg);
    }
    else if (type === 'add') {
      if (model.role !== 'root') {
        component.add(model, renderCfg);
      }
      else {
        component.renderChildren(model, renderCfg);
      }
    }
    else if (type === 'delete') {
      component.remove(model, renderCfg);
    }
  }

  handleRootResize() {
    const { stage, root } = this;
    const onResize = throttle(() => {
      const height = Math.max(10, root.offsetHeight);
      const width = Math.max(10, root.offsetWidth);

      stage.height(height);
      stage.width(width);

      this.viewport.onResize();

      // stage.batchDraw();
    }, 64);

    window.addEventListener('resize', onResize);
  }

  handleEvents() {
    // const { page, viewport } = this;
    // const slots = page.slots;

    // slots.ready.on(evt => {
    //   console.log('ready.fire:', evt);
    // });
    // slots.rootAdded.on(evt => {
    //   console.log('rootAdded.fire:', evt);
    // });
    // slots.rootDeleted.on(evt => {
    //   console.log('rootDeleted.fire:', evt);
    // });
    // slots.blockUpdated.on(evt => {
    //   console.log('blockUpdated.fire:', evt);
    // });
  }

  updatePage(page: Page) {
    this.reset();

    // Reset
    this.page = page;

    // TODO: Reset event handler
    page.slots.blockUpdated.on(evt => {
      this.render(evt as PageSlotUpdateEvt);
    });

    // Render root
    this.viewport.updatePage(page);
    this.renderRoot();

    return this;
  }

  getZoomRatios() {
    return [0.02, 0.05, 0.1, 0.25, 0.5, 1, 2, 4, 8];
  }

  zoomIn() {
    const ratios = this.getZoomRatios();
    const ratio = ratios.find(ratio => ratio > this.viewState.zoomRatio);

    if (ratio) {
      this.zoomTo(ratio);
    }
  }

  zoomOut() {
    const ratios = this.getZoomRatios();
    const ratio = ratios.reverse().find(ratio => ratio < this.viewState.zoomRatio);

    if (ratio) {
      this.zoomTo(ratio);
    }
  }

  zoomTo(ratio: number) {
    const { viewport } = this;
    const ratios = this.getZoomRatios();

    ratio = Math.max(ratios[0], Math.min(ratios[ratios.length - 1], ratio));

    viewport.zoomTo(ratio);
    this.viewState.zoomRatio = ratio;

    this.emit('zoomChange', this.viewState);
  }

  zoomBy(node: Konva.Node) {
    if (!node) {
      return;
    }

    const nodeSize = node.size();
    const stageSize = this.stage.size();

    const ratio = Math.min(
      stageSize.width / nodeSize.width,
      stageSize.height / nodeSize.height
    );

    this.zoomTo(ratio);
  }

  reset() {
    // TODO:
  }

  destroy() {
    this.stage.destroy();
  }
};
