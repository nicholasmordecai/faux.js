import { expect } from 'chai';
import { Project } from 'ts-morph';

import { compile } from '../../src/compiler/compiler';

describe('Compiler Tests', () => {
	it('Should run through a complete compilation', async () => {
		const project = new Project({ useInMemoryFileSystem: true });
		const sourceFile = project.createSourceFile('test.ts', '');

		sourceFile.addInterface({
			name: 'ITest',
			properties: [
				{ name: 'name', type: 'string' },
				{ name: 'age', type: 'number' },
				{ name: 'isHuman', type: 'boolean' },
			]
		});

		const result = await compile(project);
		expect(result).not.to.be.undefined;
	});
});
