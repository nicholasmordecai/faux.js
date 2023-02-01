'use strict';

var uuid$2 = require('uuid');
var fastify = require('fastify');
var jsonwebtoken = require('jsonwebtoken');
var md5Lib = require('md5');

const GB = {
    code: 'gb',
    name: 'United Kingdom',
    languageCode: 'en-uk',
    timezones: ['GMT'],
    zipcodeFormats: ['AAA 9AA', 'AA99 9AA', 'AA9 9AA'],
    regions: ['London', 'West Midlands', 'North West', 'South West'],
    counties: ['Kent', 'Essex', 'Devon', 'Surrey', 'Cheshire', 'Cambridge'],
    cities: ['Aberdeen', 'Belfast', 'Birmingham', 'Bradford-Leeds', 'Brighton', 'Bristol', 'Cardiff', 'Coventry', 'Dundee', 'Edinburgh', 'Glasgow', 'Hull', 'Kent', 'Liverpool', 'Manchester'],
    streets: ['Victoria', 'London', 'Church', 'Green', 'Manor', 'Kings', 'Mill', 'York'],
    streetSuffixes: ['Road', 'Street', 'Avenue', 'Crescent', 'Lane', 'Grove'],
    houseNameFormats: ['N', 'W'],
    houseNamePrefixes: ['The', 'Ivy', 'Sunny', 'Green', 'Red'],
    houseNameSuffixes: ['Barn', 'Lodge', 'Cottage', 'Bungalow', 'House', 'Farm', 'Woodlands', 'Stables'],
    bank: {
        iban: ' AA99AAAA99999999999999'
    },
    names: {
        female: ['Rosemary', 'Macie', 'Jamie', 'Kaitlin', 'Donna', 'Delilah', 'Susan', 'Alexis', 'Jada', 'Jordyn', 'Aria', 'Perla', 'Isabell', 'Monica', 'Zoe', 'Leia', 'Marely', 'Miley', 'Daphne', 'Avery', 'Caitlyn', 'Mayra', 'Serenity', 'Luna', 'Juliet', 'India', 'Monserrat', 'Brittany', 'Kendal', 'Phoenix', 'Taylor', 'Savanah', 'Danika', 'Madelyn', 'Fernanda', 'Kristina', 'Mia', 'Tia', 'Ali', 'Jaslyn', 'Lila', 'Evelyn', 'Saniya', 'Haven', 'Olivia', 'Nora', 'Abigail', 'Alisa', 'Julissa', 'Lucille', 'Hillary', 'Aileen', 'Miah', 'Dayana', 'Giselle', 'Skylar', 'Aurora', 'Jaylah', 'Kali', 'Alaina', 'Christina', 'Claudia', 'Scarlet', 'Aniyah', 'Helena', 'Areli', 'Paisley', 'Elisa', 'Jaliyah', 'Mattie', 'Finley', 'Ada', 'Janessa', 'Melissa', 'Jennifer', 'Elle', 'Laura', 'Nicole', 'Mikaela', 'Karley', 'Anika', 'Erica', 'Abril', 'Clarissa', 'Kamari', 'Adriana', 'Micah', 'Armani', 'Violet', 'Siena', 'Alia', 'Campbell', 'Catherine', 'Haleigh', 'Bryanna', 'Makayla', 'Tanya', 'Emma', 'Lindsey', 'Amani'],
        male: ['Antony', 'Urijah', 'Giovanni', 'Memphis', 'Bailey', 'Fabian', 'Ty', 'River', 'Lorenzo', 'Beckham', 'Sterling', 'Augustus', 'Semaj', 'Ruben', 'Santiago', 'Abram', 'Layton', 'Griffin', 'Carlos', 'Jonathan', 'Davin', 'Elian', 'Aditya', 'Lucas', 'Roy', 'Samson', 'Stephen', 'Andre', 'Jaquan', 'John', 'Roberto', 'Jaydon', 'Quentin', 'Declan', 'Adam', 'Cory', 'Tyrone', 'Cannon', 'Jacoby', 'Giancarlo', 'Slade', 'Abdiel', 'Tyler', 'Ezequiel', 'Brogan', 'Camron', 'Logan', 'Isaac', 'Jonah', 'Vance', 'Joaquin', 'Rodrigo', 'Emerson', 'Giovanny', 'Zachary', 'Davian', 'Quincy', 'Gianni', 'Johnathan', 'Finley', 'Ramiro', 'Brooks', 'Moses', 'Eddie', 'Isiah', 'Harper', 'Gunner', 'Braylen', 'Joel', 'Ross', 'William', 'Aaden', 'Stanley', 'Nikolas', 'Lewis', 'Braedon', 'Miguel', 'Patrick', 'Kyan', 'Timothy', 'Roger', 'Jaidyn', 'Karter', 'Brice', 'Peter', 'Duncan', 'Sullivan', 'Micah', 'Alfred', 'Zack', 'Zayne', 'Malakai', 'Johan', 'Marley', 'Xavier', 'Matthew', 'Rodney', 'Carsen', 'Ashton', 'Saul'],
        middleNames: ['Iyana', 'Giana', 'Kyla', 'Zoie', 'Ashtyn', 'Fatima', 'Taniyah', 'Hanna', 'Marianna', 'Valentina', 'Luz', 'Karly', 'Finley', 'Kaylin', 'Amiya', 'Whitney', 'Kailyn', 'Rebekah', 'Alexandria', 'Brenda', 'Maggie', 'Ingrid', 'Maia', 'Gwendolyn', 'Mayra', 'Halle', 'Aliana', 'Kaya', 'Abbey', 'Diana', 'Annika', 'Bridget', 'Precious', 'Kiana', 'Tianna', 'Aiyana', 'Meredith', 'Skyler', 'Lesly', 'Talia', 'Denisse', 'Mina', 'Jaslyn', 'Shayla', 'Aniya', 'Amaris', 'Aurora', 'Fernanda', 'Vivian', 'Campbell'],
        nicknames: ['Silly Sally', 'Frogger', 'Half Pint', 'Coach', 'Amiga', 'Guy', 'T-Dawg', 'Diet Coke', '4-Wheel', 'Chicken Legs', 'Red', 'Captain', 'Prego', 'Redbull', 'Con', 'Lovey', 'Sassafras', 'Dulce', 'Gingersnap', 'Fido', 'Baby Bird', 'Twinkly', 'Music Man', 'Carrot', 'Dork', 'Oompa Loompa', 'Chef', 'Bandit', 'Pretty Lady', 'Kitten', 'Sassy', 'Thumper', 'Bunny Rabbit', 'Donut', 'Candy', 'Chewbacca', 'Amore', 'PB&J', 'Birdy', 'Hubby', 'Cold Brew', 'Donuts', 'Swiss Miss', 'Shrinkwrap', 'Pixie Stick', 'Rainbow', 'Beautiful', 'Tough Guy', 'Figgy', 'Frankfurter'],
        lastNames: ['Benton', 'Sharp', 'Tanner', 'Braun', 'Conway', 'Mcclure', 'Kramer', 'Tapia', 'Boyle', 'Fitzpatrick', 'Craig', 'Mcgrath', 'Church', 'Estes', 'Reid', 'Grimes', 'Blevins', 'Caldwell', 'Mccarty', 'Copeland', 'Fields', 'Shea', 'Joyce', 'Bird', 'Burnett', 'Powell', 'Zuniga', 'Spence', 'Chambers', 'Cordova', 'Rojas', 'Hinton', 'Holder', 'Cantu', 'Johns', 'Freeman', 'Pratt', 'Simmons', 'Weaver', 'Thornton', 'Wong', 'Swanson', 'Browning', 'Francis', 'Moyer', 'Hahn', 'Pugh', 'Coleman', 'Willis', 'Walter']
    }
};

