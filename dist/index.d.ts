declare const _default: {
    API: {
        Server: typeof import("./api/server").Server;
    };
    Config: import("./configuration").IConfig;
    Core: {
        Contingency: typeof import("./core/contingency").Contingency;
        Probability: typeof import("./core/probability").Probability;
        Register: typeof import("./core/register").Register;
    };
    Generators: {
        finance: {
            bank: {
                IBAN: typeof import("./generators/finance/bank").IBAN;
                accountNumber: typeof import("./generators/finance/bank").accountNumber;
                sortCode: typeof import("./generators/finance/bank").sortCode;
                cardNumber: typeof import("./generators/finance/bank").cardNumber;
                cvv: typeof import("./generators/finance/bank").cvv;
            };
        };
        geographic: {
            address: {
                postcode: typeof import("./generators/geographic/address").postcode;
                city: typeof import("./generators/geographic/address").city;
                county: typeof import("./generators/geographic/address").county;
                country: typeof import("./generators/geographic/address").country;
                street: typeof import("./generators/geographic/address").street;
                houseNameNumber: typeof import("./generators/geographic/address").houseNameNumber;
                address: typeof import("./generators/geographic/address").address;
                addressString: typeof import("./generators/geographic/address").addressString;
            };
            map: {
                lat: typeof import("./generators/geographic/map").lat;
                long: typeof import("./generators/geographic/map").long;
                latLong: typeof import("./generators/geographic/map").latLong;
            };
        };
        identification: {
            person: {
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
        math: {
            number: {
                float: typeof import("./generators/math/number").float;
                int: typeof import("./generators/math/number").int;
                normalDist: typeof import("./generators/math/number").normalDist;
                bool: typeof import("./generators/math/number").bool;
                percent: typeof import("./generators/math/number").percent;
                percentString: typeof import("./generators/math/number").percentString;
            };
        };
        util: {
            array: {
                rngFromArray: typeof import("./generators/util/array").rngFromArray;
            };
            string: {
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
};
export default _default;
export declare const Tseudo: {
    person: {
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
    address: {
        postcode: typeof import("./generators/geographic/address").postcode;
        city: typeof import("./generators/geographic/address").city;
        county: typeof import("./generators/geographic/address").county;
        country: typeof import("./generators/geographic/address").country;
        street: typeof import("./generators/geographic/address").street;
        houseNameNumber: typeof import("./generators/geographic/address").houseNameNumber;
        address: typeof import("./generators/geographic/address").address;
        addressString: typeof import("./generators/geographic/address").addressString;
    };
    map: {
        lat: typeof import("./generators/geographic/map").lat;
        long: typeof import("./generators/geographic/map").long;
        latLong: typeof import("./generators/geographic/map").latLong;
    };
    bank: {
        IBAN: typeof import("./generators/finance/bank").IBAN;
        accountNumber: typeof import("./generators/finance/bank").accountNumber;
        sortCode: typeof import("./generators/finance/bank").sortCode;
        cardNumber: typeof import("./generators/finance/bank").cardNumber;
        cvv: typeof import("./generators/finance/bank").cvv;
    };
    number: {
        float: typeof import("./generators/math/number").float;
        int: typeof import("./generators/math/number").int;
        normalDist: typeof import("./generators/math/number").normalDist;
        bool: typeof import("./generators/math/number").bool;
        percent: typeof import("./generators/math/number").percent;
        percentString: typeof import("./generators/math/number").percentString;
    };
    array: {
        rngFromArray: typeof import("./generators/util/array").rngFromArray;
    };
    string: {
        fromFormat: typeof import("./generators/util/string").fromFormat;
    };
};
