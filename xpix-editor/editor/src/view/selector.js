"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selector = void 0;
const konva_1 = require("konva");
const haveIntersection = konva_1.default.Util.haveIntersection;
class Selector extends konva_1.default.Rect {
    constructor(cfg) {
        super(cfg);
        this.className = 'Selector';
        this.dragging = false;
        this.selecting = false;
        this.selectPoints = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0
        };
        this.selection = cfg.selection;
        this.container = cfg.container;
        this.stage = cfg.stage;
        this.handleEvents();
        this.updateMeta();
    }
    onPointerDown(e) {
        const stage = this.stage;
        // Do nothing if we mousedown on any shape
        if (e.target !== stage) {
            return;
        }
        e.evt.preventDefault();
        const selectPoints = this.selectPoints;
        const pointerPos = stage.getPointerPosition();
        if (!pointerPos) {
            return;
        }
        selectPoints.x1 = pointerPos.x;
        selectPoints.y1 = pointerPos.y;
        selectPoints.x2 = pointerPos.x;
        selectPoints.y2 = pointerPos.y;
        this.width(0);
        this.height(0);
        this.selecting = true;
    }
    onPointerMove(e) {
        if (!this.selecting) {
            return;
        }
        e.evt.preventDefault();
        const stage = this.stage;
        const selectPoints = this.selectPoints;
        const pointerPos = stage.getPointerPosition();
        if (!pointerPos) {
            return;
        }
        selectPoints.x2 = pointerPos.x;
        selectPoints.y2 = pointerPos.y;
        const { x1, y1, x2, y2 } = selectPoints;
        this.setAttrs({
            visible: true,
            x: Math.min(x1, x2),
            y: Math.min(y1, y2),
            width: Math.abs(x2 - x1),
            height: Math.abs(y2 - y1)
        });
    }
    onPointerUp(e) {
        this.selecting = false;
        if (!this.visible()) {
            return;
        }
        e.evt.preventDefault();
        // update visibility in timeout, so we can check it in click event
        this.visible(false);
        const nodes = this.container.find('.xpix:node');
        const box = this.getClientRect();
        const selected = nodes.filter(node => {
            // Ignore frame node
            if (node.hasName('xpix:frame')) {
                return false;
            }
            return haveIntersection(box, node.getClientRect());
        });
        this.selection.select(selected);
    }
    onPointerClick(e) {
        if (this.visible() || this.dragging) {
            return;
        }
        const { stage, selection } = this;
        const pos = stage.getPointerPosition() || { x: 0, y: 0 };
        const node = this.container.getIntersection(pos);
        const nodes = node ? node.getAncestors() : [];
        const targetNodes = nodes.filter((node) => {
            return node.hasName('xpix:node');
        });
        const target = targetNodes[0] || null;
        if (!target) {
            selection.clear();
            return;
        }
        // do we pressed shift or ctrl?
        const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
        // console.log('metaPressed:', metaPressed);
        const selectedNodes = selection.nodes();
        const isSelected = selectedNodes.indexOf(target) >= 0;
        if (!metaPressed && !isSelected) {
            // if no key pressed and the node is not selected
            // select just one
            selection.select([target]);
        }
        else if (metaPressed && isSelected) {
            // if we pressed keys and node was selected
            // we need to remove it from selection:
            // use slice to have new copy of array
            const nodes = selectedNodes.slice();
            // remove node from array
            nodes.splice(nodes.indexOf(target), 1);
            selection.select(nodes);
        }
        else if (metaPressed && !isSelected) {
            // add the node into selection
            const nodes = selectedNodes.concat([target]);
            selection.select(nodes);
        }
    }
    onDragStart() {
        this.dragging = true;
    }
    onDragEnd(e) {
        this.dragging = false;
        const target = e.target;
        if (!target.hasName('xpix:node') || target.hasName('selection')) {
            return;
        }
        const selection = this.selection;
        const nodes = selection.nodes();
        if (nodes.indexOf(target) < 0) {
            selection.select([e.target]);
        }
    }
    handleEvents() {
        const stage = this.stage;
        // TODO: remove event listeners on destroy
        stage.on('pointerdown', this.onPointerDown.bind(this));
        stage.on('pointermove', this.onPointerMove.bind(this));
        stage.on('pointerup', this.onPointerUp.bind(this));
        stage.on('pointerclick', this.onPointerClick.bind(this));
        stage.on('dragstart', this.onDragStart.bind(this));
        stage.on('dragend', this.onDragEnd.bind(this));
    }
    updateMeta() {
        this.setAttrs({
            id: `selector:root`,
            name: 'selector',
            fill: 'rgba(0, 161, 255, .5)',
            visible: false
        });
    }
    reset() {
        // const stage = this.stage;
        // TODO: remove event listeners on destroy
        // stage.off('pointerdown', this.onPointerDown);
        // stage.off('pointermove', this.onPointerMove);
        // stage.off('pointerup', this.onPointerUp);
        // stage.off('click', this.onPointerClick);
        // this.destroyChildren();
    }
}
exports.Selector = Selector;
;
//# sourceMappingURL=selector.js.map