interface options <T> {
    fake?: boolean;
    value?: T;
}

export interface Person {
    firstName: string;
    lastName: string;
}

export interface PersonOptional {
    firstName?: options<string>;
    lastName?: options<string>;
}

export class newPerson {
	static schema: Person = {
		firstName: '',
		lastName: ''
	};

	static create(options?: PersonOptional): Person {
		const obj: typeof newPerson.schema = {
			firstName: '',
			lastName: ''
		};

		return obj;
	}

	static fake(): Person {
		const obj: typeof newPerson.schema = {
			firstName: '',
			lastName: ''
		};

		return obj;
	}
}

newPerson.create({ firstName: { fake: true } });
newPerson.fake();
