"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameBlockModel = void 0;
const base_block_1 = require("../base-block");
class FrameBlockModel extends base_block_1.XPixBlockModel {
    constructor() {
        super();
        // this.created.on(() => {
        //   // console.log('FrameBlockModel.created:', this.id, this);
        // });
    }
    static props() {
        return Object.assign(Object.assign({}, super.props()), { background: '#FFF', width: 666, height: 666 });
    }
}
exports.FrameBlockModel = FrameBlockModel;
// Schema config
FrameBlockModel.flavour = 'xpix:frame';
FrameBlockModel.metadata = {
    version: 1,
    role: 'hub',
    parent: ['xpix:page']
};
//# sourceMappingURL=frame-model.js.map