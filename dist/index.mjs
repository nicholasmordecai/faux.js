Object.defineProperty(exports, "__esModule", { value: true });
exports.fauxjs = exports.Array = exports.string = exports.Number = exports.Password = exports.Authentication = exports.Person = exports.Map = exports.Address = exports.Bank = exports.Locales = exports.Generators = exports.Config = void 0;
// Root level exports
const configuration_1 = require("./configuration");
var configuration_2 = require("./configuration");
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return configuration_2.Config; } });
const generators_1 = require("./generators");
var generators_2 = require("./generators");
Object.defineProperty(exports, "Generators", { enumerable: true, get: function () { return generators_2.Generators; } });
const locales_1 = require("./locales");
var locales_2 = require("./locales");
Object.defineProperty(exports, "Locales", { enumerable: true, get: function () { return locales_2.locales; } });
// Finance
const bank_1 = require("./generators/finance/bank");
var bank_2 = require("./generators/finance/bank");
Object.defineProperty(exports, "Bank", { enumerable: true, get: function () { return bank_2.Bank; } });
// Geographic
const address_1 = require("./generators/geographic/address");
var address_2 = require("./generators/geographic/address");
Object.defineProperty(exports, "Address", { enumerable: true, get: function () { return address_2.Address; } });
const map_1 = require("./generators/geographic/map");
var map_2 = require("./generators/geographic/map");
Object.defineProperty(exports, "Map", { enumerable: true, get: function () { return map_2.Map; } });
// Identification
const person_1 = require("./generators/identification/person");
var person_2 = require("./generators/identification/person");
Object.defineProperty(exports, "Person", { enumerable: true, get: function () { return person_2.Person; } });
// Internet
const authentication_1 = require("./generators/internet/authentication");
var authentication_2 = require("./generators/internet/authentication");
Object.defineProperty(exports, "Authentication", { enumerable: true, get: function () { return authentication_2.Authentication; } });
const password_1 = require("./generators/internet/password");
var password_2 = require("./generators/internet/password");
Object.defineProperty(exports, "Password", { enumerable: true, get: function () { return password_2.Password; } });
// Math
const number_1 = require("./generators/math/number");
var number_2 = require("./generators/math/number");
Object.defineProperty(exports, "Number", { enumerable: true, get: function () { return number_2.Number; } });
// Utils
const string_1 = require("./generators/util/string");
var string_2 = require("./generators/util/string");
Object.defineProperty(exports, "string", { enumerable: true, get: function () { return string_2.string; } });
const array_1 = require("./generators/util/array");
var array_2 = require("./generators/util/array");
Object.defineProperty(exports, "Array", { enumerable: true, get: function () { return array_2.Array; } });
exports.fauxjs = {
    Config: configuration_1.Config,
    Generators: generators_1.Generators,
    Locales: locales_1.locales,
    Bank: bank_1.Bank,
    Address: address_1.Address,
    Map: map_1.Map,
    Person: person_1.Person,
    Authentication: authentication_1.Authentication,
    Password: password_1.Password,
    Number: number_1.Number,
    string: string_1.string,
    Array: array_1.Array
};
