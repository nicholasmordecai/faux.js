export declare const Generators: {
    Finance: {
        Bank: {
            IBAN: typeof import("./finance/bank").IBAN;
            accountNumber: typeof import("./finance/bank").accountNumber;
            sortCode: typeof import("./finance/bank").sortCode;
            cardNumber: typeof import("./finance/bank").cardNumber;
            cvv: typeof import("./finance/bank").cvv;
        };
    };
    Geographic: {
        Address: {
            postcode: typeof import("./geographic/address").postcode;
            city: typeof import("./geographic/address").city;
            county: typeof import("./geographic/address").county;
            country: typeof import("./geographic/address").country;
            street: typeof import("./geographic/address").street;
            houseNameNumber: typeof import("./geographic/address").houseNameNumber;
            address: typeof import("./geographic/address").address;
            addressString: typeof import("./geographic/address").addressString;
        };
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
    Math: {
        int: typeof import("./math/number").int;
        float: typeof import("./math/number").float;
        bool: typeof import("./math/number").bool;
        percent: typeof import("./math/number").percent;
        normalDist: typeof import("./math/statistics").normalDist;
    };
    Util: {
        Array: {
            fromArray: typeof import("./util/array").fromArray;
        };
        string: {
            alphaN: typeof import("./util/string").alphaN;
            fromFormat: typeof import("./util/string").fromFormat;
        };
    };
};
