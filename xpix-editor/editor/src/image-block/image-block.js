"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBlock = void 0;
const tslib_1 = require("tslib");
const konva_1 = require("konva");
const image_model_1 = require("./image-model");
const base_block_1 = require("../base-block");
const loader_1 = require("../utils/loader");
const blankImage = document.createElement('canvas');
// // Debug
// blankImage.width = 100;
// blankImage.height = 100;
// const ctx = blankImage.getContext('2d');
// if (ctx) {
//   ctx.fillStyle = 'green';
//   ctx.fillRect(0, 0, 100, 100);
// }
class ImageBlock extends base_block_1.XPixBaseBlock {
    constructor() {
        super(...arguments);
        this.assetId = '';
        this.assetURL = '';
    }
    mounted() {
        this.updateImage();
    }
    onUpdate(cfg) {
        super.onUpdate(cfg);
        this.updateImage();
    }
    updateImage() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const model = this.model;
            const assetId = model.assetId;
            const _mainNode = this._mainNode;
            if (!assetId) {
                // Clear image
                _mainNode === null || _mainNode === void 0 ? void 0 : _mainNode.setAttr('image', blankImage);
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
            const blob = yield model.doc.blob.get(assetId);
            if (blob && _mainNode) {
                const url = this.assetURL = URL.createObjectURL(blob);
                const image = this.assetImage = yield (0, loader_1.loadImage)(url);
                _mainNode.setAttr('image', image);
                _mainNode.cache();
            }
        });
    }
    buildNode() {
        const image = this._mainNode = new konva_1.default.Image(Object.assign(Object.assign({}, this.pickModelProps({
            // keys: ['width', 'height' ]
            keys: this.getMainKeys()
        })), { image: blankImage }));
        // this.model
        this.add(image);
    }
}
exports.ImageBlock = ImageBlock;
ImageBlock.Model = image_model_1.ImageBlockModel;
//# sourceMappingURL=image-block.js.map