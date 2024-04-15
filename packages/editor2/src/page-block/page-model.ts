import Konva from 'konva';
import { type XPixBlockModelProps, XPixBlockModel } from '../base-block';

export interface PageBlockProps extends Konva.ContainerConfig {
  mode: 'page' | 'edgeless';
}

export class PageBlockModel extends XPixBlockModel<PageBlockProps> {
  constructor() {
    super();

    // this.created.on(() => {
    //   console.log('PageBlockModel.created:', this.id, this);
    // });
  }

  // Schema config
  static override flavour = 'xpix:page';
  static override metadata = {
    version: 1,
    role: 'root',
    children: [
      'xpix:frame'
    ]
  };
  static override props(): PageBlockProps {
    return {
      ...super.props(),

      mode: 'page'
    };
  }
}