const locales = {
    gb: GB,
    global: GB,
    ca: GB,
    usa: GB
};

const Config = {
    seed: Date.now(),
    locale: 'gb'
};
const getLocale = locales[Config.locale];

function float(options) {
    let float;
    if (options && options.min && options.max) {
        float = mulberry32() * (options.max - options.min) + options.min;
    }
    else {
        float = mulberry32();
    }
    Config.seed += 1;
    if (options && options.precision) {
        return toFixedNumber(float, options.precision);
    }
    else {
        return float;
    }
}
function int(options) {
    if (!options) {
        return Math.floor(mulberry32() * 100);
    }
    Config.seed += 1;
    // check if null to prevent nullish checks in case they pass a 0, -1 or 1
    if (options.min != null && options.max != null) {
        return Math.floor(mulberry32() * (options.max - options.min + 1) + options.min);
    }
    return Math.floor(mulberry32() * 100);
}
// export function rngProbDist() {
// }
// export function logDist() {
// }
function percent(options) {
    return float(options);
}
function percentString(options) {
    return `${int(options)}%`;
}
function bool() {
    return float() > 0.5;
}
const Number = {
    float,
    int,
    bool,
    percent,
    percentString
};
/**
 * Internal Number Utils
 */
/**
 *
 * @param value
 * @param digits
 * @param base
 * @returns { number }
 */
