import { expect } from 'chai';

import { normalDist, percent, percentString, rngFloat, rngInt } from '../../../src/generators/math/number';

describe('Number tests', () => {
    it('Should generate a 32 bit Mulberry random float', () => {
        const result = rngFloat();
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThan(0);
        expect(result).to.be.lessThan(1);
    });

    it('Should generate a 32 bit Mulberry random float between two floats', () => {
        const result = rngFloat({ min: 0.01, max: 0.1 });
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThan(0.01);
        expect(result).to.be.lessThan(0.1);
    });

    it('Should generate a 32 bit Mulberry random float between two negative floats', () => {
        const result = rngFloat({ min: -0.5, max: -0.9 });
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThan(-0.9);
        expect(result).to.be.lessThan(-0.5);
    });

    it('Should generate a 32 bit Mulberry random float between two integers', () => {
        const result = rngFloat({ min: 100, max: 250 });
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThan(100);
        expect(result).to.be.lessThan(250);
    });

    it('Should generate a 32 bit Mulberry random float between two negative integers', () => {
        const result = rngFloat({ min: -25, max: -50 });
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThan(-50);
        expect(result).to.be.lessThan(-25);
    });

    it('Should generate a random percent (int between 0 and 100', () => {
        const p = percent();
        expect(typeof (p)).to.be.equal('number');
        expect(p).to.be.greaterThanOrEqual(0);
        expect(p).to.be.lessThanOrEqual(100);
    });

    it('Should generate a random percent string (int between 0 and 100', () => {
        const p = percentString();
        expect(typeof (p)).to.be.equal('string');
        expect(p[p.length - 1]).to.be.equal('%');
        const p2 = parseInt(p.substring(0, p.length - 1));
        expect(p2).to.be.greaterThanOrEqual(0);
        expect(p2).to.be.lessThanOrEqual(100);
        expect(p).to.be.equal(`${p2}%`)
    });

    it('Should generate a random integer', () => {
        const result = rngInt();
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThanOrEqual(0);
        expect(result).to.be.lessThan(100);
    });

    it('Should generate a random integer with min and max config', () => {
        const result = rngInt({ min: 25, max: 50 });
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThanOrEqual(25);
        expect(result).to.be.lessThanOrEqual(50);
    });

    it('Should generate a number from a normal distribution', () => {
        const results: number[] = [];

        for (let i = 0; i < 100000; i++) {
            const result = normalDist(0, 10, 1);
            results.push(Math.round(result));
        }

        const distribution: {[key: string]: number} = {};

        for (const num of results) {
            distribution[num] = distribution[num] ? distribution[num] + 1 : 1;
        }

        // Test the distribution to try to assertain if it is a normal distribution
        expect(distribution['2']).to.be.within(500, 700);
        expect(distribution['3']).to.be.within(5800, 6300);
        expect(distribution['4']).to.be.within(23500, 24500);
        expect(distribution['5']).to.be.within(37500, 39000);
        expect(distribution['6']).to.be.within(23500, 24500);
        expect(distribution['7']).to.be.within(5800, 6300);
        expect(distribution['8']).to.be.within(500, 700);
    });
});
