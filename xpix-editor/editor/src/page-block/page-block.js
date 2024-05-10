"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBlock = void 0;
const base_block_1 = require("../base-block");
const page_model_1 = require("./page-model");
class PageBlock extends base_block_1.XPixBaseBlock {
    buildNode() {
        console.log('PageBlock.buildNode:', this.model);
    }
}
exports.PageBlock = PageBlock;
PageBlock.Model = page_model_1.PageBlockModel;
//# sourceMappingURL=page-block.js.map