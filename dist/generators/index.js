"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var geographic_1 = __importDefault(require("./geographic"));
var identification_1 = __importDefault(require("./identification"));
var math_1 = __importDefault(require("./math"));
var util_1 = __importDefault(require("./util"));
var finance_1 = __importDefault(require("./finance"));
exports.default = {
    finance: finance_1.default,
    geographic: geographic_1.default,
    identification: identification_1.default,
    math: math_1.default,
    util: util_1.default
};
