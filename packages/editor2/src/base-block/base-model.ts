import { BlockModel, defineBlockSchema } from '../doc';
import Konva from 'konva';

export interface XPixModelMetadata {
  version: number;
  role: "root" | "hub" | "content";
  parent?: string[];
  children?: string[];
}

export interface XPixBlockModelProps extends Konva.NodeConfig {
  name?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  rotation?: number;
  scaleX?: number;
  scaleY?: number;
}

export class XPixBlockModel<Props extends object = XPixBlockModelProps> extends BlockModel<XPixBlockModelProps> {
  constructor() {
    super();

    // this.created.on(() => {
    //   console.log('XPixBlockModel.created:', this.id, this);
    // });
  }

  getFullId() {
    return this.flavour + ':' + this.id;
  }

  // Schema config
  static flavour = 'xpix:base';
  static metadata = {
    version: 1,
    role: 'root'
  };
  static props(): XPixBlockModelProps {
    return {
      // title: internal.Text(),
      name: '',
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotation: 0,
      scaleX: 1,
      scaleY: 1
    };
  }

  static defineSchema() {
    return defineBlockSchema({
      flavour: this.flavour,
      props: this.props,
      metadata: this.metadata as XPixModelMetadata,
      toModel: () => new this()
    });
  }
}
