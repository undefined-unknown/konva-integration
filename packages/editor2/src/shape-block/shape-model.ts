import Konva from 'konva';
import { XPixBlockModel } from '../base-block';

export interface ShapeBlockProps extends Konva.ContainerConfig {
  fill?: string,
  radius?: number,
}

export class ShapeBlockModel extends XPixBlockModel<ShapeBlockProps> {
  constructor() {
    super();

    // this.created.on(() => {
    //   console.log('ShapeBlockModel.created:', this.id, this);
    // });
  }

  // Schema config
  static override flavour = 'xpix:shape';
  static override metadata = {
    version: 1,
    role: 'content',
    parent: ['xpix:page', 'xpix:frame', 'xpix:group']
  };
  static override props(): ShapeBlockProps {
    return {
      ...super.props(),

      fill: '#080',
      radius: 0,
    };
  }
}
