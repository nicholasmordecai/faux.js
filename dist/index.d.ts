export { Config } from './configuration';
export { Generators } from './generators';
export { locales as Locales } from './locales';
export { Bank } from './generators/finance/bank';
export { Address } from './generators/geographic/address';
export { Map } from './generators/geographic/map';
export { Person } from './generators/identification/person';
export { Authentication } from './generators/internet/authentication';
export { Password } from './generators/internet/password';
export { Number } from './generators/math/number';
export { string } from './generators/util/string';
export { Array } from './generators/util/array';
export declare const fauxjs: {
    Config: import("./configuration").IConfig;
    Generators: {
        Finance: {
            Bank: {
                IBAN: typeof import("./generators/finance/bank").IBAN;
                accountNumber: typeof import("./generators/finance/bank").accountNumber;
                sortCode: typeof import("./generators/finance/bank").sortCode;
                cardNumber: typeof import("./generators/finance/bank").cardNumber;
                cvv: typeof import("./generators/finance/bank").cvv;
            };
            Crypto: {
                BitcoinAddress: typeof import("./generators/finance/crypto").BitcoinAddress;
            };
        };
        Geographic: {
            Address: {
                postcode: typeof import("./generators/geographic/address").postcode;
                city: typeof import("./generators/geographic/address").city;
                county: typeof import("./generators/geographic/address").county;
                country: typeof import("./generators/geographic/address").country;
                street: typeof import("./generators/geographic/address").street;
                houseNameNumber: typeof import("./generators/geographic/address").houseNameNumber;
                address: typeof import("./generators/geographic/address").address;
                addressString: typeof import("./generators/geographic/address").addressString;
            };
            Map: {
                lat: typeof import("./generators/geographic/map").lat;
                long: typeof import("./generators/geographic/map").long;
                latLong: typeof import("./generators/geographic/map").latLong;
            };
        };
        Identification: {
            Person: {
                firstName: typeof import("./generators/identification/person").firstName;
                lastName: typeof import("./generators/identification/person").lastName;
                middleNames: typeof import("./generators/identification/person").middleNames;
                nickname: typeof import("./generators/identification/person").nickname;
                fullName: typeof import("./generators/identification/person").fullName;
                gender: typeof import("./generators/identification/person").gender;
            };
            uuid: {
                uuid: typeof import("./generators/identification/uuid").uuid;
            };
        };
        Math: {
            int: typeof import("./generators/math/number").int;
            float: typeof import("./generators/math/number").float;
            bool: typeof import("./generators/math/number").bool;
            percent: typeof import("./generators/math/number").percent;
            normal: typeof import("./core/probability").normal;
        };
        Util: {
            Array: {
                fromArray: typeof import("./generators/util/array").fromArray;
            };
            string: {
                alphaNumeric: typeof import("./generators/util/string").alphaNumeric;
                fromFormat: typeof import("./generators/util/string").fromFormat;
            };
        };
    };
    Locales: {
        gb: import("./locales").ILocale;
        global: import("./locales").ILocale;
        ca: import("./locales").ILocale;
        usa: import("./locales").ILocale;
    };
    Bank: {
        IBAN: typeof import("./generators/finance/bank").IBAN;
        accountNumber: typeof import("./generators/finance/bank").accountNumber;
        sortCode: typeof import("./generators/finance/bank").sortCode;
        cardNumber: typeof import("./generators/finance/bank").cardNumber;
        cvv: typeof import("./generators/finance/bank").cvv;
    };
    Address: {
        postcode: typeof import("./generators/geographic/address").postcode;
        city: typeof import("./generators/geographic/address").city;
        county: typeof import("./generators/geographic/address").county;
        country: typeof import("./generators/geographic/address").country;
        street: typeof import("./generators/geographic/address").street;
        houseNameNumber: typeof import("./generators/geographic/address").houseNameNumber;
        address: typeof import("./generators/geographic/address").address;
        addressString: typeof import("./generators/geographic/address").addressString;
    };
    Map: {
        lat: typeof import("./generators/geographic/map").lat;
        long: typeof import("./generators/geographic/map").long;
        latLong: typeof import("./generators/geographic/map").latLong;
    };
    Person: {
        firstName: typeof import("./generators/identification/person").firstName;
        lastName: typeof import("./generators/identification/person").lastName;
        middleNames: typeof import("./generators/identification/person").middleNames;
        nickname: typeof import("./generators/identification/person").nickname;
        fullName: typeof import("./generators/identification/person").fullName;
        gender: typeof import("./generators/identification/person").gender;
    };
    Authentication: {
        token: typeof import("./generators/internet/authentication").token;
    };
    Password: {
        md5: typeof import("./generators/internet/password").md5;
        salt: typeof import("./generators/internet/password").salt;
    };
    Number: {
        float: typeof import("./generators/math/number").float;
        int: typeof import("./generators/math/number").int;
        bool: typeof import("./generators/math/number").bool;
        percent: typeof import("./generators/math/number").percent;
        percentString: typeof import("./generators/math/number").percentString;
    };
    string: {
        alphaNumeric: typeof import("./generators/util/string").alphaNumeric;
        fromFormat: typeof import("./generators/util/string").fromFormat;
    };
    Array: {
        fromArray: typeof import("./generators/util/array").fromArray;
    };
};
