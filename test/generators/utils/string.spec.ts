import { expect } from 'chai';
import { fromFormat, alphaNumeric } from '../../../src/generators/util/string';

describe('String Util', () => {
    it('Should create a string from a number and character format', () => {
        const result = fromFormat('AAA');
        expect(result.length).to.be.equal(3);
        expect(/\d/.test(result)).to.be.false;
    });

    it('Should create a string of numbers from a number and character format', () => {
        const result = fromFormat('999');
        expect(result.length).to.be.equal(3);
        expect(/^\d+$/.test(result)).to.be.true;
    });

    it('Should create a string of mixed alphanumeric from a number and character format', () => {
        const result = fromFormat('A9a');
        expect(result.length).to.be.equal(3);
        expect(parseInt(result[0])).to.be.NaN;
        expect(parseInt(result[1])).to.not.be.NaN;
        expect(parseInt(result[2])).to.be.NaN;
    });

    it('Should create a string of mixed alphanumeric with fixed characters from a number and character format', () => {
        const result = fromFormat('A9a44b');
        expect(result.length).to.be.equal(6);
        expect(parseInt(result[0])).to.be.NaN;
        expect(parseInt(result[1])).to.not.be.NaN;
        expect(parseInt(result[2])).to.be.NaN;
        expect(result[3]).to.be.equal('4');
        expect(result[4]).to.be.equal('4');
        expect(result[5]).to.be.equal('b');
    });

    it('Should generate a alpha numeric string from charcodes', () => {
        const str = alphaNumeric(12);
        expect(str).to.be.string;
        expect(str.length).to.be.equal(12);
    });
});
