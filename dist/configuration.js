"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocale = exports.Config = void 0;
var locales_1 = require("./locales");
exports.Config = {
    seed: Date.now(),
    locale: 'gb'
};
exports.getLocale = locales_1.locales[exports.Config.locale];
