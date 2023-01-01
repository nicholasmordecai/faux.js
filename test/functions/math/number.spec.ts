import { expect } from 'chai';

import { normalDist, rngFloat } from '../../../src/functions/math/number';

describe('Number tests', () => {
    it('Should generate a 32 bit Mulberry random float', () => {
        const result = rngFloat();
        expect(typeof(result)).to.be.equal('number');
        expect(result).to.be.greaterThan(0);
        expect(result).to.be.lessThan(1);
    });

    it('Should generate a 32 bit Mulberry random float between two floats', () => {
        const result = rngFloat({min: 0.01, max: 0.1});
        expect(typeof(result)).to.be.equal('number');
        expect(result).to.be.greaterThan(0.01);
        expect(result).to.be.lessThan(0.1);
    });

    it('Should generate a 32 bit Mulberry random float between two negative floats', () => {
        const result = rngFloat({min: -0.5, max: -0.9});
        expect(typeof(result)).to.be.equal('number');
        expect(result).to.be.greaterThan(-0.9);
        expect(result).to.be.lessThan(-0.5);
    });

    it('Should generate a 32 bit Mulberry random float between two integers', () => {
        const result = rngFloat({min: 100, max: 250});
        expect(typeof(result)).to.be.equal('number');
        expect(result).to.be.greaterThan(100);
        expect(result).to.be.lessThan(250);
    });

    it('Should generate a 32 bit Mulberry random float between two negative integers', () => {
        const result = rngFloat({min: -25, max: -50});
        expect(typeof(result)).to.be.equal('number');
        expect(result).to.be.greaterThan(-50);
        expect(result).to.be.lessThan(-25);
    });

    it('Should generate a number from a normal distribution', () => {
        // let csv = 'num\n';
        for(let i = 0; i < 1000; i++) {
            const result = normalDist(10, 20, 1);
            // csv += `${result}\n`;
            expect(typeof(result)).to.be.equal('number');
        }
    });
});
