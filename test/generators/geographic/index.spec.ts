import { expect } from 'chai';
import Geographic from './../../../src/generators/geographic'

describe('Address module', () => {
    it('Should create a random postcode', () => {
        const pCode = Geographic.address.postcode();
        expect(typeof pCode).to.be.equal('string');
    });
});