import Konva from 'konva';

import { XPixBaseBlock as BaseBlock } from '../base-block';
import { PageBlockModel } from './page-model';

export interface PageBlockConfig extends Konva.ContainerConfig {
  model: PageBlockModel
};

export class PageBlock extends BaseBlock {
  static override Model = PageBlockModel;

  override buildNode() {
    console.log('PageBlock.buildNode:', this.model);
  }
}
