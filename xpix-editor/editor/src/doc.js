"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMixedBlock = exports.toJSON = exports.fromJSON = exports.loadDoc = exports.initDoc = exports.createEmptyDoc = exports.createDoc = exports.Job = exports.defineBlockSchema = exports.Schema = exports.BlockModel = exports.DocCollection = exports.Doc = exports.XPixBlockModel = void 0;
const tslib_1 = require("tslib");
const store_1 = require("@blocksuite/store");
const y_indexeddb_1 = require("y-indexeddb");
const client_1 = require("@liveblocks/client");
const yjs_1 = require("@liveblocks/yjs");
const specs_1 = require("./specs");
var base_block_1 = require("./base-block");
Object.defineProperty(exports, "XPixBlockModel", { enumerable: true, get: function () { return base_block_1.XPixBlockModel; } });
var store_2 = require("@blocksuite/store");
Object.defineProperty(exports, "Doc", { enumerable: true, get: function () { return store_2.Doc; } });
Object.defineProperty(exports, "DocCollection", { enumerable: true, get: function () { return store_2.DocCollection; } });
Object.defineProperty(exports, "BlockModel", { enumerable: true, get: function () { return store_2.BlockModel; } });
Object.defineProperty(exports, "Schema", { enumerable: true, get: function () { return store_2.Schema; } });
Object.defineProperty(exports, "defineBlockSchema", { enumerable: true, get: function () { return store_2.defineBlockSchema; } });
Object.defineProperty(exports, "Job", { enumerable: true, get: function () { return store_2.Job; } });
// TODO: Support multiple collections
const schema = new store_1.Schema().register(specs_1.XPixSchemaList);
const collection = new store_1.DocCollection({
    schema,
    id: 'xpix.collection.default',
    // TODO: Support blob upload
    blobStorages: [
        // createSimpleServerStorage,
        store_1.createIndexeddbStorage,
    ],
});
function createDoc(id) {
    const doc = collection.createDoc({ id });
    return doc;
}
exports.createDoc = createDoc;
function createEmptyDoc() {
    const doc = createDoc();
    return initDoc(doc);
}
exports.createEmptyDoc = createEmptyDoc;
function initDoc(doc) {
    doc.load(() => {
        if (!doc.isEmpty) {
            return;
        }
        const pageBlockId = doc.addBlock('xpix:page');
        //TODO: 后期解决双向继承类型问题，暂时使用 any 规避
        doc.addBlock('xpix:frame', {
            // background: '#F00',
            height: 400,
            width: 600,
        }, pageBlockId);
        // Reset history
        doc.resetHistory();
    });
    return doc;
}
exports.initDoc = initDoc;
function loadDoc(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let doc = collection.getDoc(id || '');
        if (!doc) {
            doc = createDoc(id || undefined);
        }
        // For debug
        // return initDoc(doc);
        // TODO: Implement doc change and leave room
        return Promise.race([
            // IndexeddbPersistence
            new Promise((resolve, reject) => {
                const provider = new y_indexeddb_1.IndexeddbPersistence(doc.id, doc.spaceDoc);
                provider.once('synced', resolve);
                setTimeout(() => {
                    reject(new Error('Load doc timeout.'));
                }, 10 * 1000);
            }),
            // LiveblocksProvider
            new Promise((resolve, reject) => {
                // TODO: Implement user auth
                const client = (0, client_1.createClient)({
                    publicApiKey: 'pk_dev_7Ta2cDWPZ42VDVOgmYY6c-cS3NBdf-6FCOazyRwA_Z7BGB2e1nuLFD-b64-XcFbs',
                });
                const { room } = client.enterRoom(doc.id, {
                    initialPresence: {},
                });
                const provider = new yjs_1.default(room, doc.spaceDoc);
                // Debug
                // window.yProvider = provider;
                // provider.on('sync', (...args) => {
                //   console.log('sync', args);
                // });
                provider.once('synced', resolve);
                setTimeout(() => {
                    reject(new Error('Load doc timeout by liveblocks.'));
                }, 10 * 1000);
            }),
        ]).then(() => {
            return initDoc(doc);
        });
    });
}
exports.loadDoc = loadDoc;
// Snapshot
function fromJSON(json) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const job = new store_1.Job({ collection });
        const doc = yield job.snapshotToDoc(json);
        return doc;
    });
}
exports.fromJSON = fromJSON;
function toJSON(doc) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!doc) {
            return null;
        }
        const job = new store_1.Job({ collection: doc.collection });
        const json = yield job.docToSnapshot(doc);
        return json;
    });
}
exports.toJSON = toJSON;
function createMixedBlock(doc, props) {
    return Object.assign(Object.assign({}, props), { doc });
}
exports.createMixedBlock = createMixedBlock;
//# sourceMappingURL=doc.js.map