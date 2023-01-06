"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = __importDefault(require("./person"));
var uuid_1 = __importDefault(require("./uuid"));
exports.default = {
    person: person_1.default,
    uuid: uuid_1.default
};
