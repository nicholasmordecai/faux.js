export interface Person {
    name: string;
    age: number;
    // bool: boolean;
    // nameObj: {
    //     first: string;
    //     last: string;
    // }
    // that: string[];
    // scores: Array<{name: string}>;
    // thing: [number, string, {name: string}];
    address: Address;
}

interface Address {
    streetName: string;
    houseNumber: number;
}