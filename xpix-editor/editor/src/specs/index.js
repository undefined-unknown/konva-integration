"use strict";
// import type { BlockSpec } from '../std';
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPixSchemaList = exports.XPixBlockSpecs = exports.XPixBlockList = void 0;
const component_1 = require("./component");
const page_block_1 = require("../page-block");
const frame_block_1 = require("../frame-block");
const shape_block_1 = require("../shape-block");
const image_block_1 = require("../image-block");
exports.XPixBlockList = [
    page_block_1.PageBlock,
    frame_block_1.FrameBlock,
    shape_block_1.ShapeBlock,
    image_block_1.ImageBlock,
];
// export const XPixBlockSpecs: BlockSpec[] = XPixBlockList.map(Block => {
exports.XPixBlockSpecs = exports.XPixBlockList.map(Block => {
    const Model = Block.Model;
    const schema = Model.defineSchema();
    return {
        schema,
        view: {
            component: new component_1.XPixComponent(Block),
        }
    };
});
exports.XPixSchemaList = exports.XPixBlockSpecs.map(spec => spec.schema);
//# sourceMappingURL=index.js.map