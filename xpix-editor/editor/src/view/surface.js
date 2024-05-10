"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surface = void 0;
const eventemitter3_1 = require("eventemitter3");
const lodash_es_1 = require("lodash-es");
const konva_1 = require("konva");
const viewport_1 = require("./viewport");
const helper_1 = require("./helper");
class Surface extends eventemitter3_1.EventEmitter {
    get doc() {
        return this.std.doc;
    }
    constructor(cfg) {
        super();
        this.viewState = {
            currentFrameId: '',
            zoomRatio: 1
        };
        const { root, std, viewState } = cfg;
        this.viewState = viewState;
        this.root = root;
        this.std = std;
        const stage = this.stage = new konva_1.default.Stage({
            // draggable: true
            container: root,
            height: Math.max(10, root.offsetHeight),
            width: Math.max(10, root.offsetWidth)
        });
        // Disable context menu
        // TODO: Need to implementation context menu
        root.oncontextmenu = () => false;
        // TODO: Implementation viewport
        this.viewport = new viewport_1.Viewport({
            stage,
            std
        });
        // Init Helper
        this.helper = new helper_1.Helper({
            view: this,
            std
        });
        this.handleRootResize();
        this.setStd(std, true);
    }
    setStd(std, force = false) {
        if (!force && std === this.std) {
            return;
        }
        // Reset std
        this.std = std;
        // Reset event handler
        this.handleEvents();
        // Reset helper
        this.helper.setStd(std);
        // Render root
        this.viewport.setStd(std);
        this.renderRoot();
    }
    getMode() {
        var _a;
        const root = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.root;
        return (root === null || root === void 0 ? void 0 : root.mode) || 'board';
    }
    getRootFrames() {
        var _a;
        const doc = this.doc;
        const rootNodes = ((_a = doc === null || doc === void 0 ? void 0 : doc.root) === null || _a === void 0 ? void 0 : _a.children) || [];
        return rootNodes.filter(node => node.flavour === 'xpix:frame');
    }
    getCurrentFrame() {
        const frames = this.getRootFrames();
        const currentFrameId = this.viewState.currentFrameId;
        const frame = frames.find(frame => frame.id === currentFrameId) || frames[0];
        // if (!frame && ensure) {
        //   throw new Error('Frame block not found');
        // }
        return frame;
    }
    switchFrame(frame) {
        if (frame.id !== this.viewState.currentFrameId) {
            this.viewState.currentFrameId = frame.id;
            this.emit('frame:switch', frame);
        }
    }
    renderRoot() {
        var _a;
        const root = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.root;
        if (!root) {
            return;
        }
        this.render({
            id: root.id || '',
            flavour: root.flavour || '',
            type: 'add'
        });
    }
    render(evt) {
        var _a, _b, _c, _d;
        const { std, doc, stage } = this;
        const { id, flavour, type } = evt;
        const component = (_a = std.spec.getView(flavour)) === null || _a === void 0 ? void 0 : _a.component;
        const model = (_b = evt === null || evt === void 0 ? void 0 : evt.model) !== null && _b !== void 0 ? _b : (_c = doc.getBlock(id)) === null || _c === void 0 ? void 0 : _c.model;
        if (!model) {
            throw new Error('model not found');
        }
        const renderCfg = {
            action: type,
            stage,
            std
        };
        if (type === 'update') {
            const key = (_d = evt.props) === null || _d === void 0 ? void 0 : _d.key;
            renderCfg.props = key ? { [key]: model[key] } : {};
            component.update(model, renderCfg);
        }
        else if (type === 'add') {
            if (model.role !== 'root') {
                component.add(model, renderCfg);
            }
            else {
                component.renderChildren(model, renderCfg);
            }
        }
        else if (type === 'delete') {
            component.remove(model, renderCfg);
        }
    }
    handleRootResize() {
        const { stage, root } = this;
        const onResize = (0, lodash_es_1.throttle)(() => {
            const height = Math.max(10, root.offsetHeight);
            const width = Math.max(10, root.offsetWidth);
            stage.height(height);
            stage.width(width);
            this.viewport.onResize();
            // stage.batchDraw();
            this.emit('resize', { width, height });
        }, 64);
        window.addEventListener('resize', onResize);
    }
    handleEvents() {
        const slots = this.doc.slots;
        slots.blockUpdated.on(evt => {
            this.render(evt);
        });
        // slots.ready.on(evt => {
        //   console.log('ready.fire:', evt);
        // });
        // slots.rootAdded.on(evt => {
        //   console.log('rootAdded.fire:', evt);
        // });
        // slots.rootDeleted.on(evt => {
        //   console.log('rootDeleted.fire:', evt);
        // });
        // slots.blockUpdated.on(evt => {
        //   console.log('blockUpdated.fire:', evt);
        // });
    }
    getZoomRatios() {
        return [0.02, 0.05, 0.1, 0.25, 0.5, 1, 2, 4, 8];
    }
    zoomIn() {
        const ratios = this.getZoomRatios();
        const ratio = ratios.find(ratio => ratio > this.viewState.zoomRatio);
        if (ratio) {
            this.zoomTo(ratio);
        }
    }
    zoomOut() {
        const ratios = this.getZoomRatios();
        const ratio = ratios.reverse().find(ratio => ratio < this.viewState.zoomRatio);
        if (ratio) {
            this.zoomTo(ratio);
        }
    }
    zoomTo(ratio) {
        const { viewport } = this;
        const ratios = this.getZoomRatios();
        ratio = Math.max(ratios[0], Math.min(ratios[ratios.length - 1], ratio));
        viewport.zoomTo(ratio);
        this.viewState.zoomRatio = ratio;
        this.emit('zoom:change', this.viewState);
    }
    zoomBy(node) {
        if (!node) {
            return;
        }
        const nodeSize = node.size();
        const stageSize = this.stage.size();
        const ratio = Math.min(stageSize.width / nodeSize.width, stageSize.height / nodeSize.height);
        this.zoomTo(ratio);
    }
    destroy() {
        this.stage.destroy();
    }
}
exports.Surface = Surface;
//# sourceMappingURL=surface.js.map