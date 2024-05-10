"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPixBaseModel = exports.XPixBlockModel = void 0;
const doc_1 = require("../doc");
class XPixBlockModel extends doc_1.BlockModel {
    constructor() {
        super();
        // this.created.on(() => {
        //   console.log('XPixBlockModel.created:', this.id, this);
        // });
    }
    getFullId() {
        return this.flavour + ':' + this.id;
    }
    static props() {
        return {
            // title: internal.Text(),
            name: '',
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1
        };
    }
    static defineSchema() {
        return (0, doc_1.defineBlockSchema)({
            flavour: this.flavour,
            props: this.props,
            metadata: this.metadata,
            toModel: () => new this()
        });
    }
}
exports.XPixBlockModel = XPixBlockModel;
// Schema config
XPixBlockModel.flavour = 'xpix:base';
XPixBlockModel.metadata = {
    version: 1,
    role: 'root'
};
class XPixBaseModel extends XPixBlockModel {
}
exports.XPixBaseModel = XPixBaseModel;
//# sourceMappingURL=base-model.js.map