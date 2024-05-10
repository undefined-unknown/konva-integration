"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viewport = void 0;
// import { type FrameBlock } from './frame-block';
const konva_1 = require("konva");
class Viewport extends konva_1.default.Layer {
    get doc() {
        return this.std.doc;
    }
    constructor(cfg) {
        super(cfg);
        this.viewPadding = 13 * 4;
        this.zoomRatio = 1;
        this.std = cfg.std;
        this.stage = cfg.stage;
        this.centerAnchor();
        this.updateMeta();
        this.stage.add(this);
        this.setStd(cfg.std, true);
    }
    setStd(std, force = false) {
        if (!force && std === this.std) {
            return;
        }
        this.reset();
        this.std = std;
        // this.handleEvents();
        this.updateMeta();
    }
    updateMeta() {
        var _a;
        const root = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.root;
        this.setAttrs({
            id: `${root === null || root === void 0 ? void 0 : root.flavour}:${root === null || root === void 0 ? void 0 : root.id}`,
            name: 'viewport'
        });
    }
    centerAnchor(ratio = this.zoomRatio) {
        const stage = this.stage;
        this.setAttrs({
            offsetX: -stage.width() / ratio / 2,
            offsetY: -stage.height() / ratio / 2
        });
    }
    zoomTo(ratio = 1) {
        this.scale({ x: ratio, y: ratio });
        this.centerAnchor(ratio);
        this.zoomRatio = ratio;
        this.fire('zoom', { ratio });
    }
    getScrollLimit() {
        const size = this.size();
        const clientRect = this.getClientRect();
        const padding = this.viewPadding;
        const rectSize = {
            width: clientRect.width + (padding) * 2,
            height: clientRect.height + (padding) * 2
        };
        const dx = clientRect.width > size.width
            ? (clientRect.width - size.width) / 2 + padding
            : 0;
        const dy = rectSize.height > size.height
            ? (clientRect.height - size.height) / 2 + padding
            : 0;
        const limit = {
            minX: -dx,
            maxX: dx,
            minY: -dy,
            maxY: dy
        };
        return limit;
    }
    scrollTo(x, y) {
        const lastPos = this.position();
        const limit = this.getScrollLimit();
        x = Math.max(limit.minX, Math.min(x, limit.maxX));
        y = Math.max(limit.minY, Math.min(y, limit.maxY));
        if (lastPos.x === x && lastPos.y === y) {
            return false;
        }
        this.position({ x, y });
        this.fire('scroll', { x, y });
        return true;
    }
    onResize() {
        this.centerAnchor();
        this.fire('resize');
    }
    handleEvents() {
        // const doc = this.doc;
        // const slots = doc.slots;
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
    reset() {
        this.destroyChildren();
    }
}
exports.Viewport = Viewport;
//# sourceMappingURL=viewport.js.map