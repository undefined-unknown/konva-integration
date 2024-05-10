"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBlockModel = void 0;
const base_block_1 = require("../base-block");
class ImageBlockModel extends base_block_1.XPixBlockModel {
    constructor() {
        super();
        // this.created.on(() => {
        //   console.log('ImageBlockModel.created:', this.id, this);
        // });
    }
    static props() {
        return Object.assign(Object.assign({}, super.props()), { caption: '', assetId: '' });
    }
}
exports.ImageBlockModel = ImageBlockModel;
// Schema config
ImageBlockModel.flavour = 'xpix:image';
ImageBlockModel.metadata = {
    version: 1,
    role: 'content',
    parent: ['xpix:page', 'xpix:frame', 'xpix:group']
};
//# sourceMappingURL=image-model.js.map