import { options } from './../types/types';

export class Person {
    static schema: Person = {
        	 firstName: "",
        	 lastName: "",
        	 isPerson: true,
        	 age: 1,
        };

    /**
     * Factory constructor for Person interface
     * @description Create a new object instance from the Person interface.
     * @param {PersonOptions} options
     * @returns {Person}
     */
    static create(options?: PersonOptions): Person {
        return {
        	 firstName: "",
        	 lastName: "",
        	 isPerson: true,
        	 age: 1,
        }
    }

    /**
     * Factory constructor for Person interface
     * @description Create a new object instance from the Person interface.
     * @param {PersonOptions} options
     * @returns {Person}
     */
    static fake(options?: PersonOptions): Person {
        return {
        	 firstName: "",
        	 lastName: "",
        	 isPerson: true,
        	 age: 1,
        }
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
