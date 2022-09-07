import { options } from './../types/types';

export class Person {
    static schema: Person = {
        	firstName: "",
        	age: 1,
        	isHuman: true,
        	someValue: null,
        	thisValue: undefined,
        };

    /**
     * @description Create a new object instance from the Person interface.
     * @param {PersonOptions} options
     * @returns {Person}
     */
    static create(options?: PersonOptions): Person {
        return {
        	 firstName: "",
        	 age: 1,
        	 isHuman: true,
        	 someValue: null,
        	 thisValue: undefined,
        }
    }
}

export interface Person {
    firstName: string;
    age: number;
    isHuman: boolean;
    someValue: null;
    thisValue: undefined;
}

export interface PersonOptions {
    firstName?: options<string>;
    age?: options<number>;
    isHuman?: options<boolean>;
    someValue?: options<null>;
    thisValue?: options<undefined>;
}

export class Student {
    static schema: Student = {
        	class: "",
        	grades: [1, 2, 3, 4, 5],
        };

    /**
     * @description Create a new object instance from the Student interface.
     * @param {StudentOptions} options
     * @returns {Student}
     */
    static create(options?: StudentOptions): Student {
        return {
        	 class: "",
        	 grades: [1, 2, 3, 4, 5],
        }
    }
}

export interface Student {
    class: string;
    grades: number[];
}

export interface StudentOptions {
    class?: options<string>;
    grades?: options<number[]>;
}
