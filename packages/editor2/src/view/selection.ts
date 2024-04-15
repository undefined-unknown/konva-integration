import { type Page } from '../doc';
import type { BlockStdScope } from '../std';

import Konva from 'konva';
export interface SelectionConfig extends Konva.TransformerConfig {
  std: BlockStdScope;
  page: Page;
}

export class Selection extends Konva.Transformer {
  std: BlockStdScope;
  page: Page;

  constructor(config: SelectionConfig) {
    super(config);

    this.page = config.page;
    this.std = config.std;

    const style = getComputedStyle(this.std.host);
    const lch = style.getPropertyValue('--p') || '0.540977 0.192841 258.88531';

    this.setAttrs({
      rotateLineVisible: false,
      rotationSnaps: [0, 45, 90, 135, 180, 225, 270, 315],
      rotateAnchorCursor: 'corsshair',
      rotateAnchorOffset: 30,
      anchorStroke: `oklch(${lch} / 0.8)`,
      anchorSize: 10,
      keepRatio: true,
      flipEnabled: false,
      shouldOverdrawWholeArea: true
    });

    this.anchorStyleFunc((anchor) => {
      // anchor is Konva.Rect instance
      anchor.stroke('rgba(0, 0, 0, 0.2)');
      anchor.cornerRadius(10);

      if (anchor.hasName('top-center') || anchor.hasName('bottom-center')) {
        anchor.height(6);
        anchor.offsetY(3);
        anchor.width(20);
        anchor.offsetX(10);
      }
      else if (anchor.hasName('middle-left') || anchor.hasName('middle-right')) {
        anchor.height(20);
        anchor.offsetY(10);
        anchor.width(6);
        anchor.offsetX(3);
      }
      // TODO: Refit rotater anchor
      // else if (anchor.hasName('rotater')) {
      //   anchor.offsetY(-30);
      // }
    });

    this.updateMeta();
  }

  select(nodes: Konva.Node[]) {
    // return this.nodes(nodes);

    const docSelection = this.std.selection;

    const sels = nodes.map(node => {
      return docSelection.create('block', {
        path: [node.getAttr('modelId')]
      });
    });

    docSelection.set(sels);
  }

  clear() {
    // return this.nodes([]);

    this.std.selection.set([]);
  }

  updateMeta() {
    const root = this.page?.root;

    this.setAttrs({
      id: `selection:${root?.flavour}:${root?.id}`,
      name: 'selection'
    });
  }

  reset() {
    // this.destroyChildren();
  }
};
