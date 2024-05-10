"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollBar = exports.Scroller = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("../utils/decorators");
const konva_1 = require("konva");
class Scroller extends konva_1.default.Group {
    constructor(cfg) {
        super(cfg);
        this.className = 'Scroller';
        this.viewport = cfg.viewport;
        this.stage = cfg.stage;
        this.setAttrs({
            name: 'scroller'
        });
        const barCfg = {
            viewport: this.viewport,
            visible: false,
            // opacity: 0.8,
            fill: 'rgba(22, 22, 22, .4)',
            stroke: 'rgba(255, 255, 255, .24)',
            strokeWidth: 1,
            cornerRadius: 5,
            margin: 6,
            size: 6
        };
        this.hBar = new ScrollBar(Object.assign(Object.assign({}, barCfg), { dir: 'horizontal' }));
        this.vBar = new ScrollBar(Object.assign(Object.assign({}, barCfg), { dir: 'vertical' }));
        this.handleEvents();
        this.add(this.hBar, this.vBar);
        this.update();
    }
    getLimit() {
        return this.viewport.getScrollLimit();
    }
    scrollTo(x, y) {
        return this.viewport.scrollTo(x, y);
    }
    update() {
        this.scrollTo(this.viewport.x(), this.viewport.y());
        this.hBar.update();
        this.vBar.update();
    }
    handleEvents() {
        const { stage, viewport } = this;
        viewport.on('scroll resize zoom', () => {
            this.update();
        });
        stage.on('wheel', e => {
            const { deltaX: dx, deltaY: dy } = e.evt;
            const pos = viewport.position();
            const scrolled = this.scrollTo(pos.x - dx, pos.y - dy);
            if (scrolled) {
                e.evt.preventDefault();
            }
        });
    }
}
exports.Scroller = Scroller;
tslib_1.__decorate([
    (0, decorators_1.Debounce)(0),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Scroller.prototype, "update", null);
class ScrollBar extends konva_1.default.Rect {
    constructor(cfg) {
        super(cfg);
        this.viewport = cfg.viewport;
        const dragBoundFunc = (pos) => {
            const stage = this.getStage();
            if (!stage) {
                return pos;
            }
            const { size, margin } = cfg;
            if (cfg.dir === 'horizontal') {
                pos.x = Math.max(Math.min(pos.x, stage.width() - this.width() - margin), margin);
                pos.y = stage.height() - margin - size;
            }
            else {
                pos.x = stage.width() - margin - size;
                pos.y = Math.max(Math.min(pos.y, stage.height() - this.height() - margin), margin);
            }
            return pos;
        };
        this.setAttrs({
            name: 'scrollbar:' + cfg.dir,
            width: cfg.size,
            height: cfg.size,
            draggable: true,
            dragBoundFunc
        });
    }
    update() {
        const viewport = this.viewport;
        const clientRect = viewport.getClientRect();
        const limit = viewport.getScrollLimit();
        const padding = viewport.viewPadding;
        const viewSize = {
            width: viewport.width(),
            height: viewport.height()
        };
        const viewRect = {
            width: clientRect.width + padding * 2,
            height: clientRect.height + padding * 2
        };
        const { dir, margin } = this.getAttrs();
        const pos = this.position();
        const size = this.size();
        if (dir === 'horizontal') {
            const barSize = this.height();
            const ratio = Math.min(viewSize.width / viewRect.width, 1);
            const fullSize = viewSize.width - (margin + barSize) * 2;
            const len = limit.maxX - limit.minX;
            if (!len || ratio >= 1) {
                this.hide();
                return;
            }
            size.width = ratio * fullSize;
            const x = -viewport.x();
            const percent = (x - limit.minX) / len;
            pos.x = percent * (fullSize - size.width) + margin + barSize;
            pos.y = viewSize.height - size.height - margin;
        }
        else {
            const barSize = this.width();
            const ratio = Math.min(viewSize.height / viewRect.height, 1);
            const fullSize = viewSize.height - (margin + barSize) * 2;
            const len = limit.maxY - limit.minY;
            if (!len || ratio >= 1) {
                this.hide();
                return;
            }
            size.height = ratio * fullSize;
            const y = -viewport.y();
            const percent = (y - limit.minY) / len;
            pos.y = percent * (fullSize - size.height) + margin + barSize;
            pos.x = viewSize.width - size.width - margin;
        }
        this.position(pos);
        this.size(size);
        this.show();
    }
}
exports.ScrollBar = ScrollBar;
//# sourceMappingURL=scroller.js.map