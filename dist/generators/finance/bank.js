"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvv = exports.cardNumber = exports.sortCode = exports.accountNumber = exports.IBAN = void 0;
var string_1 = require("../util/string");
var configuration_1 = require("../../configuration");
/**
 * @category Generators
 * @subcategory Finance
 */
// https://www.iban.com/structure
// https://www.investopedia.com/terms/i/iban.asp
function IBAN() {
    return (0, string_1.fromFormat)(configuration_1.getLocale.bank.iban);
}
exports.IBAN = IBAN;
// https://treasuryxl.com/blog/what-are-bic-swift-codes-how-do-you-find-them-and-how-do-they-work/#:~:text=Let's%20get%20this%20BIC%20format,bank's%20head%20office%20is%20situated.
// export function SWIFT() {
// }
// export function BIC() {
// }
function accountNumber() {
    return parseInt((0, string_1.fromFormat)('99999999'));
}
exports.accountNumber = accountNumber;
function sortCode() {
    return parseInt((0, string_1.fromFormat)('999999'));
}
exports.sortCode = sortCode;
function cardNumber() {
    return (0, string_1.fromFormat)('9999-9999-9999-9999');
}
exports.cardNumber = cardNumber;
// export function validFrom() {
// }
// export function validTo() {
// }
function cvv() {
    return parseInt((0, string_1.fromFormat)('999'));
}
exports.cvv = cvv;
exports.default = {
    IBAN: IBAN,
    accountNumber: accountNumber,
    sortCode: sortCode,
    cardNumber: cardNumber,
    cvv: cvv
};
