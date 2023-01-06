export declare class Register<T> {
    private dictionary;
    constructor(obj: T);
    add(key: keyof T, property: T[keyof T]): void;
    get<K extends keyof T>(key: K): T[K];
    build(): T;
    private traverseObject;
}
