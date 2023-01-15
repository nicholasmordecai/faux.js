"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = exports.token = exports.JWT = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var string_1 = require("../util/string");
/**
 * @description Generates a new Json Web Token
 *
 * @example
 * const token = sign({some: payload});
 *
 * @param { string | object | buffer } payload
 * @param { string } privateKey
 * @param { SignOptions } options
 * @returns { string }
 */
function JWT(payload, privateKey, options) {
    if (payload === void 0) { payload = ''; }
    if (privateKey === void 0) { privateKey = ''; }
    if (options === void 0) { options = {}; }
    if (!privateKey)
        privateKey = (0, string_1.fromFormat)('aAaAaAaAaAaAaAaA');
    return (0, jsonwebtoken_1.sign)(payload, privateKey, options);
}
exports.JWT = JWT;
function token(len) {
    if (len === void 0) { len = 10; }
    return (0, string_1.alphaN)(len);
}
exports.token = token;
exports.authentication = {
    JWT: JWT
};
