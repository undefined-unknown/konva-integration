"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEditor = exports.Editor = void 0;
const tslib_1 = require("tslib");
const doc_1 = require("./doc");
const std_1 = require("./std");
const specs_1 = require("./specs");
const view_1 = require("./view");
const loader_1 = require("./utils/loader");
const picker_1 = require("./utils/picker");
// import LiveblocksProvider from '@liveblocks/yjs';
// import { createClient } from '@liveblocks/client';
const eventemitter3_1 = require("eventemitter3");
tslib_1.__exportStar(require("./std"), exports);
tslib_1.__exportStar(require("./doc"), exports);
class Editor extends eventemitter3_1.EventEmitter {
    get doc() {
        return this._doc;
    }
    get viewMode() {
        var _a;
        return ((_a = this.view) === null || _a === void 0 ? void 0 : _a.getMode()) || 'board';
    }
    constructor(cfg) {
        var _a, _b;
        super();
        this.viewState = {
            currentFrameId: '',
            zoomRatio: 1,
        };
        this.root = cfg.root;
        this.config = Object.assign({ useLocalDraft: true }, cfg);
        // Init doc
        const doc = (this._doc = (0, doc_1.createEmptyDoc)());
        if (!doc) {
            throw new Error('Editor init error: Doc not found');
        }
        // Init std
        this.std = this.getStd();
        // Init view
        this.viewState.currentFrameId = ((_b = (_a = doc.root) === null || _a === void 0 ? void 0 : _a.children[0]) === null || _b === void 0 ? void 0 : _b.id) || '';
        this.view = new view_1.Surface({
            viewState: this.viewState,
            root: this.root,
            std: this.std,
        });
        // Bridge events
        const viewEvents = ['frame:switch', 'zoom:change'];
        viewEvents.forEach((evt) => {
            var _a;
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.on(evt, (...args) => this.emit(evt, ...args));
        });
    }
    // History
    get canUndo() {
        var _a;
        return !!((_a = this.doc) === null || _a === void 0 ? void 0 : _a.canUndo);
    }
    get canRedo() {
        var _a;
        return !!((_a = this.doc) === null || _a === void 0 ? void 0 : _a.canRedo);
    }
    undo() {
        var _a;
        return (_a = this.doc) === null || _a === void 0 ? void 0 : _a.undo();
    }
    redo() {
        var _a;
        return (_a = this.doc) === null || _a === void 0 ? void 0 : _a.redo();
    }
    // Std
    get command() {
        var _a;
        return (_a = this.std) === null || _a === void 0 ? void 0 : _a.command;
    }
    get event() {
        var _a;
        return (_a = this.std) === null || _a === void 0 ? void 0 : _a.event;
    }
    get selection() {
        var _a;
        return (_a = this.std) === null || _a === void 0 ? void 0 : _a.selection;
    }
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const doc = yield this.loadDoc();
            if (doc) {
                this.setDoc(doc);
            }
        });
    }
    getStd() {
        let std = this.std;
        if (!std || std.doc !== this.doc) {
            // Clean up
            if (std) {
                std.unmount();
            }
            // Create new std
            const doc = this.doc;
            std = new std_1.XPiXBlockStdScope({
                editor: this,
                host: this.root,
                collection: doc.collection,
                doc: doc,
            });
            std.spec.applySpecs(specs_1.XPixBlockSpecs);
            std.mount();
        }
        return std;
    }
    createDoc() {
        return (0, doc_1.createDoc)();
    }
    loadDoc(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { useLocalDraft } = this.config;
            const LAST_DOC_KEY = 'xpix:last-doc-id';
            if (!id && useLocalDraft && typeof localStorage !== 'undefined') {
                id = localStorage.getItem(LAST_DOC_KEY) || '';
            }
            return (0, doc_1.loadDoc)(id);
        });
    }
    setDoc(doc) {
        // Mark doc as dirty
        const lastDoc = this._doc;
        // Update doc
        this._doc = doc;
        // TODO: Update std
        this.std = this.getStd();
        // TODO: Update view
        this.view.setStd(this.std);
        // Active frame
        const frames = this.getRootFrames();
        if (frames.length > 0) {
            this.switchFrame(frames[0]);
        }
        // Clean up last doc
        if (lastDoc) {
            const { slots, collection } = lastDoc;
            collection.removeDoc(lastDoc.id);
            slots.blockUpdated.dispose();
            slots.ready.dispose();
        }
        // Save last doc id
        const { useLocalDraft } = this.config;
        const LAST_DOC_KEY = 'xpix:last-doc-id';
        if (useLocalDraft && typeof localStorage !== 'undefined') {
            localStorage.setItem(LAST_DOC_KEY, doc.id);
        }
        // Emit event
        this.emit('doc:change', doc);
    }
    getRootFrames() {
        return this.view.getRootFrames();
    }
    getCurrentFrame() {
        return this.view.getCurrentFrame();
    }
    addFrame(props) {
        props = Object.assign({ width: 600, height: 400 }, props);
        const currFrame = this.getCurrentFrame();
        if (currFrame) {
            props.width = props.width || currFrame.width;
            props.height = props.height || currFrame.height;
        }
        const root = currFrame.doc.root;
        const frame = this.addBlock('frame', props, root);
        return this.switchFrame(frame);
    }
    switchFrame(frame) {
        var _a, _b;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.switchFrame(frame);
        (_b = this.selection) === null || _b === void 0 ? void 0 : _b.clear();
        return frame;
    }
    getSelections() {
        var _a;
        const selection = (_a = this.std) === null || _a === void 0 ? void 0 : _a.selection;
        if (!selection) {
            return [];
        }
        return selection.value;
    }
    getActiveBlock(selections = this.getSelections()) {
        const doc = this.doc;
        const len = selections.length;
        if (!doc || len < 1) {
            return null;
        }
        if (len === 1) {
            return this.getBlockById(selections[0].blockId);
        }
        return (0, doc_1.createMixedBlock)(doc, {
            name: 'xpix:mixed',
            flavour: 'xpix:mixed',
            count: len,
        });
    }
    getBlockById(blockId) {
        var _a;
        const block = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.getBlockById(blockId);
        return block ? block : null;
    }
    getBlockType(block = this.getActiveBlock(), upperCase = true) {
        if (!block) {
            return '';
        }
        let type = block.flavour.replace('xpix:', '');
        if (upperCase) {
            type = type.charAt(0).toUpperCase() + type.slice(1);
        }
        return type;
    }
    getAddableRoot() {
        var _a;
        let root = this.getCurrentFrame();
        if (!root) {
            root = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.root;
        }
        return root;
    }
    // async addImage(imgSource: CanvasImageSource, props?: XPixModelProps): Promise<string> {
    // async addImage(file: Blob, props?: XPixModelProps): Promise<string>;
    addImage(url_1, props_1) {
        return tslib_1.__awaiter(this, arguments, void 0, function* (url, props, parent = this.getAddableRoot()) {
            var _a, _b;
            const { blob, width, height } = yield this.loadImage(url);
            if (!props) {
                props = {};
            }
            // Auto fill width and height if not provided
            props.height = props.height || height;
            props.width = props.width || width;
            // limitSize
            const limitSize = {
                width: parent.width || 400,
                height: parent.height || 400,
            };
            // Limit max width/height
            const aspect = props.width / props.height;
            if (props.width > props.height) {
                props.width = Math.min(props.width, limitSize.width);
                props.height = props.width / aspect;
            }
            else {
                props.height = Math.min(props.height, limitSize.height);
                props.width = props.height * aspect;
            }
            // Auto fill x, y
            props.x = (_a = props.x) !== null && _a !== void 0 ? _a : (limitSize.width - props.width) / 2;
            props.y = (_b = props.y) !== null && _b !== void 0 ? _b : (limitSize.height - props.height) / 2;
            // const _aId = typeof url === 'string' ? url : undefined;
            // const assetId = await parent.doc.blob.set(blob, _aId);
            const assetId = yield this.addAsset(blob);
            return this.addBlock('image', Object.assign(Object.assign({}, props), { assetId }), parent);
        });
    }
    getActiveNode(selections = this.getSelections()) {
        const model = this.getActiveBlock(selections);
        return model ? this.getNode(model) : null;
    }
    getNode(idOrModel) {
        var _a;
        let model = idOrModel;
        if (typeof idOrModel === 'string') {
            model = this.getBlockById(idOrModel);
        }
        if (!model) {
            model = this.getActiveBlock();
        }
        if (!model) {
            return null;
        }
        return (_a = this.view) === null || _a === void 0 ? void 0 : _a.stage.findOne(`#${model.getFullId()}`);
    }
    addBlock(type, props = {}, parent = this.getAddableRoot()) {
        if (!parent) {
            throw new Error('addBlock: parent not found');
        }
        const doc = parent.doc;
        const flavour = (type.indexOf('xpix:') !== 0 ? `xpix:${type}` : type);
        const schema = doc.getSchemaByFlavour(flavour);
        if (!schema) {
            throw new Error('addBlock: schema not found for type: ' + type);
        }
        //TODO: 后期解决双向继承类型问题，暂时使用 any 规避
        const modelId = doc.addBlock(flavour, props, parent.id);
        const model = doc.getBlockById(modelId);
        const node = this.getNode(model);
        if (!node) {
            // Remove model if node not found
            doc.deleteBlock(model);
            throw new Error('Node not found for model: ' + modelId);
        }
        // return node as XPixBaseBlock;
        return model;
    }
    updateBlock(block, props) {
        const doc = block.doc;
        doc.updateBlock(block, props);
    }
    removeBlock(block) {
        const doc = block.doc;
        doc.deleteBlock(block);
    }
    addAsset(blob, id) {
        var _a;
        return (_a = this.doc) === null || _a === void 0 ? void 0 : _a.blob.set(blob, id);
    }
    select(blocks) {
        if (!this.std) {
            return;
        }
        if (!Array.isArray(blocks)) {
            blocks = [blocks];
        }
        const docSelection = this.std.selection;
        const sels = blocks.map((block) => {
            return docSelection.create('block', {
                path: [block.id],
            });
        });
        docSelection.set(sels);
    }
    fitZoom() {
        var _a;
        const frame = this.getCurrentFrame();
        const node = frame ? this.getNode(frame) : null;
        if (node) {
            (_a = this.view) === null || _a === void 0 ? void 0 : _a.zoomBy(node);
        }
    }
    zoomIn() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.zoomIn();
    }
    zoomOut() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.zoomOut();
    }
    zoomTo(ratio) {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.zoomTo(ratio);
    }
    // Tools
    showOpenFilePicker(cfg) {
        return (0, picker_1.showOpenFilePicker)(cfg);
    }
    loadImage(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const blob = yield (0, loader_1.loadBlob)(url);
            const image = yield (0, loader_1.loadImage)(blob);
            return {
                height: image.naturalHeight,
                width: image.naturalWidth,
                image,
                blob,
            };
        });
    }
    exportImage(cfg, block) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!block) {
                block = this.getCurrentFrame();
            }
            if (!block) {
                throw new Error('No block found');
            }
            // TODO: support MixedBlock
            if (block.count > 1) {
                throw new Error('Mixed block not supported');
            }
            const node = this.getNode(block);
            if (!node) {
                throw new Error('No node found');
            }
            const mimeType = (cfg === null || cfg === void 0 ? void 0 : cfg.mimeType) || 'image/png';
            const ext = mimeType.split('/')[1] || 'png';
            const name = `${block.name || 'xpix-export-image'}.${ext}`;
            const blob = (yield node.toBlob(cfg));
            const file = new File([blob], name, {
                type: mimeType,
            });
            return file;
        });
    }
    saveToFile(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const file = url;
            if (url instanceof Blob) {
                url = URL.createObjectURL(url);
            }
            // TODO: stream download
            const linkEl = document.createElement('a');
            linkEl.download = file.name || '';
            linkEl.href = url;
            linkEl.click();
        });
    }
    // Snapshot
    fromJSON(json) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const doc = yield (0, doc_1.fromJSON)(json);
            this.setDoc(doc);
            // Force reset history
            doc.resetHistory();
        });
    }
    toJSON() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (0, doc_1.toJSON)(this.doc);
        });
    }
    // destroy
    destroy() {
        var _a;
        (_a = this.view) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    runDemo() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.addBlock('shape', {
                type: 'rect',
                cornerRadius: 5,
                fill: '#EEE',
                stroke: '#DDD',
                strokeWidth: 2,
                width: 560,
                height: 360,
                x: 20,
                y: 20,
            });
            yield this.addBlock('shape', {
                type: 'circle',
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4,
                x: 80,
                y: 80,
            });
            const size = 200;
            const pxSize = size * (window.devicePixelRatio || 1);
            const imgURL = 'https://st0.dancf.com/02/cms/202212290331-12c2.png';
            yield this.addImage(`${imgURL}?x-oss-process=image/interlace,1/crop,g_nw,w_${pxSize},h_${pxSize}`, {
                height: size,
                width: size,
                x: 190,
                y: 80,
            });
            // await this.addBlock('text', {
            //   content: 'Hello XPix-Editor'
            // });
            // const json = await (await fetch('http://localhost/d/x.xpix.json')).json();
            // await this.fromJSON(json);
        });
    }
}
exports.Editor = Editor;
function createEditor(options) {
    return new Editor(options);
}
exports.createEditor = createEditor;
//# sourceMappingURL=editor.js.map