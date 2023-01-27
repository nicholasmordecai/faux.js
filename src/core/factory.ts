export class Factory<T> {
	private dictionary: T;

	constructor(obj: T) {
		this.dictionary = obj;
	}

	public add(key: keyof T, property: T[keyof T]) {
		this.dictionary[key] = property;
	}

	// public get<K extends keyof T>(key: K) {
	// 	return this.dictionary[key];
	// }

	public get instance(): T {
		return this.dictionary;
	}

	public build(): T {
		return this.traverseObject(this.dictionary, {});
	}

	public build2(): T {
		return this.do(this.dictionary, {});
	}

	private do(object: any, result: any): T {
		for (const key in object) {
			const item = object[key];
			if (typeof item === 'function') {
				const fn = item;
				result[key] = fn();
			} else if (typeof item === 'object') {
				if(item instanceof Factory) {
					result[key] = item.build();
				} else {
					result[key] = this.traverseObject(item, {});
				}
			} else {
				result[key] = item;
			}
		}

		return result;
	}

	private traverseObject(object: any, result: any): T {
		for (const key in object) {
			const item = object[key];
			if (typeof item === 'function') {
				const fn = item;
				result[key] = fn();
			} else if (typeof item === 'object') {
				if(item instanceof Factory) {
					result[key] = item.build();
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
