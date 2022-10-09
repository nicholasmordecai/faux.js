import { expect } from 'chai';
import { recursivlyTraverse } from '../../../src/utils/newLooper';
import { generateFakeMethod } from '../../../src/compiler/generators/fake';

import { faker } from '@faker-js/faker';

import { testProject } from '../../utils';

describe('Fake', function () {
	it('Should return a faked object from an interface', () => {
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
			expect(fakeMethod).not.to.be.undefined;
		}
	});
});

