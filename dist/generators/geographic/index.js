"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geo = void 0;
var address_1 = __importDefault(require("./address"));
var map_1 = __importDefault(require("./map"));
exports.Geo = {
    address: address_1.default,
    map: map_1.default
};
exports.default = {
    address: address_1.default,
    map: map_1.default
};
