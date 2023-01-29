"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = exports.token = exports.JWT = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var string_1 = require("../util/string");
/**
 * @description Generates a new json web token (JWT)
 *
 * @example
 * const token = sign({some: payload});
 *
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
/**
 * @description generates a random alpha numeric token
 *
 * @example
 * const t = token(); // hA76dcB12l
 */
function token(len) {
    if (len === void 0) { len = 10; }
    return (0, string_1.alphaN)(len);
}
exports.token = token;
exports.authentication = {
    JWT: JWT,
    token: token
};
