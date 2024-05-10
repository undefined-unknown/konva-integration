"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBlobFromFile = exports.loadBlobFromURL = exports.loadBlob = void 0;
const tslib_1 = require("tslib");
// export async function loadBlob(file: Blob): Promise<Blob>;
function loadBlob(url) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (url instanceof Blob) {
            return loadBlobFromFile(url);
        }
        return loadBlobFromURL(url);
    });
}
exports.loadBlob = loadBlob;
;
function loadBlobFromURL(url) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        const blob = yield res.blob();
        return loadBlobFromFile(blob);
    });
}
exports.loadBlobFromURL = loadBlobFromURL;
function loadBlobFromFile(file) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (file instanceof File) {
            return file;
        }
        // TODO: parse file type from blob
        file = new File([file], 'unknown.ext', {
            type: 'application/octet-stream'
        });
        return file;
    });
}
exports.loadBlobFromFile = loadBlobFromFile;
//# sourceMappingURL=blob.js.map