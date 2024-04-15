import Konva from 'konva';

import { XPixBaseBlock as BaseBlock, type XPixRenderConfig } from '../base-block';
import { ShapeBlockModel } from './shape-model';

export interface ShapeBlockConfig extends Konva.ContainerConfig {
  model: ShapeBlockModel
};

const ShapeClassesMap = {
  circle: Konva.Circle,
  rect: Konva.Rect
};

export class ShapeBlock extends BaseBlock {
  static override Model = ShapeBlockModel;

  override onUpdate(cfg: XPixRenderConfig) {
    const model = this.model as ShapeBlockModel;
    const props = cfg.props!;

    // Drop width and height for circle
    if (model.type === 'circle') {
      delete props['height'];
      delete props['width'];
    }

    super.onUpdate(cfg);
  }

  override buildNode() {
    const ShapeClass = ShapeClassesMap[this.model.type];
    if (!ShapeClass) {
      throw new Error('ShapeClass not found');
    }

    const shape = this._mainNode = new ShapeClass(this.pickModelProps({
      // keys: ['width', 'height', 'fill', 'stroke', 'strokeWidth', 'radius'],
      keys: this.getMainKeys(),
      initProps: {
        fill: '#FFF'
      }
    }));

    this.add(shape);
  }
}
