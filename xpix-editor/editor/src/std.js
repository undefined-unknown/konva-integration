"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPiXBlockStdScope = exports.BaseSelection = exports.BlockStdScope = exports.DisposableGroup = void 0;
// export { BlockSpec, BlockStdScope } from '@blocksuite/block-std';
const block_std_1 = require("@blocksuite/block-std");
// Export base types
var utils_1 = require("@blocksuite/global/utils");
Object.defineProperty(exports, "DisposableGroup", { enumerable: true, get: function () { return utils_1.DisposableGroup; } });
var block_std_2 = require("@blocksuite/block-std");
Object.defineProperty(exports, "BlockStdScope", { enumerable: true, get: function () { return block_std_2.BlockStdScope; } });
Object.defineProperty(exports, "BaseSelection", { enumerable: true, get: function () { return block_std_2.BaseSelection; } });
class XPiXBlockStdScope extends block_std_1.BlockStdScope {
    constructor(options) {
        super(options);
        this.editor = options.editor;
    }
}
exports.XPiXBlockStdScope = XPiXBlockStdScope;
//# sourceMappingURL=std.js.map