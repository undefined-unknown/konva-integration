"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
const konva_1 = require("konva");
class Selection extends konva_1.default.Transformer {
    get doc() {
        return this.std.doc;
    }
    constructor(cfg) {
        super(cfg);
        this.std = cfg.std;
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
    select(nodes) {
        // return this.nodes(nodes);
        const docSelection = this.std.selection;
        const sels = nodes.map(node => {
            return docSelection.create('block', {
                path: [node.getAttr('modelId')]
            });
        });
        docSelection.set(sels);
    }
    clear() {
        // return this.nodes([]);
        this.std.selection.set([]);
    }
    updateMeta() {
        var _a;
        const root = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.root;
        const style = getComputedStyle(this.std.host);
        const lch = style.getPropertyValue('--p') || '0.540977 0.192841 258.88531';
        this.setAttrs({
            name: 'selection',
            id: `selection:${root === null || root === void 0 ? void 0 : root.flavour}:${root === null || root === void 0 ? void 0 : root.id}`,
            rotateLineVisible: false,
            rotationSnaps: [0, 45, 90, 135, 180, 225, 270, 315],
            rotateAnchorCursor: 'corsshair',
            rotateAnchorOffset: 30,
            anchorStroke: `oklch(${lch} / 0.8)`,
            anchorSize: 10,
            keepRatio: true,
            flipEnabled: false,
            shouldOverdrawWholeArea: true
        });
        this.anchorStyleFunc((anchor) => {
            // anchor is Konva.Rect instance
            anchor.stroke('rgba(0, 0, 0, 0.2)');
            anchor.cornerRadius(10);
            if (anchor.hasName('top-center') || anchor.hasName('bottom-center')) {
                anchor.height(6);
                anchor.offsetY(3);
                anchor.width(20);
                anchor.offsetX(10);
            }
            else if (anchor.hasName('middle-left') || anchor.hasName('middle-right')) {
                anchor.height(20);
                anchor.offsetY(10);
                anchor.width(6);
                anchor.offsetX(3);
            }
            // TODO: Refit rotater anchor
            // else if (anchor.hasName('rotater')) {
            //   anchor.offsetY(-30);
            // }
        });
    }
    reset() {
        // this.clear();
    }
}
exports.Selection = Selection;
//# sourceMappingURL=selection.js.map