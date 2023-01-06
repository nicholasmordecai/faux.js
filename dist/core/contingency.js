"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contingency = void 0;
function Contingency(parameters, generator) {
    var result = generator.apply(parameters);
    return result;
}
exports.Contingency = Contingency;
