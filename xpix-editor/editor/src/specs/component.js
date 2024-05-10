"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPixComponent = void 0;
// export interface XPixComponentConfig {
//   Block: XPixBaseBlock;
// };
class XPixComponent {
    constructor(Block) {
        this.Block = Block;
    }
    add(model, cfg) {
        const Block = this.Block;
        const nodeCfg = Block.pickModelProps(model, {
            initProps: {
                std: cfg.std,
                model,
            },
        });
        const node = new Block(nodeCfg);
        node.mount(cfg);
        this.renderChildren(model, cfg);
    }
    remove(model, cfg) {
        const node = this.getNode(model, cfg);
        // Update selections
        cfg.std.selection.update((sels) => {
            return sels.filter((sel) => sel.blockId !== model.id);
        });
        node === null || node === void 0 ? void 0 : node.destroy();
    }
    update(model, cfg) {
        const node = this.getNode(model, cfg);
        if (!node || !node.update) {
            console.warn('Node not implemented update:', node);
            return;
        }
        node === null || node === void 0 ? void 0 : node.update(cfg);
    }
    renderChildren(model, cfg) {
        const spec = cfg.std.spec;
        // console.log('renderChildren:', model.children.length, model, parent);
        model.children.forEach((subModel) => {
            var _a;
            const flavour = subModel.flavour;
            const component = (_a = spec.getView(flavour)) === null || _a === void 0 ? void 0 : _a.component;
            // console.log('subModel.render:', { flavour, subModel, component });
            //TODO: 后期解决双向继承类型问题，暂时使用 any 规避
            if (component) {
                component.add(subModel, cfg);
            }
        });
    }
    getNode(model, cfg) {
        const { stage } = cfg;
        const node = stage.findOne('#' + model.getFullId());
        return node;
    }
}
exports.XPixComponent = XPixComponent;
//# sourceMappingURL=component.js.map