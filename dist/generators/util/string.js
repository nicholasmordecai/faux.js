"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromFormat = void 0;
var number_1 = require("../math/number");
function fromFormat(format) {
    var result = '';
    for (var _i = 0, format_1 = format; _i < format_1.length; _i++) {
        var char = format_1[_i];
        // numberic (0-9)
        if (char === '9') {
            result += (0, number_1.int)({ min: 0, max: 9 });
            // upper case alpha (A-Z)
        }
        else if (char === 'A') {
            result += String.fromCharCode((0, number_1.int)({ min: 65, max: 90 }));
        }
        // lower case alpha (a-z)
        else if (char === 'a') {
            result += String.fromCharCode((0, number_1.int)({ min: 97, max: 122 }));
        }
        else {
            result += char;
        }
    }
    return result;
}
exports.fromFormat = fromFormat;
exports.default = {
    fromFormat: fromFormat
};
