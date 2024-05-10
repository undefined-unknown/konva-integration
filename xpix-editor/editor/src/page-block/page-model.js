"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBlockModel = void 0;
const base_block_1 = require("../base-block");
class PageBlockModel extends base_block_1.XPixBlockModel {
    constructor() {
        super();
        // this.created.on(() => {
        //   console.log('PageBlockModel.created:', this.id, this);
        // });
    }
    static props() {
        return Object.assign(Object.assign({}, super.props()), { mode: 'board' });
    }
}
exports.PageBlockModel = PageBlockModel;
// Schema config
PageBlockModel.flavour = 'xpix:page';
PageBlockModel.metadata = {
    version: 1,
    role: 'root',
    children: [
        'xpix:frame'
    ]
};
//# sourceMappingURL=page-model.js.map