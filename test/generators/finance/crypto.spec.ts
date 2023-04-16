import { expect } from 'chai';
import { Finance } from '../../../src/generators/finance';

describe('Crypto Generator Functions', () => {
    it('Should generate a random bitcon address', () => {
        const result = Finance.Crypto.BitcoinAddress();
        expect(result).to.be.string;
        expect(result.length).to.be.greaterThanOrEqual(26).and.lessThanOrEqual(35)
    });

    it('Should generate a random Tether address', () => {
        const result = Finance.Crypto.TetherAddress();
        expect(result).to.be.string;
        expect(result.length).to.be.greaterThanOrEqual(26).and.lessThanOrEqual(35)
    });

    it('Should generate a random USD coin address', () => {
        const result = Finance.Crypto.USDCoinAddress();
        expect(result).to.be.string;
        expect(result.length).to.be.greaterThanOrEqual(26).and.lessThanOrEqual(35)
    });

    it('Should generate a random Ripple address', () => {
        const result = Finance.Crypto.RippleAddress();
        expect(result).to.be.string;
        expect(result.length).to.be.greaterThanOrEqual(26).and.lessThanOrEqual(35)
    });

    it('Should generate a random Cardano address', () => {
        const result = Finance.Crypto.CardanoAddress();
        expect(result).to.be.string;
        expect(result.length).to.be.greaterThanOrEqual(26).and.lessThanOrEqual(35)
    });
});