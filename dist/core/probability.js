"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValue = exports.getConditionFromProbability = exports.validateConditions = exports.generate = exports.Probability = void 0;
var number_1 = require("../generators/math/number");
function Probability(options) {
    return function () {
        return generate(options);
    };
}
exports.Probability = Probability;
function generate(options) {
    validateConditions(options.conditions);
    var condition = getConditionFromProbability(options.conditions);
    return getValue(condition.generator);
}
exports.generate = generate;
function validateConditions(conditions) {
    var allProbs = 0;
    for (var _i = 0, conditions_1 = conditions; _i < conditions_1.length; _i++) {
        var condition = conditions_1[_i];
        allProbs += condition.probability;
    }
    if (allProbs === 100) {
        return true;
    }
    else {
        throw new Error('Conditions are not valid. They do not equal 100.');
    }
}
exports.validateConditions = validateConditions;
function getConditionFromProbability(conditions) {
    var calculatedProb = (0, number_1.float)({ min: 0, max: 100 });
    var previousProb = 0;
    for (var _i = 0, conditions_2 = conditions; _i < conditions_2.length; _i++) {
        var condition = conditions_2[_i];
        if (calculatedProb >= previousProb && calculatedProb < previousProb + condition.probability) {
            return condition;
        }
        previousProb = calculatedProb;
    }
    throw new Error('Could not generate a conditional value.');
}
exports.getConditionFromProbability = getConditionFromProbability;
function getValue(generator) {
    if (generator instanceof Function) {
        return generator();
    }
    else {
        return generator;
    }
}
exports.getValue = getValue;
