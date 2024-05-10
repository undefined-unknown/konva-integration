"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showOpenFilePicker = exports.defaultOpenFilePickerOptions = void 0;
const tslib_1 = require("tslib");
exports.defaultOpenFilePickerOptions = {
    multiple: false,
    excludeAcceptAllOption: true,
    accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
    }
};
function showOpenFilePicker() {
    return tslib_1.__awaiter(this, arguments, void 0, function* (cfg = exports.defaultOpenFilePickerOptions) {
        // Fix cfg
        if (cfg) {
            if (cfg.excludeAcceptAllOption === undefined) {
                cfg.excludeAcceptAllOption = true;
            }
            if (cfg.accept && !cfg.types) {
                cfg.types = [{
                        accept: cfg.accept
                    }];
            }
        }
        if (window.showOpenFilePicker) {
            const handles = yield window.showOpenFilePicker(cfg);
            return Promise.all(handles.map(handle => handle.getFile()));
        }
        throw new Error('File picker not supported');
    });
}
exports.showOpenFilePicker = showOpenFilePicker;
//# sourceMappingURL=local.js.map