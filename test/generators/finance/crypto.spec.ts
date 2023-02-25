import { expect } from 'chai';
import { Finance } from '../../../src/generators/finance';

describe('Crypto Generator Functions', () => {
    it('Should generate a random bitcon address', () => {
        const result = Finance.Crypto.BitcoinAddress();
        expect(result).to.be.string;
        expect(result.length).to.be.greaterThanOrEqual(26).and.lessThanOrEqual(35)
    });
});