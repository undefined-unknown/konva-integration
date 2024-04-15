// import type { BlockSpec } from '../std';

import { XPixComponent } from './component';

// import type { XPixBaseBlock } from '../base-block';

import { PageBlock } from '../page-block';
import { FrameBlock } from '../frame-block';
import { ShapeBlock } from '../shape-block';
import { ImageBlock } from '../image-block';

export const XPixBlockList = [
  PageBlock,
  FrameBlock,
  ShapeBlock,
  ImageBlock,
];

// export const XPixBlockSpecs: BlockSpec[] = XPixBlockList.map(Block => {
export const XPixBlockSpecs = XPixBlockList.map(Block => {
  const Model = Block.Model;
  const schema = Model.defineSchema();

  return {
    schema,
    view: {
      component: new XPixComponent(Block),
    }
  };
});

export const XPixSchemaList = XPixBlockSpecs.map(spec => spec.schema);


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace BlockSuite {
    interface ComponentType {
      konva: XPixComponent
    }
  }
}
