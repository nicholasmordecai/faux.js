"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.long = exports.lat = exports.latLong = void 0;
var number_1 = require("../math/number");
/**
 * Generates a latitude and longitude object
 *
 * @export
 * @returns {LatLong}
 */
function latLong() {
    return {
        lat: lat(),
        long: long()
    };
}
exports.latLong = latLong;
/**
 * Generate a latitude
 *
 * @export
 * @returns {number}
 */
function lat() {
    return (0, number_1.int)({ min: -180, max: 180, precision: 9 });
}
exports.lat = lat;
/**
 * Generated a longitude
 *
 * @export
 * @returns {number}
 */
function long() {
    return (0, number_1.int)({ min: -180, max: 180, precision: 9 });
}
exports.long = long;
exports.default = {
    lat: lat,
    long: long,
    latLong: latLong
};
