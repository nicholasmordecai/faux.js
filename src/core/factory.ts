import { RecursivePartial } from '../types';

export class Factory<T> {
	private dictionary: T;

	constructor(obj: T) {
		this.dictionary = obj;
	}

	public add(key: keyof T, property: T[keyof T]) {
		this.dictionary[key] = property;
	}

	public get<K extends keyof T>(key: K) {
		return this.dictionary[key];
	}

	/**
	 * @function build
	 * @description Builds a new object from the factory schema. Require you to pass in all properties.
	 * @param {T} properties 
	 * @returns {T} A complete 
	 */
	public build(properties: T): T {
		return properties;
	}

	/**
	 * @function buildPartial
	 * @description Like the build function, but all properties are optional so you can build the object as you go.
	 * It is advised to use this in conjunction with the validate function.
	 * 
	 * @param { RecursivePartial<T> } properties 
	 * @returns { RecursivePartial<T> } The new object from the factory schema, but with all keys as optional
	 */
	public buildPartial(properties: RecursivePartial<T>): RecursivePartial<T> {
		return properties;
	}

	/**
	 * @function validate
	 * @description Takes an object that is meant to be the same as what's described above. However, due to the partial keyword, it is possible to have missed
	 * some of the properties, so use this function to ensure the object fully meets the criteria of the schema.
	 * @param object 
	 * @returns { boolean } True if the object is valid
	 */
	public validate(object: RecursivePartial<T>): boolean {
		//? could always build a fake version to be able to compare againt?
		return this.traverseValidate(this.dictionary, object);
	}

	private traverseValidate(referenceObject: any, object: any): boolean {
		for (const key in referenceObject) {
			const referenceItem = referenceObject[key];
			const item = object[key];
			//? Should we worry about function types here?
			if (typeof item === 'object') {
				return this.traverseValidate(referenceItem, item);
			} else {
				if (this.itemsAreSameType(referenceItem, item)) {
					continue;
				} else {
					throw new Error(`Could not validate object. Item ${key} can not be matched as ${typeof item} against ${typeof referenceItem}`);
				}
			}
		}

		return true;
	}

	private itemsAreSameType(referenceItem: unknown, item: unknown) {
		if (typeof referenceItem !== typeof item) {
			return false;
		}

		return true;
	}

	public fake(): T {
		//? Should this be restricted by an envirnoment variable?
		return this.traverseObject(this.dictionary, {});
	}

	private traverseObject(object: any, result: any): T {
		for (const key in object) {
			const item = object[key];
			if (typeof item === 'function') {
				const fn = item;
				result[key] = fn();
			} else if (typeof item === 'object') {
				if (item instanceof Factory) {
					result[key] = item.fake();
				} else {
					result[key] = this.traverseObject(item, {});
				}
			} else {
				result[key] = item;
			}
		}

		return result;
	}
}
