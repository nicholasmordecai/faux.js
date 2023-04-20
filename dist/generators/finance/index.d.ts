export declare const Finance: {
    Bank: {
        IBAN: typeof import("./bank").IBAN;
        accountNumber: typeof import("./bank").accountNumber;
        sortCode: typeof import("./bank").sortCode;
        cardNumber: typeof import("./bank").cardNumber;
        cvv: typeof import("./bank").cvv;
        currency: typeof import("./bank").currency;
    };
    Crypto: {
        BitcoinAddress: typeof import("./crypto").BitcoinAddress;
        TetherAddress: typeof import("./crypto").TetherAddress;
        USDCoinAddress: typeof import("./crypto").USDCoinAddress;
        RippleAddress: typeof import("./crypto").RippleAddress;
        CardanoAddress: typeof import("./crypto").CardanoAddress;
    };
};
