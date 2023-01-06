"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gender = exports.middleNames = exports.lastName = exports.firstName = exports.fullName = exports.nickname = void 0;
var configuration_1 = require("../../configuration");
var array_1 = require("../util/array");
var number_1 = require("../math/number");
function nickname() {
    return (0, array_1.rngFromArray)(configuration_1.getLocale.names.nicknames);
}
exports.nickname = nickname;
function fullName(options) {
    var gen;
    if (options && options.gender) {
        gen = options.gender;
    }
    else {
        gen = gender();
    }
    return {
        firstName: firstName({ gender: gen }),
        lastName: lastName(),
        middleNames: middleNames(),
        gender: gen,
        nickName: nickname()
    };
}
exports.fullName = fullName;
function firstName(options) {
    if (options && options.gender) {
        if (options.gender === 'Male') {
            return (0, array_1.rngFromArray)(configuration_1.getLocale.names.male);
        }
        else {
            return (0, array_1.rngFromArray)(configuration_1.getLocale.names.female);
        }
    }
    else {
        var male = (0, number_1.bool)();
        if (male) {
            return (0, array_1.rngFromArray)(configuration_1.getLocale.names.male);
        }
        else {
            return (0, array_1.rngFromArray)(configuration_1.getLocale.names.female);
        }
    }
}
exports.firstName = firstName;
function lastName() {
    return (0, array_1.rngFromArray)(configuration_1.getLocale.names.lastNames);
}
exports.lastName = lastName;
// todo there is a roughly 0.0004% chance of generating two middle names that are identicle.
// Should look at removing duplicates - but don't want to bog the code down on something superfluous
function middleNames() {
    var count = (0, number_1.int)({ min: 0, max: 2 });
    var middleNames = [];
    for (var i = count; i > 0; i--) {
        middleNames.push((0, array_1.rngFromArray)(configuration_1.getLocale.names.middleNames));
    }
    return middleNames;
}
exports.middleNames = middleNames;
function gender() {
    var male = (0, number_1.bool)();
    if (male) {
        return 'Male';
    }
    else {
        return 'Female';
    }
}
exports.gender = gender;
// export function suffix() {
// }
// export function title() {
// }
exports.default = {
    firstName: firstName,
    lastName: lastName,
    middleNames: middleNames,
    nickname: nickname,
    fullName: fullName,
    gender: gender
};
