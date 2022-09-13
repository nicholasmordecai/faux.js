export interface Unit {
    displayName: string;
    health: number;
    cost: [number, string, boolean];
    blah: number[];
    blah2: Array<{age: number, name: string}>;
    translations: {
        key1: string;
        key2: string;
        foo: {
            bar: {
                age: number;
            }
        }
    };
    isLanded?: boolean;
    person: Person;
}

interface Person {
    name: string;
    age: number;
}