function toFixedNumber(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}
// function randn_bm() {
// 	const u = 1 - mulberry32();
// 	const v = mulberry32();
// 	return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
// }
/**
 * @returns { number }
 */
function mulberry32() {
    let t = Config.seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    const result = ((t ^ t >>> 14) >>> 0) / 4294967296;
    return result;
}

function fromArray(array) {
    return array[int({ min: 0, max: array.length - 1 })];
}
const Array = {
    fromArray
};

const capitalCharCodes = { min: 65, max: 90 };
const lowerCaseCharCodes = { min: 97, max: 122 };
const alphaNumerics = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function fromFormat(format) {
    let result = '';
    for (const char of format) {
        // numberic (0-9)
        if (char === '9') {
            result += int({ min: 0, max: 9 });
            // upper case alpha (A-Z)
        }
        else if (char === 'A') {
            result += String.fromCharCode(int(capitalCharCodes));
        }
        // lower case alpha (a-z)
        else if (char === 'a') {
            result += String.fromCharCode(int(lowerCaseCharCodes));
        }
        else {
            result += char;
        }
    }
    return result;
}
function alphaN(length) {
    let result = '';
    const charLen = alphaNumerics.length - 1;
    for (let i = length; i > 0; i--) {
        result += alphaNumerics[int({ min: 0, max: charLen })];
    }
    return result;
}
const string = {
    alphaN,
    fromFormat
};

/**
 * @function postcode
 * @description Generate a random postcode
 *
 * @returns {string}
 */
function postcode() {
    const format = fromArray(getLocale.zipcodeFormats);
    return fromFormat(format);
}
/**
 * @function city
 * @description Generate a random city name
 *
 * @returns {string}
 */
function city() {
    return fromArray(getLocale.cities);
}
/**
 * @function county
 * @description Generate a random county
 *
 * @returns {string}
 */
function county() {
    return fromArray(getLocale.counties);
}
/**
 * @function street
 * @description Generate a random street name
 *
 * @returns {string}
 */
function street() {
    return `${fromArray(getLocale.streets)} ${fromArray(getLocale.streetSuffixes)}`;
}
/**
 * @function houseNameNumber
 * @description Generate a random house name or number
 *
 * @returns {(string | number)}
 */
function houseNameNumber() {
    const format = fromArray(getLocale.houseNameFormats);
    if (format === 'N') {
        return int({ min: 1, max: 150 });
    }
    else {
        return `${fromArray(getLocale.houseNamePrefixes)} ${fromArray(getLocale.houseNameSuffixes)}`;
    }
}
/**
 * @function country
 * @description Generate a random country
 *
 * @returns {string}
 */
