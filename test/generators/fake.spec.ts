import { expect } from 'chai';
import { recursivlyTraverse } from '../../src/utils/newLooper';
import { generateFakeMethod } from '../../src/compiler/generators/fake';

import { testProject } from '../utils';

describe('Fake', function () {
	it.only('Should return a faked object from an interface', () => {
		const { sourceFile } = testProject();

		const testInterface = sourceFile.insertInterface(0, {
			name: 'ITest',
			properties: [
				{ name: 'name', type: 'string' },
				{ name: 'age', type: 'number' },
				{ name: 'human', type: 'boolean' },
				{ name: 'height', type: 'bigint' },
			]
		});

		const rawTypes = recursivlyTraverse(testInterface.getProperties());
		if (rawTypes !== undefined) {
			const fakeMethod = generateFakeMethod(rawTypes);
			const fakeMethodResult = fakeMethod();
			console.log(fakeMethod.toString())

			// check string
			expect(fakeMethodResult).to.haveOwnProperty('name');
			expect(typeof fakeMethodResult.name).to.be.eql('string');

			// check number
			expect(fakeMethodResult).to.haveOwnProperty('age');
			expect(typeof fakeMethodResult.age).to.be.eql('number');

			// check boolean
			expect(fakeMethodResult).to.haveOwnProperty('human');
			expect(typeof fakeMethodResult.human).to.be.eql('boolean');

			// check bigint
			expect(fakeMethodResult).to.haveOwnProperty('height');
			expect(typeof fakeMethodResult.height).to.be.eql('bigint');
		}
	});
});

