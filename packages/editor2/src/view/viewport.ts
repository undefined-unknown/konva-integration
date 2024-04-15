import { type Page } from '../doc';
// import { type FrameBlock } from './frame-block';

import Konva from 'konva';

export interface ViewportConfig extends Konva.LayerConfig {
  // stage: Stage;
  page: Page;
}

export class Viewport extends Konva.Layer {
  stage: Konva.Stage;
  page: Page;

  viewPadding: number = 13 * 4;
  zoomRatio = 1;

  constructor(config: ViewportConfig) {
    super(config);

    const { page, stage } = config;

    this.stage = stage;
    this.page = page;

    // this.handleEvents();
    this.centerAnchor();
    this.updateMeta();

    stage.add(this);
  }

  updatePage(page: Page) {
    this.reset();

    this.page = page;
    this.updateMeta();
  }

  updateMeta() {
    const root = this.page?.root;

    this.setAttrs({
      id: `${root?.flavour}:${root?.id}`,
      name: 'viewport'
    });
  }

  centerAnchor(ratio = this.zoomRatio) {
    const stage = this.stage;

    this.setAttrs({
      offsetX: -stage.width() / ratio / 2,
      offsetY: -stage.height() / ratio / 2
    });
  }

  zoomTo(ratio = 1) {
    this.scale({ x: ratio, y: ratio });
    this.centerAnchor(ratio);

    this.zoomRatio = ratio;

    this.fire('zoom', { ratio });
  }

  getScrollLimit() {
    const size = this.size();
    const clientRect = this.getClientRect();
    const padding = this.viewPadding;
    const rectSize = {
      width: clientRect.width + (padding) * 2,
      height: clientRect.height + (padding) * 2
    };

    const dx = clientRect.width > size.width
      ? (clientRect.width - size.width) / 2 + padding
      : 0;
    const dy = rectSize.height > size.height
      ? (clientRect.height - size.height) / 2 + padding
      : 0;

    const limit = {
      minX: -dx,
      maxX: dx,
      minY: -dy,
      maxY: dy
    };

    // // Debug
    // Object.assign(limit, {
    //   minX: -200,
    //   minY: -200,
    //   maxX: 400,
    //   maxY: 400
    // });

    return limit;
  }

  scrollTo(x: number, y: number) {
    const lastPos = this.position();
    const limit = this.getScrollLimit();

    x = Math.max(limit.minX, Math.min(x, limit.maxX));
    y = Math.max(limit.minY, Math.min(y, limit.maxY));

    if (lastPos.x === x && lastPos.y === y) {
      return false;
    }

    this.position({ x, y });
    this.fire('scroll', { x, y });

    return true;
  }

  onResize() {
    this.centerAnchor();

    this.fire('resize');
  }

  handleEvents() {
    // const page = this.page;
    // const slots = page.slots;

    // slots.ready.on(evt => {
    //   console.log('ready.fire:', evt);
    // });
    // slots.rootAdded.on(evt => {
    //   console.log('rootAdded.fire:', evt);
    // });
    // slots.rootDeleted.on(evt => {
    //   console.log('rootDeleted.fire:', evt);
    // });
    // slots.blockUpdated.on(evt => {
    //   console.log('blockUpdated.fire:', evt);
    // });
  }

  reset() {
    this.destroyChildren();
  }
};
