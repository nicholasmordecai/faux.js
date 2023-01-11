"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tseudo = void 0;
var configuration_1 = require("./configuration");
var generators_1 = __importDefault(require("./generators"));
var core_1 = __importDefault(require("./core"));
var api_1 = __importDefault(require("./api"));
var locales_1 = require("./locales");
exports.default = {
    API: api_1.default,
    Config: configuration_1.Config,
    Core: core_1.default,
    Generators: generators_1.default,
    Locales: locales_1.locales,
};
exports.Tseudo = {
    person: generators_1.default.identification.person,
    uuid: generators_1.default.identification.uuid,
    address: generators_1.default.geographic.address,
    map: generators_1.default.geographic.map,
    bank: generators_1.default.finance.bank,
    number: generators_1.default.math.number,
    array: generators_1.default.util.array,
    string: generators_1.default.util.string
};
