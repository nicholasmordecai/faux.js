/**
 * @category Generators
 */
export declare const Generators: {
    finance: {
        bank: {
            IBAN: typeof import("./finance/bank").IBAN;
            accountNumber: typeof import("./finance/bank").accountNumber;
            sortCode: typeof import("./finance/bank").sortCode;
            cardNumber: typeof import("./finance/bank").cardNumber;
            cvv: typeof import("./finance/bank").cvv;
        };
    };
    geographic: {
        address: {
            postcode: typeof import("./geographic/address").postcode;
            city: typeof import("./geographic/address").city;
            county: typeof import("./geographic/address").county;
            country: typeof import("./geographic/address").country;
            street: typeof import("./geographic/address").street;
            houseNameNumber: typeof import("./geographic/address").houseNameNumber;
            address: typeof import("./geographic/address").address;
            addressString: typeof import("./geographic/address").addressString;
        };
        map: {
            lat: typeof import("./geographic/map").lat;
            long: typeof import("./geographic/map").long;
            latLong: typeof import("./geographic/map").latLong;
        };
    };
    identification: {
        person: {
            firstName: typeof import("./identification/person").firstName;
            lastName: typeof import("./identification/person").lastName;
            middleNames: typeof import("./identification/person").middleNames;
            nickname: typeof import("./identification/person").nickname;
            fullName: typeof import("./identification/person").fullName;
            gender: typeof import("./identification/person").gender;
        };
        uuid: {
            uuid: typeof import("./identification/uuid").uuid;
        };
    };
    math: {
        number: {
            float: typeof import("./math/number").float;
            int: typeof import("./math/number").int;
            normalDist: typeof import("./math/number").normalDist;
            bool: typeof import("./math/number").bool;
            percent: typeof import("./math/number").percent;
            percentString: typeof import("./math/number").percentString;
        };
    };
    util: {
        array: {
            /**
             * @category Generators
             */
            rngFromArray: typeof import("./util/array").rngFromArray;
        };
        string: {
            alphaN: typeof import("./util/string").alphaN;
            fromFormat: typeof import("./util/string").fromFormat;
        };
    };
};
