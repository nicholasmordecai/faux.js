"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rngFromArray = void 0;
var number_1 = require("../math/number");
function rngFromArray(array) {
    return array[(0, number_1.int)({ min: 0, max: array.length - 1 })];
}
exports.rngFromArray = rngFromArray;
exports.default = {
    rngFromArray: rngFromArray
};
