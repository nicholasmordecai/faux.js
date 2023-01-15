"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = exports.alphaN = exports.fromFormat = void 0;
var number_1 = require("../math/number");
var capitalCharCodes = { min: 65, max: 90 };
var lowerCaseCharCodes = { min: 97, max: 122 };
var alphaNumerics = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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
            result += String.fromCharCode((0, number_1.int)(capitalCharCodes));
        }
        // lower case alpha (a-z)
        else if (char === 'a') {
            result += String.fromCharCode((0, number_1.int)(lowerCaseCharCodes));
        }
        else {
            result += char;
        }
    }
    return result;
}
exports.fromFormat = fromFormat;
function alphaN(length) {
    var result = '';
    var charLen = alphaNumerics.length - 1;
    for (var i = length; i > 0; i--) {
        result += alphaNumerics[(0, number_1.int)({ min: 0, max: charLen })];
    }
    return result;
}
exports.alphaN = alphaN;
exports.string = {
    alphaN: alphaN,
    fromFormat: fromFormat
};
