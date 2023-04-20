export declare function BitcoinAddress(): string;
export declare function TetherAddress(): string;
export declare function USDCoinAddress(): string;
export declare function RippleAddress(): string;
export declare function CardanoAddress(): string;
export declare const Crypto: {
    BitcoinAddress: typeof BitcoinAddress;
    TetherAddress: typeof TetherAddress;
    USDCoinAddress: typeof USDCoinAddress;
    RippleAddress: typeof RippleAddress;
    CardanoAddress: typeof CardanoAddress;
};
