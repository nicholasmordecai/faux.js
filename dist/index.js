"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tseudo = void 0;
var configuration_1 = require("./configuration");
var generators_1 = require("./generators");
var core_1 = __importDefault(require("./core"));
var api_1 = __importDefault(require("./api"));
var locales_1 = require("./locales");
exports.Tseudo = {
    API: api_1.default,
    Config: configuration_1.Config,
    Core: core_1.default,
    Generators: generators_1.Generators,
    Locales: locales_1.locales,
};
