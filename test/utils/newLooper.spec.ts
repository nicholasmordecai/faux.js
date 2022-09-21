import { expect } from 'chai';
import { InterfaceDeclaration } from 'ts-morph';
import { testProject } from './../utils';
import { RawType, traverseProperty, tsTypes } from './../../src/utils/newLooper';

describe('new looper test', () => {
	it('Should return one raw type from basic properties', () => {
		const { sourceFile } = testProject();

		const testInterface = sourceFile.insertInterface(0, {
			name: 'ITest',
			properties: [
				{ name: 'name', type: 'string' }
			]
		});

		const rawType = traverseProperty(testInterface.getProperties()[0]);

		expect(testInterface).instanceOf(InterfaceDeclaration);
		expect(rawType).to.deep.equal({ key: 'name', type: tsTypes.string, children: [] });
	});

	it('Should return raw type from basic properties', () => {
		const { sourceFile } = testProject();

		const properties = [
			{ name: 'str', type: 'string', internalType: tsTypes.string },
			{ name: 'num', type: 'number', internalType: tsTypes.number },
			{ name: 'bool', type: 'boolean', internalType: tsTypes.boolean },
			{ name: 'unkn', type: 'unknown', internalType: tsTypes.unknown },
			{ name: 'any', type: 'any', internalType: tsTypes.any },
			{ name: 'v', type: 'void', internalType: tsTypes.void },
			// { name: 'nul', type: 'null', internalType: tsTypes.null }, -- null type isn't working
			{ name: 'undef', type: 'undefined', internalType: tsTypes.undefined },
			{ name: 'nev', type: 'never', internalType: tsTypes.never },
			{ name: 'bint', type: 'bigint', internalType: tsTypes.bigint },
			{ name: 'smbl', type: 'symbol', internalType: tsTypes.symbol },
		];

		const testInterface = sourceFile.insertInterface(0, {
			name: 'ITest',
			properties
		});

		expect(testInterface).instanceOf(InterfaceDeclaration);

		let i = 0;
		for(const property of testInterface.getProperties()) {
			const rawType = traverseProperty(property);
			expect(rawType).to.deep.equal({ key: properties[i].name, type: properties[i].internalType, children: [] });
			i++;
		}
	});

	it('Should return one raw type from an object literal', () => {
		const { sourceFile } = testProject();

		const testInterface = sourceFile.insertInterface(0, {
			name: 'ITest',
			properties: [
				{ name: 'name', type: '{ name: string; age: number }' }
			]
		});

		const rawType = traverseProperty(testInterface.getProperties()[0]);
		const assertion: RawType = { 
			key: 'name', type: tsTypes.object, children: [
				{ key: 'name', type: tsTypes.string, children: [] },
				{ key: 'age', type: tsTypes.number, children: [] }
			]
		};

		expect(testInterface).instanceOf(InterfaceDeclaration);
		expect(rawType).to.deep.equal(assertion);
	});

	it('Should return one raw type from an array (element type)', () => {
		const { sourceFile } = testProject();

		const testInterface = sourceFile.insertInterface(0, {
			name: 'ITest',
			properties: [
				{ name: 'scores', type: 'number[]' }
			]
		});

		const rawType = traverseProperty(testInterface.getProperties()[0]);
		const assertion: RawType = { 
			key: 'scores', type: tsTypes.array, children: [
				{ key: null, type: tsTypes.number, children: [] },
			]
		};

		expect(testInterface).instanceOf(InterfaceDeclaration);
		expect(rawType).to.deep.equal(assertion);
	});

});
