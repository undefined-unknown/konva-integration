"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const selection_1 = require("./selection");
const selector_1 = require("./selector");
const scroller_1 = require("./scroller");
const konva_1 = require("konva");
class Helper {
    get doc() {
        return this.std.doc;
    }
    get viewport() {
        return this.view.viewport;
    }
    get stage() {
        return this.view.stage;
    }
    constructor(cfg) {
        const container = this.container = new konva_1.default.Layer();
        const view = this.view = cfg.view;
        const std = this.std = cfg.std;
        this.selection = new selection_1.Selection({ std });
        this.selector = new selector_1.Selector({
            selection: this.selection,
            container: this.viewport,
            stage: view.stage
        });
        this.scroller = new scroller_1.Scroller({
            viewport: view.viewport,
            stage: view.stage
        });
        container.add(this.selector);
        container.add(this.selection);
        // Scroller
        container.add(this.scroller);
        this.stage.add(container);
        this.setStd(cfg.std, true);
    }
    updateMeta() {
        var _a;
        const root = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.root;
        const idSuffix = `${root === null || root === void 0 ? void 0 : root.flavour}:${root === null || root === void 0 ? void 0 : root.id}`;
        this.container.setAttrs({
            id: `helper:${idSuffix}`,
            name: 'helper'
        });
        this.scroller.setAttrs({
            id: `scroller:${idSuffix}`
        });
    }
    handleEvents() {
        const { std, doc, selection, viewport } = this;
        // On Change
        doc.slots.blockUpdated.on(() => {
            this.scroller.update();
        });
        // On Select
        std.selection.slots.changed.on(sels => {
            const nodes = sels.map(sel => {
                const model = doc.getBlockById(sel.blockId);
                const node = viewport.findOne(`#${model === null || model === void 0 ? void 0 : model.flavour}:${model === null || model === void 0 ? void 0 : model.id}`);
                return node;
            })
                .filter(node => !!node);
            selection.nodes(nodes);
        });
        // TODO: dragend -> dragmove
        viewport.on('dragend', e => {
            const node = e.target;
            const model = doc.getBlockById(node.getAttr('modelId'));
            if (!model || !node.hasName('xpix:node')) {
                return;
            }
            doc.updateBlock(model, {
                x: node.x(),
                y: node.y()
            });
        });
        // TODO: transformend -> transform
        selection.on('transformend', e => {
            const node = e.target;
            const model = doc.getBlockById(node.getAttr('modelId'));
            if (!model || !node.hasName('xpix:node')) {
                return;
            }
            doc.updateBlock(model, {
                x: node.x(),
                y: node.y(),
                width: node.width(),
                height: node.height(),
                rotation: node.rotation(),
                scaleX: node.scaleX(),
                scaleY: node.scaleY()
            });
        });
    }
    setStd(std, force = false) {
        if (!force && std === this.std) {
            return;
        }
        this.selection.setStd(std);
        this.reset();
        this.std = std;
        this.handleEvents();
        this.updateMeta();
    }
    reset() {
        // this.destroyChildren();
    }
}
exports.Helper = Helper;
;
//# sourceMappingURL=helper.js.map