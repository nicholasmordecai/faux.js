import { expect } from 'chai';
import { fromFormat, alphaNumeric } from '../../../src/generators/util/string';

describe('String Util', () => {
    it('Should create a string from a number and character format', () => {
        const result = fromFormat('ZZZ');
        expect(result.length).to.be.equal(3);
        expect(/\d/.test(result)).to.be.false;
    });

    it('Should create a string of numbers from a number and character format', () => {
        const result = fromFormat('999');
        expect(result.length).to.be.equal(3);
        expect(/^\d+$/.test(result)).to.be.true;
    });

    it('Should create a string of mixed alphanumeric from a number and character format', () => {
        const result = fromFormat('Z9Z');
        expect(result.length).to.be.equal(3);
        expect(parseInt(result[0])).to.be.NaN;
        expect(parseInt(result[1])).to.not.be.NaN;
        expect(parseInt(result[2])).to.be.NaN;
    });

    it('Should generate a alpha numeric string from charcodes', () => {
        const str = alphaNumeric(12);
        expect(str).to.be.string;
        expect(str.length).to.be.equal(12);
    });
});
