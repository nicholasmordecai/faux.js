"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory(obj) {
        this.dictionary = obj;
    }
    Factory.prototype.add = function (key, property) {
        this.dictionary[key] = property;
    };
    Factory.prototype.get = function (key) {
        return this.dictionary[key];
    };
    Factory.prototype.build = function () {
        return this.traverseObject(this.dictionary, {});
    };
    // todo - fix the type any's in the parameters
    Factory.prototype.traverseObject = function (object, result) {
        for (var key in object) {
            var item = object[key];
            if (typeof item === 'function') {
                var fn = item;
                result[key] = fn();
            }
            else if (typeof item === 'object') {
                if (item instanceof Factory) {
                    result[key] = item.build();
                }
                else {
                    result[key] = this.traverseObject(item, {});
                }
            }
            else {
                result[key] = item;
            }
        }
        return result;
    };
    return Factory;
}());
exports.Factory = Factory;
