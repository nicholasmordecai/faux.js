import { expect } from 'chai';
import * as sinon from 'sinon';

import { testProject } from './../../utils';
import { createSchemaObject } from './../../../src/compiler/generators/object';
import { generateInterface } from '../../../src/compiler/generators/interface';
import * as utils from '../../../src/utils/utils';

describe('Object Creation Specs', () => {

	afterEach(() => {
        sinon.restore();
    });

	it('Should create a schema object from a property signature', () => {
		const testInterface = testProject().sourceFile.addInterface({
			name: 'test',
			properties: [
				{ name: 'age', type: 'number' },
			]
		});

		const newInterface = generateInterface(testProject().sourceFile, testInterface);

		if(!newInterface) return false;
		
		const props = newInterface.getProperties();
		expect(newInterface).to.not.be.undefined;
		expect(props.length).to.eql(1);

		const objectSchema = createSchemaObject(props);
		expect(objectSchema.obj).to.deep.equal({
			age: "tsTypes.number"
		});
	});

	it('Should handle traverse property returning null', () => {

		const testInterface = testProject().sourceFile.addInterface({
			name: 'test',
			properties: [
				{ name: 'age', type: 'number' },
			]
		});

		const newInterface = generateInterface(testProject().sourceFile, testInterface);

		if(!newInterface) return false;
		
		const props = newInterface.getProperties();
		expect(newInterface).to.not.be.undefined;
		expect(props.length).to.eql(1);

		sinon.stub(utils, "traverseProperty").returns(undefined);

		const objectSchema = createSchemaObject(props);
		expect(objectSchema.obj).to.deep.equal({});
	});
});
