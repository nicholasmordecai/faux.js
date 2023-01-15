"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
var Register = /** @class */ (function () {
    function Register(obj) {
        this.dictionary = obj;
    }
    Register.prototype.add = function (key, property) {
        this.dictionary[key] = property;
    };
    Register.prototype.get = function (key) {
        return this.dictionary[key];
    };
    Register.prototype.build = function () {
        return this.traverseObject(this.dictionary, {});
    };
    // todo - fix the type any's in the parameters
    Register.prototype.traverseObject = function (object, result) {
        for (var key in object) {
            var item = object[key];
            if (typeof item === 'function') {
                var fn = item;
                result[key] = fn();
            }
            else if (typeof item === 'object') {
                if (item instanceof Register) {
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
    return Register;
}());
exports.Register = Register;
