import { XPixBlockModel as BlockModel } from './base-model';
import type { XPixRenderConfig } from '../specs/component';

import Konva from 'konva';

export type { XPixRenderConfig } from '../specs/component';

type ModelProps = { [index: string]: unknown };

export interface PickModelConfig {
  keys?: string[],
  initProps?: ModelProps,
  afterPick?: (attrs: ModelProps) => void
};


export interface XPixBlockConfig extends Konva.GroupConfig {
  model: BlockModel
};

const baseProps = BlockModel.props();
const basePropsKeys = Object.keys(baseProps).filter(key => {
  return key !== 'width' && key !== 'height';
});

export class XPixBaseBlock extends Konva.Group {
  static Model = BlockModel;

  static pickModelProps(model: BlockModel, cfg?: PickModelConfig) {
    const {
      afterPick = undefined,
      keys = undefined,
      initProps = {},
    } = cfg || {};

    const pickKeys = (keys ?? model.keys) || [];
    const props = pickKeys.reduce((acc, key) => {
      if (model[key] !== undefined) {
        acc[key] = model[key];
      }

      return acc;
    }, initProps);

    if (afterPick) {
      afterPick(props);
    }

    return props;
  }

  model: BlockModel

  constructor(cfg: XPixBlockConfig) {
    const model = cfg.model;

    // delete cfg.model;
    super(cfg);

    this.model = model;
    this.setAttrs({
      modelId: model.id,
      id: model.getFullId(),
      name: `xpix:node ${model.flavour}`,

      // TODO: Remove draggable to one-way data flow
      draggable: true,

      // TODO: Add shadow support
      // shadowColor: 'rgba(0,0,0,0.2)',
      // shadowOffset: { x: 1, y: 1 }
      // shadowBlur: 15
    });

    this.created();
  }

  // Lifecycle events
  // beforeCreate() {}
  created() {}
  // beforeMount() {}
  mounted() {}
  // beforeUnmount() {}
  unmounted() {}
  onUpdate(cfg: XPixRenderConfig) {
    const props = cfg.props;
    const mainNode = this._mainNode;
    if (!props || !mainNode) {
      return;
    }

    const wrapProps = basePropsKeys.reduce((acc, key) => {
      if (props[key] !== undefined) {
        acc[key] = props[key];
      }

      return acc;
    }, {} as ModelProps);

    let mainPropsCount = 0;
    const propKeys = Object.keys(props);
    const mainProps = propKeys.reduce((acc, key) => {
      // Skip base props
      if (!basePropsKeys.includes(key)) {
        acc[key] = props[key];
        mainPropsCount++;
      }

      return acc;
    }, {} as ModelProps);

    if (mainPropsCount > 0) {
      mainNode.setAttrs(mainProps);
    }

    this.setAttrs(wrapProps);
  }
  onDestroy() {}

  mount(cfg: XPixRenderConfig) {
    const parentNode = this.getParentNode(cfg) as Konva.Container;
    if (!parentNode) {
      throw new Error('Parent node not found');
    }

    // // TODO: 需要重新思考自动居中策略
    // const model = this.model;
    // if (model.x === 0 && model.y === 0) {
    //   this.centerModel(model, parentNode);
    // }

    // buildNode
    this.buildNode();

    // Add node to parent
    parentNode.add(this);

    this.mounted();
  }

  update(cfg: XPixRenderConfig) {
    const props = cfg.props;
    if (!props) {
      return;
    }

    this.onUpdate(cfg);
  }

  getMainKeys() {
    const keys = this.model.keys.filter(key => {
      return !basePropsKeys.includes(key)
    });

    return keys;
  }

  _mainNode?: Konva.Shape;
  buildNode() {
    throw new Error('Block.buildNode not implemented: ' + this.model.flavour);
  }

  getParentNode(cfg: XPixRenderConfig) {
    const stage = cfg.stage;
    const model = this.model;
    const parent = model.page.getParent(model) as BlockModel;
    const parentNode = parent
      ? stage.findOne('#' + parent.getFullId())
      : undefined;

    return parentNode;
  }

  centerModel(model: BlockModel, parentNode: Konva.Container) {
    const parentRect = parentNode.getClientRect();
    const parentWidth = Math.max(parentNode.width(), parentRect.width);
    const parentHeight = Math.max(parentNode.height(), parentRect.height);
    const y = centerNum(model.height, parentHeight);
    const x = centerNum(model.width, parentWidth);

    // Force update once before node added to stage
    this.setAttrs({ x, y });

    model.page.updateBlock(model, { x, y });
  }

  pickModelProps(cfg: PickModelConfig) {
    return XPixBaseBlock.pickModelProps(this.model, cfg);
  }

  override destroy() {
    // TODO: fix unmounted
    this.unmounted();
    this.onDestroy();

    return super.destroy();
  }
}

function centerNum(selfNum: number | undefined, parentNum: number | undefined) {
  selfNum = selfNum ?? 0;
  parentNum = parentNum ?? 0;

  return parentNum / 2 - selfNum / 2;
}
