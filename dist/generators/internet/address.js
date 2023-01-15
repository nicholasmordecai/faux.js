"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressString = exports.address = exports.country = exports.houseNameNumber = exports.street = exports.county = exports.city = exports.postcode = void 0;
var number_1 = require("../math/number");
var array_1 = require("../util/array");
var string_1 = require("../util/string");
var configuration_1 = require("../../configuration");
/**
 * @description Generate a random postcode
 *
 * @returns {string}
 */
function postcode() {
    var format = (0, array_1.rngFromArray)(configuration_1.getLocale.zipcodeFormats);
    return (0, string_1.fromFormat)(format);
}
exports.postcode = postcode;
/**
 * @description Generate a random city name
 *
 * @returns {string}
 */
function city() {
    return (0, array_1.rngFromArray)(configuration_1.getLocale.cities);
}
exports.city = city;
/**
 * Generate a random county
 *
 * @returns {string}
 */
function county() {
    return (0, array_1.rngFromArray)(configuration_1.getLocale.counties);
}
exports.county = county;
/**
 * Generate a random street name
 *
 * @returns {string}
 */
function street() {
    return "".concat((0, array_1.rngFromArray)(configuration_1.getLocale.streets), " ").concat((0, array_1.rngFromArray)(configuration_1.getLocale.streetSuffixes));
}
exports.street = street;
/**
 * Generate a random house name or number
 *
 * @returns {(string | number)}
 */
function houseNameNumber() {
    var format = (0, array_1.rngFromArray)(configuration_1.getLocale.houseNameFormats);
    if (format === 'N') {
        return (0, number_1.int)({ min: 1, max: 150 });
    }
    else {
        return "".concat((0, array_1.rngFromArray)(configuration_1.getLocale.houseNamePrefixes), " ").concat((0, array_1.rngFromArray)(configuration_1.getLocale.houseNameSuffixes));
    }
}
exports.houseNameNumber = houseNameNumber;
/**
 * Generate a random country
 *
 * @returns {string}
 */
function country() {
    return configuration_1.getLocale.name;
}
exports.country = country;
/**
 * Address generator
 *
 * @returns {IAddress}
 */
function address() {
    return {
        country: configuration_1.getLocale.name,
        county: county(),
        city: city(),
        street: street(),
        houseNumber: houseNameNumber(),
        postcode: postcode()
    };
}
exports.address = address;
/**
 * Address described as a string
 *
 * @returns {string}
 */
function addressString() {
    var addr = address();
    return "".concat(addr.houseNumber, " ").concat(addr.street, ", ").concat(addr.county, ", ").concat(addr.city, ", ").concat(addr.country, ", ").concat(addr.postcode);
}
exports.addressString = addressString;
exports.default = {
    postcode: postcode,
    city: city,
    county: county,
    country: country,
    street: street,
    houseNameNumber: houseNameNumber,
    address: address,
    addressString: addressString
};
