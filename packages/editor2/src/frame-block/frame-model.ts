import Konva from 'konva';
import { type XPixBlockModelProps, XPixBlockModel } from '../base-block';

export interface FrameBlockProps extends Konva.ContainerConfig {
  name?: string;
  background?: string;
}

export class FrameBlockModel extends XPixBlockModel<XPixBlockModelProps> {
  constructor() {
    super();

    // this.created.on(() => {
    //   // console.log('FrameBlockModel.created:', this.id, this);
    // });
  }

  // Schema config
  static override flavour = 'xpix:frame';
  static override metadata = {
    version: 1,
    role: 'hub',
    parent: ['xpix:page']
  };
  static override props(): FrameBlockProps {
    return {
      ...super.props(),

      background: '#FFF',
      width: 666,
      height: 666,
    };
  }
}
