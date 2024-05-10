"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debounce = void 0;
const lodash_es_1 = require("lodash-es");
function Debounce(delay) {
    return (target, prop) => {
        return {
            configurable: true,
            enumerable: false,
            value: (0, lodash_es_1.debounce)(target[prop], delay)
        };
    };
}
exports.Debounce = Debounce;
//# sourceMappingURL=index.js.map