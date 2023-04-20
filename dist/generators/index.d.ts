export declare const Generators: {
    Finance: {
        Bank: {
            IBAN: typeof import("./finance/bank").IBAN;
            accountNumber: typeof import("./finance/bank").accountNumber;
            sortCode: typeof import("./finance/bank").sortCode;
            cardNumber: typeof import("./finance/bank").cardNumber;
            cvv: typeof import("./finance/bank").cvv;
            currency: typeof import("./finance/bank").currency;
        };
        Crypto: {
            BitcoinAddress: typeof import("./finance/crypto").BitcoinAddress;
            TetherAddress: typeof import("./finance/crypto").TetherAddress;
            USDCoinAddress: typeof import("./finance/crypto").USDCoinAddress;
            RippleAddress: typeof import("./finance/crypto").RippleAddress;
            CardanoAddress: typeof import("./finance/crypto").CardanoAddress;
        };
    };
    Geographic: {
        Address: {
            postcode: typeof import("./geographic/address").postcode;
            city: typeof import("./geographic/address").city;
            county: typeof import("./geographic/address").county;
            street: typeof import("./geographic/address").street;
            houseNameNumber: typeof import("./geographic/address").houseNameNumber;
            address: typeof import("./geographic/address").address;
            addressString: typeof import("./geographic/address").addressString;
        };
        Country: typeof import("./geographic/country").country;
        Map: {
            lat: typeof import("./geographic/map").lat;
            long: typeof import("./geographic/map").long;
            latLong: typeof import("./geographic/map").latLong;
        };
    };
    Identification: {
        Person: {
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
    Internet: {
        Authentication: {
            JWT: typeof import("./internet/authentication").JWT;
            token: typeof import("./internet/authentication").token;
        };
        Password: {
            md5: typeof import("./internet/password").md5;
            salt: typeof import("./internet/password").salt;
        };
    };
    Math: {
        int: typeof import("./math/number").int;
        float: typeof import("./math/number").float;
        bool: typeof import("./math/number").bool;
        percent: typeof import("./math/number").percent;
        normal: typeof import("../core/probability").normal;
    };
    Util: {
        Array: {
            fromArray: typeof import("./util/array").fromArray;
        };
        string: {
            alphaNumeric: typeof import("./util/string").alphaNumeric;
            alphaNumericLower: typeof import("./util/string").alphaNumericLower;
            fromFormat: typeof import("./util/string").fromFormat;
        };
    };
};
