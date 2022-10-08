import { expect } from 'chai';

import { generateInterface, generateOptionalInterface } from '../../../src/compiler/generators/interface';
import { testProject } from '../../utils';

describe('Generate Interfaces', () => {
    it('Should create an interface from a reference one', () => {
        const testInterface = testProject().sourceFile.addInterface({
            name: "test",
            properties: [
                { name: 'age', type: 'number' },
                { name: 'addr', type: 'string', }
            ]
        });

        const newInterface = generateInterface(testProject().sourceFile, testInterface);
        expect(newInterface).to.not.be.undefined;
        expect(newInterface?.getProperties().length).to.eql(2);
    });

    it('Should create an interface with all optional properties from a reference one', () => {
        const testInterface = testProject().sourceFile.addInterface({
            name: "test",
            properties: [
                { name: 'age', type: 'number' },
                { name: 'addr', type: 'string', }
            ]
        });

        const newInterface = generateOptionalInterface(testProject().sourceFile, testInterface);
        expect(newInterface).to.not.be.undefined;
        expect(newInterface?.getProperties().length).to.eql(2);
        expect(newInterface.getProperties()[0].hasQuestionToken()).to.be.true;
    });
});