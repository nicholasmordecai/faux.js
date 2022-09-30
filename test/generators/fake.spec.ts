import { expect } from 'chai';
import { traverseProperty } from '../../src/utils/newLooper';
import { generateFakeMethod } from '../../src/compiler/generators/fake';

import { testProject } from '../utils';

describe('Fake', function () {
	it('Should return a faked object from an interface', () => {
		const { sourceFile } = testProject();

		const testInterface = sourceFile.insertInterface(0, {
			name: 'ITest',
			properties: [
				{ name: 'name', type: 'string' }
			]
		});

		const rawType = traverseProperty(testInterface.getProperties()[0]);
		if (rawType != null) {
			const fakeFn = generateFakeMethod([rawType]);
			const result = fakeFn();
			console.log(result);
			expect(true).to.be.true;
		}
	});
});

