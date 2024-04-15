import type { BlockStdScope } from '../std';

import Konva from 'konva';

import { XPixBlockModel as BlockModel } from '../base-block';
import type { XPixBaseBlock, XPixBlockConfig } from '../base-block';

export interface XPixRenderConfig {
  action: '' | 'add' | 'update' | 'delete'
  std: BlockStdScope,
  stage: Konva.Stage,
  parent?: BlockModel,
  props?: {
    [key: string]: unknown
  }
}

// export interface XPixComponentConfig {
//   Block: XPixBaseBlock;
// };

export class XPixComponent {
  // config: XPixComponentConfig
  Block: XPixBaseBlock

  constructor(Block: XPixBaseBlock) {
    this.Block = Block;
  }

  add(model: BlockModel, cfg: XPixRenderConfig) {
    const Block = this.Block as unknown as typeof XPixBaseBlock;
    const nodeCfg = Block.pickModelProps(model, {
      initProps: { model },
    });

    const node = new Block(nodeCfg as XPixBlockConfig);

    node.mount(cfg);

    this.renderChildren(model, cfg);
  }

  remove(model: BlockModel, cfg: XPixRenderConfig) {
    const node = this.getNode(model, cfg);

    // Update selections
    cfg.std.selection.update(sels => {
      return sels.filter(sel => sel.blockId !== model.id);
    });

    node?.destroy();
  }

  update(model: BlockModel, cfg: XPixRenderConfig) {
    const node = this.getNode(model, cfg) as XPixBaseBlock;

    if (!node || !node.update) {
      console.warn('Node not implemented update:', node);
      return;
    }

    node?.update(cfg);
  }

  renderChildren(model: BlockModel, cfg: XPixRenderConfig) {
    const spec = cfg.std.spec;

    // console.log('renderChildren:', model.children.length, model, parent);
    model.children.forEach(subModel => {
      const flavour = subModel.flavour;
      const component = spec.getView(flavour)?.component;

      // console.log('subModel.render:', { flavour, subModel, component });
      if (component) {
        component.add(subModel as BlockModel, cfg);
      }
    });
  }

  getNode(model: BlockModel, cfg: XPixRenderConfig) {
    const { stage } = cfg;
    const node = stage.findOne('#' + model.getFullId());

    return node;
  }
}
