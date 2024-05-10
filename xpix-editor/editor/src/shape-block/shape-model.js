"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeBlockModel = void 0;
const base_block_1 = require("../base-block");
class ShapeBlockModel extends base_block_1.XPixBlockModel {
    constructor() {
        super();
        // this.created.on(() => {
        //   console.log('ShapeBlockModel.created:', this.id, this);
        // });
    }
    static props() {
        return Object.assign(Object.assign({}, super.props()), { type: 'shape', fill: '#080', radius: 0 });
    }
}
exports.ShapeBlockModel = ShapeBlockModel;
// Schema config
ShapeBlockModel.flavour = 'xpix:shape';
ShapeBlockModel.metadata = {
    version: 1,
    role: 'content',
    parent: ['xpix:page', 'xpix:frame', 'xpix:group']
};
//# sourceMappingURL=shape-model.js.map