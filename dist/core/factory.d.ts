import { RecursivePartial } from '../types';
export declare class Factory<T> {
    private dictionary;
    constructor(obj: T);
    add(key: keyof T, property: T[keyof T]): void;
    get<K extends keyof T>(key: K): T[K];
    /**
     * @function build
     * @description Builds a new object from the factory schema. Require you to pass in all properties.
     * @param {T} properties
     * @returns {T} A complete
     */
    build(properties: T): T;
    /**
     * @function buildPartial
     * @description Like the build function, but all properties are optional so you can build the object as you go.
     * It is advised to use this in conjunction with the validate function.
     *
     * @param { RecursivePartial<T> } properties
     * @returns { RecursivePartial<T> } The new object from the factory schema, but with all keys as optional
     */
    buildPartial(properties: RecursivePartial<T>): RecursivePartial<T>;
    /**
     * @function validate
     * @description Takes an object that is meant to be the same as what's described above. However, due to the partial keyword, it is possible to have missed
     * some of the properties, so use this function to ensure the object fully meets the criteria of the schema.
     * @param object
     * @returns { boolean } True if the object is valid
     */
    validate(object: RecursivePartial<T>): boolean;
    private traverseValidate;
    private itemsAreSameType;
    fake(): T;
    private traverseObject;
}
