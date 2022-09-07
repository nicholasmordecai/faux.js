import { options } from './../types/types';

export class Person {
    static schema: Person = {
        	 firstName: "",
        	 lastName: "",
        	 isPerson: true,
        	 age: 1,
        };

    /**
     * Factory constructor for create interface
     * @param firstName string
     * @param lastName string
     * @param isPerson boolean
     * @param age number
     * @returns create
     */
    static create(options?: PersonOptions): Person {
        return {firstName: "hi",lastName: "hi",isPerson: true,age: 123};
    }

    /**
     * Factory constructor for fake interface
     * @param firstName string
     * @param lastName string
     * @param isPerson boolean
     * @param age number
     * @returns fake
     */
    static fake(options?: PersonOptions): Person {
                return {firstName: "hi",lastName: "hi",isPerson: true,age: 123};

    }
}

export interface Person {
    firstName: string;
    lastName: string;
    isPerson: boolean;
    age: number;
}

export interface PersonOptions {
    firstName?: options<string>;
    lastName?: options<string>;
    isPerson?: options<boolean>;
    age?: options<number>;
}
