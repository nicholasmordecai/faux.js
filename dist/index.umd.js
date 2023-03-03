(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.index = global.index || {}, global.index.js = {})));
})(this, (function (exports) { 'use strict';

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
    const Number$1 = {
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
    const Array$1 = {
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

    var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function validate(uuid) {
      return typeof uuid === 'string' && REGEX.test(uuid);
    }

    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */

    const byteToHex = [];

    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 0x100).toString(16).slice(1));
    }

    function unsafeStringify(arr, offset = 0) {
      // Note: Be careful editing this code!  It's been tuned for performance
      // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
      return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    }

    function parse(uuid) {
      if (!validate(uuid)) {
        throw TypeError('Invalid UUID');
      }

      let v;
      const arr = new Uint8Array(16); // Parse ########-....-....-....-............

      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 0xff;
      arr[2] = v >>> 8 & 0xff;
      arr[3] = v & 0xff; // Parse ........-####-....-....-............

      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 0xff; // Parse ........-....-####-....-............

      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 0xff; // Parse ........-....-....-####-............

      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 0xff; // Parse ........-....-....-....-############
      // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
      arr[11] = v / 0x100000000 & 0xff;
      arr[12] = v >>> 24 & 0xff;
      arr[13] = v >>> 16 & 0xff;
      arr[14] = v >>> 8 & 0xff;
      arr[15] = v & 0xff;
      return arr;
    }

    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str)); // UTF8 escape

      const bytes = [];

      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }

      return bytes;
    }

    const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
    function v35(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        var _namespace;

        if (typeof value === 'string') {
          value = stringToBytes(value);
        }

        if (typeof namespace === 'string') {
          namespace = parse(namespace);
        }

        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
          throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`


        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;

        if (buf) {
          offset = offset || 0;

          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }

          return buf;
        }

        return unsafeStringify(bytes);
      } // Function#name is not settable on some platforms (#270)


      try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
      } catch (err) {} // For CommonJS default export support


      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    }

    // Adapted from Chris Veness' SHA1 code at
    // http://www.movable-type.co.uk/scripts/sha1.html
    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;

        case 1:
          return x ^ y ^ z;

        case 2:
          return x & y ^ x & z ^ y & z;

        case 3:
          return x ^ y ^ z;
      }
    }

    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }

    function sha1(bytes) {
      const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
      const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

      if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = [];

        for (let i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      } else if (!Array.isArray(bytes)) {
        // Convert Array-like to Array
        bytes = Array.prototype.slice.call(bytes);
      }

      bytes.push(0x80);
      const l = bytes.length / 4 + 2;
      const N = Math.ceil(l / 16);
      const M = new Array(N);

      for (let i = 0; i < N; ++i) {
        const arr = new Uint32Array(16);

        for (let j = 0; j < 16; ++j) {
          arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        }

        M[i] = arr;
      }

      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

      for (let i = 0; i < N; ++i) {
        const W = new Uint32Array(80);

        for (let t = 0; t < 16; ++t) {
          W[t] = M[i][t];
        }

        for (let t = 16; t < 80; ++t) {
          W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }

        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];

        for (let t = 0; t < 80; ++t) {
          const s = Math.floor(t / 20);
          const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }

        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }

      return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
    }

    const v5 = v35('v5', 0x50, sha1);
    var v5$1 = v5;

    function uuid() {
        return v5$1('uuid', '1b671a64-40d5-491e-99b0-da01ff1f3341');
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

    const Math$1 = {
        int,
        float,
        bool,
        percent,
        normal
    };

    const Util = {
        Array: Array$1,
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

    var md5Exports = {};
    var md5$1 = {
      get exports(){ return md5Exports; },
      set exports(v){ md5Exports = v; },
    };

    var cryptExports = {};
    var crypt = {
      get exports(){ return cryptExports; },
      set exports(v){ cryptExports = v; },
    };

    (function() {
      var base64map
          = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

      crypt$1 = {
        // Bit-wise rotation left
        rotl: function(n, b) {
          return (n << b) | (n >>> (32 - b));
        },

        // Bit-wise rotation right
        rotr: function(n, b) {
          return (n << (32 - b)) | (n >>> b);
        },

        // Swap big-endian to little-endian and vice versa
        endian: function(n) {
          // If number given, swap endian
          if (n.constructor == Number) {
            return crypt$1.rotl(n, 8) & 0x00FF00FF | crypt$1.rotl(n, 24) & 0xFF00FF00;
          }

          // Else, assume array and swap all items
          for (var i = 0; i < n.length; i++)
            n[i] = crypt$1.endian(n[i]);
          return n;
        },

        // Generate an array of any length of random bytes
        randomBytes: function(n) {
          for (var bytes = []; n > 0; n--)
            bytes.push(Math.floor(Math.random() * 256));
          return bytes;
        },

        // Convert a byte array to big-endian 32-bit words
        bytesToWords: function(bytes) {
          for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
            words[b >>> 5] |= bytes[i] << (24 - b % 32);
          return words;
        },

        // Convert big-endian 32-bit words to a byte array
        wordsToBytes: function(words) {
          for (var bytes = [], b = 0; b < words.length * 32; b += 8)
            bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
          return bytes;
        },

        // Convert a byte array to a hex string
        bytesToHex: function(bytes) {
          for (var hex = [], i = 0; i < bytes.length; i++) {
            hex.push((bytes[i] >>> 4).toString(16));
            hex.push((bytes[i] & 0xF).toString(16));
          }
          return hex.join('');
        },

        // Convert a hex string to a byte array
        hexToBytes: function(hex) {
          for (var bytes = [], c = 0; c < hex.length; c += 2)
            bytes.push(parseInt(hex.substr(c, 2), 16));
          return bytes;
        },

        // Convert a byte array to a base-64 string
        bytesToBase64: function(bytes) {
          for (var base64 = [], i = 0; i < bytes.length; i += 3) {
            var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
            for (var j = 0; j < 4; j++)
              if (i * 8 + j * 6 <= bytes.length * 8)
                base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
              else
                base64.push('=');
          }
          return base64.join('');
        },

        // Convert a base-64 string to a byte array
        base64ToBytes: function(base64) {
          // Remove non-base-64 characters
          base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

          for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
              imod4 = ++i % 4) {
            if (imod4 == 0) continue;
            bytes.push(((base64map.indexOf(base64.charAt(i - 1))
                & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
                | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
          }
          return bytes;
        }
      };

      crypt.exports = crypt$1;
    })();

    var charenc = {
      // UTF-8 encoding
      utf8: {
        // Convert a string to a byte array
        stringToBytes: function(str) {
          return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
        },

        // Convert a byte array to a string
        bytesToString: function(bytes) {
          return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
        }
      },

      // Binary encoding
      bin: {
        // Convert a string to a byte array
        stringToBytes: function(str) {
          for (var bytes = [], i = 0; i < str.length; i++)
            bytes.push(str.charCodeAt(i) & 0xFF);
          return bytes;
        },

        // Convert a byte array to a string
        bytesToString: function(bytes) {
          for (var str = [], i = 0; i < bytes.length; i++)
            str.push(String.fromCharCode(bytes[i]));
          return str.join('');
        }
      }
    };

    var charenc_1 = charenc;

    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */

    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    var isBuffer_1 = function (obj) {
      return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
    };

    function isBuffer (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }

    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
    }

    (function(){
      var crypt = cryptExports,
          utf8 = charenc_1.utf8,
          isBuffer = isBuffer_1,
          bin = charenc_1.bin,

      // The core
      md5 = function (message, options) {
        // Convert to byte array
        if (message.constructor == String)
          if (options && options.encoding === 'binary')
            message = bin.stringToBytes(message);
          else
            message = utf8.stringToBytes(message);
        else if (isBuffer(message))
          message = Array.prototype.slice.call(message, 0);
        else if (!Array.isArray(message) && message.constructor !== Uint8Array)
          message = message.toString();
        // else, assume byte array already

        var m = crypt.bytesToWords(message),
            l = message.length * 8,
            a =  1732584193,
            b = -271733879,
            c = -1732584194,
            d =  271733878;

        // Swap endian
        for (var i = 0; i < m.length; i++) {
          m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
                 ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
        }

        // Padding
        m[l >>> 5] |= 0x80 << (l % 32);
        m[(((l + 64) >>> 9) << 4) + 14] = l;

        // Method shortcuts
        var FF = md5._ff,
            GG = md5._gg,
            HH = md5._hh,
            II = md5._ii;

        for (var i = 0; i < m.length; i += 16) {

          var aa = a,
              bb = b,
              cc = c,
              dd = d;

          a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
          d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
          c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
          b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
          a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
          d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
          c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
          b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
          a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
          d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
          c = FF(c, d, a, b, m[i+10], 17, -42063);
          b = FF(b, c, d, a, m[i+11], 22, -1990404162);
          a = FF(a, b, c, d, m[i+12],  7,  1804603682);
          d = FF(d, a, b, c, m[i+13], 12, -40341101);
          c = FF(c, d, a, b, m[i+14], 17, -1502002290);
          b = FF(b, c, d, a, m[i+15], 22,  1236535329);

          a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
          d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
          c = GG(c, d, a, b, m[i+11], 14,  643717713);
          b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
          a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
          d = GG(d, a, b, c, m[i+10],  9,  38016083);
          c = GG(c, d, a, b, m[i+15], 14, -660478335);
          b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
          a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
          d = GG(d, a, b, c, m[i+14],  9, -1019803690);
          c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
          b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
          a = GG(a, b, c, d, m[i+13],  5, -1444681467);
          d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
          c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
          b = GG(b, c, d, a, m[i+12], 20, -1926607734);

          a = HH(a, b, c, d, m[i+ 5],  4, -378558);
          d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
          c = HH(c, d, a, b, m[i+11], 16,  1839030562);
          b = HH(b, c, d, a, m[i+14], 23, -35309556);
          a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
          d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
          c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
          b = HH(b, c, d, a, m[i+10], 23, -1094730640);
          a = HH(a, b, c, d, m[i+13],  4,  681279174);
          d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
          c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
          b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
          a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
          d = HH(d, a, b, c, m[i+12], 11, -421815835);
          c = HH(c, d, a, b, m[i+15], 16,  530742520);
          b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

          a = II(a, b, c, d, m[i+ 0],  6, -198630844);
          d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
          c = II(c, d, a, b, m[i+14], 15, -1416354905);
          b = II(b, c, d, a, m[i+ 5], 21, -57434055);
          a = II(a, b, c, d, m[i+12],  6,  1700485571);
          d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
          c = II(c, d, a, b, m[i+10], 15, -1051523);
          b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
          a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
          d = II(d, a, b, c, m[i+15], 10, -30611744);
          c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
          b = II(b, c, d, a, m[i+13], 21,  1309151649);
          a = II(a, b, c, d, m[i+ 4],  6, -145523070);
          d = II(d, a, b, c, m[i+11], 10, -1120210379);
          c = II(c, d, a, b, m[i+ 2], 15,  718787259);
          b = II(b, c, d, a, m[i+ 9], 21, -343485551);

          a = (a + aa) >>> 0;
          b = (b + bb) >>> 0;
          c = (c + cc) >>> 0;
          d = (d + dd) >>> 0;
        }

        return crypt.endian([a, b, c, d]);
      };

      // Auxiliary functions
      md5._ff  = function (a, b, c, d, x, s, t) {
        var n = a + (b & c | ~b & d) + (x >>> 0) + t;
        return ((n << s) | (n >>> (32 - s))) + b;
      };
      md5._gg  = function (a, b, c, d, x, s, t) {
        var n = a + (b & d | c & ~d) + (x >>> 0) + t;
        return ((n << s) | (n >>> (32 - s))) + b;
      };
      md5._hh  = function (a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + (x >>> 0) + t;
        return ((n << s) | (n >>> (32 - s))) + b;
      };
      md5._ii  = function (a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
        return ((n << s) | (n >>> (32 - s))) + b;
      };

      // Package private blocksize
      md5._blocksize = 16;
      md5._digestsize = 16;

      md5$1.exports = function (message, options) {
        if (message === undefined || message === null)
          throw new Error('Illegal argument ' + message);

        var digestbytes = crypt.wordsToBytes(md5(message, options));
        return options && options.asBytes ? digestbytes :
            options && options.asString ? bin.bytesToString(digestbytes) :
            crypt.bytesToHex(digestbytes);
      };

    })();

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
        return md5Exports(rngString);
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
        Number: Number$1,
        string,
        Array: Array$1
    };

    exports.Address = Address;
    exports.Array = Array$1;
    exports.Authentication = Authentication;
    exports.Bank = Bank;
    exports.Config = Config;
    exports.Generators = Generators;
    exports.Locales = locales;
    exports.Map = Map;
    exports.Number = Number$1;
    exports.Password = Password;
    exports.Person = Person;
    exports.fauxjs = fauxjs;
    exports.string = string;

}));