function country() {
    return getLocale.name;
}
/**
 * @function address
 * @description Address generator
 *
 * @returns {IAddress}
 */
function address() {
    return {
        country: getLocale.name,
        county: county(),
        city: city(),
        street: street(),
        houseNumber: houseNameNumber(),
        postcode: postcode()
    };
}
/**
 * @function addressString
 * @description Address described as a string
 *
 * @returns {string}
 */
function addressString() {
    const addr = address();
    return `${addr.houseNumber} ${addr.street}, ${addr.county}, ${addr.city}, ${addr.country}, ${addr.postcode}`;
}
const Address = {
    postcode,
    city,
    county,
    country,
    street,
    houseNameNumber,
    address,
    addressString
};

/**
 * Generates a latitude and longitude object
 *
 * @returns {LatLong}
 */
function latLong() {
    return {
        lat: lat(),
        long: long()
    };
}
/**
 * Generate a latitude
 *
 * @returns {number}
 */
function lat() {
    return int({ min: -180, max: 180, precision: 9 });
}
/**
 * Generated a longitude
 *
 * @returns {number}
 */
function long() {
    return int({ min: -180, max: 180, precision: 9 });
}
const Map = {
    lat,
    long,
    latLong
};

const Geographic = {
    Address,
    Map
};

function nickname() {
    return fromArray(getLocale.names.nicknames);
}
function fullName(options) {
    let gen;
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
function firstName(options) {
    if (options && options.gender) {
        if (options.gender === 'Male') {
            return fromArray(getLocale.names.male);
        }
        else {
            return fromArray(getLocale.names.female);
        }
    }
    else {
        const male = bool();
        if (male) {
            return fromArray(getLocale.names.male);
        }
        else {
            return fromArray(getLocale.names.female);
        }
    }
}
function lastName() {
    return fromArray(getLocale.names.lastNames);
}
// todo there is a roughly 0.0004% chance of generating two middle names that are identicle.
// Should look at removing duplicates - but don't want to bog the code down on something superfluous
function middleNames() {
    const count = int({ min: 0, max: 2 });
    const middleNames = [];
    for (let i = count; i > 0; i--) {
        middleNames.push(fromArray(getLocale.names.middleNames));
    }
    return middleNames;
}
function gender() {
    const male = bool();
    if (male) {
        return 'Male';
    }
    else {
        return 'Female';
    }
}
// export function suffix() {
// }
// export function title() {
// }
const Person = {
    firstName,
    lastName,
    middleNames,
    nickname,
    fullName,
    gender
};

function uuid() {
    return uuid$2.v5('uuid', '1b671a64-40d5-491e-99b0-da01ff1f3341');
}
var uuid$1 = {
    uuid
};

const Identification = {
    Person,
    uuid: uuid$1
};

function normalDist(min, max, skew) {
    let u = 0, v = 0;
    while (u === 0)
        u = mulberry32(); //Converting [0,1) to (0,1)
    while (v === 0)
        v = mulberry32();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) {
        num = normalDist(min, max, skew); // resample between 0 and 1 if out of range
    }
    else {
        num = Math.pow(num, skew);
        num *= max - min;
        num += min;
    }
    return num;
}

const Math$1 = {
    int,
    float,
    bool,
    percent,
    normalDist
};

const Util = {
    Array,
    string
};

// https://www.iban.com/structure
// https://www.investopedia.com/terms/i/iban.asp
function IBAN() {
    return fromFormat(getLocale.bank.iban);
}
// https://treasuryxl.com/blog/what-are-bic-swift-codes-how-do-you-find-them-and-how-do-they-work/#:~:text=Let's%20get%20this%20BIC%20format,bank's%20head%20office%20is%20situated.
// export function SWIFT() {
// }
// export function BIC() {
// }
function accountNumber() {
    return parseInt(fromFormat('99999999'));
}
function sortCode() {
    return parseInt(fromFormat('999999'));
}
function cardNumber() {
    return fromFormat('9999-9999-9999-9999');
}
// export function validFrom() {
// }
// export function validTo() {
// }
function cvv() {
    return parseInt(fromFormat('999'));
}
const Bank = {
    IBAN,
    accountNumber,
    sortCode,
    cardNumber,
    cvv
};

