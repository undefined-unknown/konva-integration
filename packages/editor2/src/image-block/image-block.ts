import Konva from 'konva';

import { ImageBlockModel } from './image-model';
import { XPixBaseBlock as BaseBlock, type XPixRenderConfig } from '../base-block';
import { loadImage } from '../utils/loader'

export interface ImageBlockConfig extends Konva.ContainerConfig {
  model: ImageBlockModel
};

const blankImage = document.createElement('canvas');

// // Debug
// blankImage.width = 100;
// blankImage.height = 100;
// const ctx = blankImage.getContext('2d');
// if (ctx) {
//   ctx.fillStyle = 'green';
//   ctx.fillRect(0, 0, 100, 100);
// }

export class ImageBlock extends BaseBlock {
  static override Model = ImageBlockModel;

  override mounted() {
    this.updateImage();
  }

  override onUpdate(cfg: XPixRenderConfig) {
    super.onUpdate(cfg);

    this.updateImage();
  }

  assetId = '';
  assetURL = '';
  assetImage?: CanvasImageSource;

  async updateImage() {
    const model = this.model;
    const assetId = model.assetId;
    const _mainNode = this._mainNode;

    if (!assetId) {
      // Clear image
      _mainNode?.setAttr('image', blankImage);

      return;
    }

    if (assetId === this.assetId) {
      return;
    }

    // Update assetId
    this.assetId = assetId;

    // Revoke old Blob URL
    if (this.assetURL) {
      URL.revokeObjectURL(this.assetURL);
    }

    const blob = await model.page.blob.get(assetId);

    if (blob && _mainNode) {
      const url = this.assetURL = URL.createObjectURL(blob);
      const image = this.assetImage = await loadImage(url);

      _mainNode.setAttr('image', image);
      _mainNode.cache();
    }
  }

  override _mainNode?: Konva.Image;
  override buildNode() {
    const image = this._mainNode = new Konva.Image({
      ...this.pickModelProps({
        // keys: ['width', 'height' ]
        keys: this.getMainKeys()
      }),

      image: blankImage
    });

    // this.model

    this.add(image);
  }
}
