"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
var uuid_1 = require("uuid");
/**
 * @category Generators
 * @subcategory Identification
 */
function uuid() {
    return (0, uuid_1.v5)('uuid', '1b671a64-40d5-491e-99b0-da01ff1f3341');
}
exports.uuid = uuid;
exports.default = {
    uuid: uuid
};