const Finance = {
    Bank
};

const Generators = {
    Finance,
    Geographic,
    Identification,
    Math: Math$1,
    Util
};

function Contingency(parameters, generator) {
    const result = generator.apply(parameters);
    return result;
}

function Probability(options) {
    return () => {
        return generate(options);
    };
}
function generate(options) {
    validateConditions(options.conditions);
    const condition = getConditionFromProbability(options.conditions);
    return getValue(condition.generator);
}
function validateConditions(conditions) {
    let allProbs = 0;
    for (const condition of conditions) {
        allProbs += condition.probability;
    }
    if (allProbs === 100) {
        return true;
    }
    else {
        throw new Error('Conditions are not valid. They do not equal 100.');
    }
}
function getConditionFromProbability(conditions) {
    const calculatedProb = float({ min: 0, max: 100 });
    let previousProb = 0;
    for (const condition of conditions) {
        if (calculatedProb >= previousProb && calculatedProb < previousProb + condition.probability) {
            return condition;
        }
        previousProb = calculatedProb;
    }
    throw new Error('Could not generate a conditional value.');
}
function getValue(generator) {
    if (generator instanceof Function) {
        return generator();
    }
    else {
        return generator;
    }
}

class Factory {
    constructor(obj) {
        this.dictionary = obj;
    }
    add(key, property) {
        this.dictionary[key] = property;
    }
    get(key) {
        return this.dictionary[key];
    }
    /**
     * @function build
     * @description Builds a new object from the factory schema. Require you to pass in all properties.
     * @param {T} properties
     * @returns {T} A complete
     */
    build(properties) {
        return properties;
    }
    /**
     * @function buildPartial
     * @description Like the build function, but all properties are optional so you can build the object as you go.
     * It is advised to use this in conjunction with the validate function.
     *
     * @param { RecursivePartial<T> } properties
     * @returns { RecursivePartial<T> } The new object from the factory schema, but with all keys as optional
     */
    buildPartial(properties) {
        return properties;
    }
    /**
     * @function validate
     * @description Takes an object that is meant to be the same as what's described above. However, due to the partial keyword, it is possible to have missed
     * some of the properties, so use this function to ensure the object fully meets the criteria of the schema.
     * @param object
     * @returns { boolean } True if the object is valid
     */
    validate(object) {
        //? could always build a fake version to be able to compare againt?
        return this.traverseValidate(this.dictionary, object);
    }
    traverseValidate(referenceObject, object) {
        for (const key in referenceObject) {
            const referenceItem = referenceObject[key];
            const item = object[key];
            //? Should we worry about function types here?
            if (typeof item === 'object') {
                return this.traverseValidate(referenceItem, item);
            }
            else {
                if (this.itemsAreSameType(referenceItem, item)) {
                    continue;
                }
                else {
                    throw new Error(`Could not validate object. Item ${key} can not be matched as ${typeof item} against ${typeof referenceItem}`);
                }
            }
        }
        return true;
    }
    itemsAreSameType(referenceItem, item) {
        if (typeof referenceItem !== typeof item) {
            return false;
        }
        return true;
    }
    fake() {
        //? Should this be restricted by an envirnoment variable?
        return this.traverseObject(this.dictionary, {});
    }
    traverseObject(object, result) {
        for (const key in object) {
            const item = object[key];
            if (typeof item === 'function') {
                const fn = item;
                result[key] = fn();
            }
            else if (typeof item === 'object') {
                if (item instanceof Factory) {
                    result[key] = item.fake();
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
    }
}

const Core = {
    Contingency,
    Probability,
    Factory
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function buildResults(count, routes, route) {
    if (count) {
        const results = [];
        for (let i = count; i > 0; i--) {
            results.push(routes[route].build());
        }
        return results;
    }
    else {
        return routes[route].build();
    }
}
class Server {
    static run(routes, config) {
        const server = fastify();
        buildRoutes(server, routes, config);
        server.listen({ port: config.port || 3000 }, (err, address) => {
            if (err)
                handleError(err);
            console.log(`faux.js server listening at ${address}`);
        });
        return server;
    }
}
function handleError(err) {
    console.error(err);
    process.exit(1);
}
function buildRoutes(server, routes, config) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const route in routes) {
            server.get(route, (request) => __awaiter(this, void 0, void 0, function* () {
                const results = buildResults(request.query.count, routes, route);
                // If there is a default, wrap the returned response in a set timeout
                if (config.defaultDelay) {
                    let delay;
                    if (typeof config.defaultDelay === 'number') {
                        delay = config.defaultDelay;
                    }
                    else {
                        delay = int({ min: config.defaultDelay.min, max: config.defaultDelay.max });
                    }
                    yield pause(delay);
                    return results;
                }
                else {
                    return results;
                }
            }));
        }
    });
}
function pause(duration) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(resolve, duration);
        });
    });
}
// const user = {
// 	address: address,
// 	age: () => Math.round(normalDist(20, 40, 2))
// };
// const userRegister = new Factory(user);
// const routes: { [key: string]: any } = {
// 	'/user': userRegister,
// };
// Server.run(routes, {});

