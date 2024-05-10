"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameBlock = void 0;
const konva_1 = require("konva");
const base_block_1 = require("../base-block");
const frame_model_1 = require("./frame-model");
class FrameBlock extends base_block_1.XPixBaseBlock {
    constructor(cfg) {
        super(cfg);
        const editor = this.std.editor;
        editor.on('frame:switch', () => {
            this.fitViewMode();
        });
    }
    fitViewMode() {
        const editor = this.std.editor;
        // TODO: Implement viewMode
        if (editor.viewMode !== 'board') {
            return;
        }
        const { width, height, id } = this.model;
        this.setAttrs({
            visible: id === editor.viewState.currentFrameId,
            y: -height / 2,
            x: -width / 2
        });
    }
    mounted() {
        this.fitViewMode();
    }
    onUpdate(cfg) {
        var _a;
        super.onUpdate(cfg);
        const props = (cfg.props || {});
        // Update background
        if (props.background) {
            (_a = this._mainNode) === null || _a === void 0 ? void 0 : _a.setAttrs({
                fill: props.background
            });
        }
    }
    buildNode() {
        const { width, height, background } = this.model;
        const rect = this._mainNode = new konva_1.default.Rect(this.pickModelProps({
            // keys: ['width', 'height' ],
            keys: this.getMainKeys(),
            initProps: {
                fill: background
            }
        }));
        // Add clip
        // Disable frame node drag
        this.setAttrs({
            clipX: 0,
            clipY: 0,
            clipWidth: width,
            clipHeight: height,
            draggable: false
        });
        this.add(rect);
    }
}
exports.FrameBlock = FrameBlock;
FrameBlock.Model = frame_model_1.FrameBlockModel;
//# sourceMappingURL=frame-block.js.map