'use strict';

var uuid$2 = require('uuid');
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
function alphaNumeric(length) {
    let result = '';
    const charLen = alphaNumerics.length - 1;
    for (let i = length; i > 0; i--) {
        result += alphaNumerics[int({ min: 0, max: charLen })];
    }
    return result;
}
const string = {
    alphaNumeric: alphaNumeric,
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

/**
 * @module
 * @category Generators
 * @subcategory Math
 * @description Some awesome description for this generator...
 */
// export function uniform() {
// }
/**
 * @function normal
 * @description Generate a number from within a normal distribution / bell curve
 *
 * @param {number} min minimum value
 * @param {number} max maximum value
 * @param {number} skew skew value
 * @returns {number} the generated number
 *
 * @example typescript const value = normal(0, 10, 1);
 */
function normal(min, max, skew) {
    let u = 0, v = 0;
    while (u === 0)
        u = mulberry32(); //Converting [0,1) to (0,1)
    while (v === 0)
        v = mulberry32();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) {
        num = normal(min, max, skew); // resample between 0 and 1 if out of range
    }
    else {
        num = Math.pow(num, skew);
        num *= max - min;
        num += min;
    }
    return num;
}
function binomialCoefficient(s, t) {
    let coefficient = 1;
    for (let i = 0; i < t; i++) {
        coefficient *= (s - i) / (i + 1);
    }
    return coefficient;
}
/**
 * @function binomial
 * @description Calculate a number for a binomial distribution
 *
 * @param {number} k number of trials
 * @param {number} n maximum value
 * @param {number} p probability of a success
 * @returns {number} the generated number
 *
 * @example typescript const value = binomial(0, 10, 1);
 */
function binomial(k, n, p) {
    return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}
/**
 * @function exponential
 * @description Calculate a number from an exponential distribution
 *
 * @param {number} lambda rate
 * @returns {number} the generated number
 *
 * @example typescript const value = binomial(0, 10, 1);
 */
function exponential(lambda) {
    return -Math.log(1.0 - float()) / lambda;
}
/**
 * @function pareto
 * @description Pareto distribution (80/20 rule)
 *
 * @param {number} minimum minimum value
 * @param {number} alpha alpha
 * @returns {number} the generated number
 *
 * @example typescript const value = pareto(0, 10, 1);
 */
function pareto(minimum, alpha) {
    return minimum / Math.pow((1.0 - float()), 1.0 / alpha);
}

const Math$1 = {
    int,
    float,
    bool,
    percent,
    normal
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

function BitcoinAddress() {
    const addressLength = int({ min: 26, max: 35 });
    return alphaNumeric(addressLength);
}
const Crypto = {
    BitcoinAddress
};

const Finance = {
    Bank,
    Crypto
};

const Generators = {
    Finance,
    Geographic,
    Identification,
    Math: Math$1,
    Util
};

// import { sign, SignOptions } from 'jsonwebtoken';
/**
 * @description Generates a new json web token (JWT)
 *
 * @example
 * const token = sign({some: payload});
 *
 */
// export function JWT(payload: string | object | Buffer = '', privateKey = '', options: SignOptions = {}): string {
// 	if (!privateKey) privateKey = fromFormat('aAaAaAaAaAaAaAaA');
// 	return sign(payload, privateKey, options);
// }
/**
 * @description generates a random alpha numeric token
 *
 * @example
 * const t = token(); // hA76dcB12l
 */
function token(len = 10) {
    return alphaNumeric(len);
}
const Authentication = {
    // JWT,
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

const Probability = {
    binomial,
    exponential,
    normal,
    pareto
};

// Root level exports
const fauxjs = {
    Config,
    Generators,
    Locales: locales,
    Bank,
    Address,
    Map,
    Person,
    Authentication,
    Password,
    Number,
    string,
    Array,
    Probability
};

exports.Address = Address;
exports.Array = Array;
exports.Authentication = Authentication;
exports.Bank = Bank;
exports.Config = Config;
exports.Generators = Generators;
exports.Locales = locales;
exports.Map = Map;
exports.Number = Number;
exports.Password = Password;
exports.Person = Person;
exports.Probability = Probability;
exports.fauxjs = fauxjs;
exports.string = string;