const API = {
    Server
};

/**
 * @description Generates a new json web token (JWT)
 *
 * @example
 * const token = sign({some: payload});
 *
 */
function JWT(payload = '', privateKey = '', options = {}) {
    if (!privateKey)
        privateKey = fromFormat('aAaAaAaAaAaAaAaA');
    return jsonwebtoken.sign(payload, privateKey, options);
}
/**
 * @description generates a random alpha numeric token
 *
 * @example
 * const t = token(); // hA76dcB12l
 */
function token(len = 10) {
    return alphaN(len);
}
const Authentication = {
    JWT,
    token
};

/**
 * @module
 * @category Generators
 * @subcategory Internet
 * @description Some awesome description for this generator...
 */
/**
 * @function md5
 * @description Hash any string input with MD5
 *
 * @param {string} [input] input string to hash
 * @returns {string} the hashed string
 *
 * @example typescript const hash = md5('my-string');
 */
function md5(input) {
    let rngString;
    if (!input) {
        rngString = fromFormat('AAAAAAAAAA');
    }
    else {
        rngString = input;
    }
    return md5Lib(rngString);
}
/**
 * @function salt
 * @description Generates a random salt
 *
 * @param {number} [len=10] input string to hash
 * @returns {string} the hashed string
 *
 * @example const randomSalt = salt();
 *
 * const randomSalt2 = salt(12);
 */
function salt(len = 10) {
    return fromFormat('A'.repeat(len));
}
// export const sha1BlockLength = ['1', '224', '256', '384', '512'] as const;
// export function sha(blockLength: typeof sha1BlockLength[number]) {
// 	if(blockLength === '512') {
// 	}
// }
// export const sha3BlockLength = ['224', '256', '384', '512'] as const;
// export function sha3() {
// }
// export function crc() {
// }
const Password = {
    md5,
    salt
};

exports.API = API;
exports.Address = Address;
exports.Array = Array;
exports.Authentication = Authentication;
exports.Bank = Bank;
exports.Config = Config;
exports.Contingency = Contingency;
exports.Core = Core;
exports.Factory = Factory;
exports.Generators = Generators;
exports.Locales = locales;
exports.Map = Map;
exports.Number = Number;
exports.Password = Password;
exports.Person = Person;
exports.Probability = Probability;
exports.Server = Server;
exports.string = string;
