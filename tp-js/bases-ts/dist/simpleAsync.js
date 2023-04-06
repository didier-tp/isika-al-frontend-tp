"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleAsync = void 0;
class SimpleAsync {
    getUppercaseDataAfterDelay(data, delay) {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(data.toUpperCase()); }, delay);
        });
    }
}
exports.SimpleAsync = SimpleAsync;
//# sourceMappingURL=simpleAsync.js.map