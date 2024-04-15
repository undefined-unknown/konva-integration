import Konva from 'konva';

import { XPixBaseBlock as BaseBlock, type XPixRenderConfig } from '../base-block';
import { FrameBlockModel, type FrameBlockProps } from './frame-model';

export interface FrameBlockConfig extends Konva.ContainerConfig {
  model: FrameBlockModel
};

export class FrameBlock extends BaseBlock {
  static override Model = FrameBlockModel;

  fitPosition() {
    const page = this.model.page;
    if (page.viewMode() !== 'page') {
      return;
    }

    const { width, height } = this.model;

    this.setAttrs({
      x: -<number>width / 2,
      y: -<number>height / 2
    });
  }

  override mounted() {
    this.fitPosition();
  }

  override onUpdate(cfg: XPixRenderConfig) {
    super.onUpdate(cfg);

    const props = (cfg.props || {}) as FrameBlockProps;

    // Update background
    if (props.background) {
      this._mainNode?.setAttrs({
        fill: props.background
      });
    }
  }

  override buildNode() {
    const { width, height, background } = this.model;
    const rect = this._mainNode = new Konva.Rect(this.pickModelProps({
      // keys: ['width', 'height' ],
      keys: this.getMainKeys(),
      initProps: {
        fill: background
      }
    }));

    // Add clip
    // Disable frame node drag
    this.setAttrs({
      clipX: 0,
      clipY: 0,
      clipWidth: width,
      clipHeight: height,
      draggable: false
    });

    this.add(rect);
  }
}
