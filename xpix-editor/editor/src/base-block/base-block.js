"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPixBaseBlock = void 0;
const base_model_1 = require("./base-model");
const konva_1 = require("konva");
const baseProps = base_model_1.XPixBaseModel.props();
const basePropsKeys = Object.keys(baseProps).filter(key => {
    return key !== 'width' && key !== 'height';
});
class XPixBaseBlock extends konva_1.default.Group {
    static pickModelProps(model, cfg) {
        const { afterPick = undefined, keys = undefined, initProps = {}, } = cfg || {};
        const pickKeys = (keys !== null && keys !== void 0 ? keys : model.keys) || [];
        const props = pickKeys.reduce((acc, key) => {
            if (model[key] !== undefined) {
                acc[key] = model[key];
            }
            return acc;
        }, initProps);
        if (afterPick) {
            afterPick(props);
        }
        return props;
    }
    constructor(cfg) {
        const model = cfg.model;
        // delete cfg.model;
        super(cfg);
        this.std = cfg.std;
        this.model = model;
        this.setAttrs({
            modelId: model.id,
            id: model.getFullId(),
            name: `xpix:node ${model.flavour}`,
            // TODO: Remove draggable to one-way data flow
            draggable: true,
            // TODO: Add shadow support
            // shadowColor: 'rgba(0,0,0,0.2)',
            // shadowOffset: { x: 1, y: 1 }
            // shadowBlur: 15
        });
        this.created();
    }
    // Lifecycle events
    // beforeCreate() {}
    created() {
        // onCreated
    }
    // beforeMount() {}
    mounted() {
        // onMounted
    }
    // beforeUnmount() {}
    unmounted() {
        // onUnmounted
    }
    onUpdate(cfg) {
        const props = cfg.props;
        const mainNode = this._mainNode;
        if (!props || !mainNode) {
            return;
        }
        const wrapProps = basePropsKeys.reduce((acc, key) => {
            if (props[key] !== undefined) {
                acc[key] = props[key];
            }
            return acc;
        }, {});
        let mainPropsCount = 0;
        const propKeys = Object.keys(props);
        const mainProps = propKeys.reduce((acc, key) => {
            // Skip base props
            if (!basePropsKeys.includes(key)) {
                acc[key] = props[key];
                mainPropsCount++;
            }
            return acc;
        }, {});
        if (mainPropsCount > 0) {
            mainNode.setAttrs(mainProps);
        }
        this.setAttrs(wrapProps);
    }
    onDestroy() {
        // TODO: onDestroy
    }
    mount(cfg) {
        const parentNode = this.getParentNode(cfg);
        if (!parentNode) {
            throw new Error('Parent node not found');
        }
        // // TODO: 需要重新思考自动居中策略
        // const model = this.model;
        // if (model.x === 0 && model.y === 0) {
        //   this.centerModel(model, parentNode);
        // }
        // buildNode
        this.buildNode();
        // Add node to parent
        parentNode.add(this);
        this.mounted();
    }
    update(cfg) {
        const props = cfg.props;
        if (!props) {
            return;
        }
        this.onUpdate(cfg);
    }
    getMainKeys() {
        const keys = this.model.keys.filter(key => {
            return !basePropsKeys.includes(key);
        });
        return keys;
    }
    buildNode() {
        throw new Error('Block.buildNode not implemented: ' + this.model.flavour);
    }
    getParentNode(cfg) {
        const stage = cfg.stage;
        const model = this.model;
        const parent = model.doc.getParent(model);
        const parentNode = parent
            ? stage.findOne('#' + parent.getFullId())
            : undefined;
        return parentNode;
    }
    centerModel(model, parentNode) {
        const parentRect = parentNode.getClientRect();
        const parentWidth = Math.max(parentNode.width(), parentRect.width);
        const parentHeight = Math.max(parentNode.height(), parentRect.height);
        const y = centerNum(model.height, parentHeight);
        const x = centerNum(model.width, parentWidth);
        // Force update once before node added to stage
        this.setAttrs({ x, y });
        model.doc.updateBlock(model, { x, y });
    }
    pickModelProps(cfg) {
        return XPixBaseBlock.pickModelProps(this.model, cfg);
    }
    destroy() {
        // TODO: fix unmounted
        this.unmounted();
        this.onDestroy();
        return super.destroy();
    }
}
exports.XPixBaseBlock = XPixBaseBlock;
XPixBaseBlock.Model = base_model_1.XPixBaseModel;
function centerNum(selfNum, parentNum) {
    selfNum = selfNum !== null && selfNum !== void 0 ? selfNum : 0;
    parentNum = parentNum !== null && parentNum !== void 0 ? parentNum : 0;
    return parentNum / 2 - selfNum / 2;
}
//# sourceMappingURL=base-block.js.map