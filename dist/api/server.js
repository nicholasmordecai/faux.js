"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = exports.buildResults = void 0;
var fastify_1 = __importDefault(require("fastify"));
var register_1 = require("../core/register");
var address_1 = __importDefault(require("../generators/geographic/address"));
var number_1 = require("../generators/math/number");
function buildResults(count, route) {
    if (count) {
        var results = [];
        for (var i = count; i > 0; i--) {
            results.push(routes[route].build());
        }
        return results;
    }
    else {
        return routes[route].build();
    }
}
exports.buildResults = buildResults;
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.run = function (routes, config) {
        var server = (0, fastify_1.default)();
        buildRoutes(server, config);
        server.listen({ port: config.port || 3000 }, function (err, address) {
            if (err)
                handleError(err);
            console.log("tseudo server listening at ".concat(address));
        });
        return server;
    };
    return Server;
}());
exports.Server = Server;
function handleError(err) {
    console.error(err);
    process.exit(1);
}
function buildRoutes(server, config) {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, route;
        var _this = this;
        return __generator(this, function (_a) {
            _loop_1 = function (route) {
                server.get(route, function (request) { return __awaiter(_this, void 0, void 0, function () {
                    var results, delay;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                results = buildResults(request.query.count, route);
                                if (!config.defaultDelay) return [3 /*break*/, 2];
                                delay = void 0;
                                if (typeof config.defaultDelay === 'number') {
                                    delay = config.defaultDelay;
                                }
                                else {
                                    delay = (0, number_1.int)({ min: config.defaultDelay.min, max: config.defaultDelay.max });
                                }
                                return [4 /*yield*/, pause(delay)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, results];
                            case 2: return [2 /*return*/, results];
                        }
                    });
                }); });
            };
            for (route in routes) {
                _loop_1(route);
            }
            return [2 /*return*/];
        });
    });
}
function pause(duration) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(resolve, duration);
                })];
        });
    });
}
var user = {
    address: address_1.default,
    age: function () { return Math.round((0, number_1.normalDist)(20, 40, 2)); }
};
var userRegister = new register_1.Register(user);
var routes = {
    '/user': userRegister,
};
Server.run(routes, {});