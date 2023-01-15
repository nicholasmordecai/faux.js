"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.password = exports.salt = exports.md5 = void 0;
var md5Lib = __importStar(require("md5"));
var string_1 = require("../util/string");
/**
 * @category Generators
 * @subcategory Internet
 */
/**
 * @description Generates an MD5 Hash
 * @returns { string }
 */
function md5(input) {
    var rngString;
    if (!input) {
        rngString = (0, string_1.fromFormat)('AAAAAAAAAA');
    }
    else {
        rngString = input;
    }
    return md5Lib.default(rngString);
}
exports.md5 = md5;
/**
 * @description Generates a salt
 * @param len length of the salt - defaults to 10
 * @returns { string }
 */
function salt(len) {
    if (len === void 0) { len = 10; }
    return (0, string_1.fromFormat)('A'.repeat(len));
}
exports.salt = salt;
// export const sha1BlockLength = ['1', '224', '256', '384', '512'] as const;
// export function sha(blockLength: typeof sha1BlockLength[number]) {
// 	if(blockLength === '512') {
// 	}
// }
// export const sha3BlockLength = ['224', '256', '384', '512'] as const;
// export function sha3() {
// }
// export function crc() {
// }
exports.password = {
    md5: md5,
    salt: salt
};
