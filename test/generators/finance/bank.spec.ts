import { expect } from 'chai';
import { Finance } from './../../../src/generators/finance';

describe('Bank Generator Functions', () => {
    it('Should generate a random IBAN', () => {
        const result = Finance.Bank.IBAN();
        expect(result).to.be.string;
    });

    it('Should generate a random account number', () => {
        const result = Finance.Bank.accountNumber();
        expect(typeof result).to.be.equal('number');
    });

    it('Should generate a random sort code', () => {
        const result = Finance.Bank.sortCode();
        expect(typeof result).to.be.equal('number');
    });

    it('Should generate a random card number', () => {
        const result = Finance.Bank.cardNumber();
        expect(typeof result).to.be.string;
    });

    it('Should generate a random cvv', () => {
        const result = Finance.Bank.cvv();
        expect(typeof result).to.be.equal('number');
    });
});