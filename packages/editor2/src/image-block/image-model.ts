import Konva from 'konva';
import { XPixBlockModel } from '../base-block';

export interface ImageBlockProps extends Konva.ContainerConfig {
  caption: string;
  assetId: string;
}

export class ImageBlockModel extends XPixBlockModel<ImageBlockProps> {
  constructor() {
    super();

    // this.created.on(() => {
    //   console.log('ImageBlockModel.created:', this.id, this);
    // });
  }

  // Schema config
  static override flavour = 'xpix:image';
  static override metadata = {
    version: 1,
    role: 'content',
    parent: ['xpix:page', 'xpix:frame', 'xpix:group']
  };
  static override props(): ImageBlockProps {
    return {
      ...super.props(),

      caption: '',
      assetId: ''
    };
  }
}
