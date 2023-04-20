export declare function IBAN(): string;
export declare function accountNumber(): number;
export declare function sortCode(): number;
export declare function cardNumber(): string;
export declare function cvv(): number;
export declare function currency(): {
    symbol: string;
    name: string;
    code: string;
};
export declare const Bank: {
    IBAN: typeof IBAN;
    accountNumber: typeof accountNumber;
    sortCode: typeof sortCode;
    cardNumber: typeof cardNumber;
    cvv: typeof cvv;
    currency: typeof currency;
};
