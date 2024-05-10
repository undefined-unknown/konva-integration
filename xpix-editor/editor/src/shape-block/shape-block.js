"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeBlock = void 0;
const konva_1 = require("konva");
const base_block_1 = require("../base-block");
const shape_model_1 = require("./shape-model");
const ShapeClassesMap = {
    shape: konva_1.default.Shape,
    circle: konva_1.default.Circle,
    rect: konva_1.default.Rect
};
class ShapeBlock extends base_block_1.XPixBaseBlock {
    onUpdate(cfg) {
        const model = this.model;
        const props = cfg.props || {};
        // Drop width and height for circle
        if (model.type === 'circle') {
            delete props['height'];
            delete props['width'];
        }
        super.onUpdate(cfg);
    }
    buildNode() {
        const model = this.model;
        const ShapeClass = ShapeClassesMap[model.type];
        if (!ShapeClass) {
            throw new Error('ShapeClass not found');
        }
        const shape = this._mainNode = new ShapeClass(this.pickModelProps({
            // keys: ['width', 'height', 'fill', 'stroke', 'strokeWidth', 'radius'],
            keys: this.getMainKeys(),
            initProps: {
                fill: '#FFF'
            }
        }));
        this.add(shape);
    }
}
exports.ShapeBlock = ShapeBlock;
ShapeBlock.Model = shape_model_1.ShapeBlockModel;
//# sourceMappingURL=shape-block.js.map