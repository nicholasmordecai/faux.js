import { expect } from 'chai';

import { createFakeFunction } from '../../../src/compiler/generators/function';

describe('Fake Function', () => {
	it('Should create some docs', () => {
		const fakeFn = createFakeFunction('test');
		expect(fakeFn).to.eql('return fakeType(test.fakeSchema);\n');
	});
});
