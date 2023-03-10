import { expect } from 'chai';

import { percent, percentString, float, int, bool, sets } from '../../../src/generators/math/number';

describe('Number tests', () => {
    it('Should generate a 32 bit Mulberry random float', () => {
        const result = float();
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThan(0);
        expect(result).to.be.lessThan(1);
    });

    it('Should generate a 32 bit Mulberry random float between two floats', () => {
        const result = float({ min: 0.01, max: 0.1 });
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThan(0.01);
        expect(result).to.be.lessThan(0.1);
    });

    it('Should generate a 32 bit Mulberry random float between two negative floats', () => {
        const result = float({ min: -0.5, max: -0.9 });
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThan(-0.9);
        expect(result).to.be.lessThan(-0.5);
    });

    it('Should generate a 32 bit Mulberry random float between two integers', () => {
        const result = float({ min: 100, max: 250 });
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThan(100);
        expect(result).to.be.lessThan(250);
    });

    it('Should generate a 32 bit Mulberry random float between two negative integers', () => {
        const result = float({ min: -25, max: -50 });
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
        const result = int();
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThanOrEqual(0);
        expect(result).to.be.lessThan(100);
    });

    it('Should generate a random integer with min and max config', () => {
        const result = int({ min: 25, max: 50 });
        expect(typeof (result)).to.be.equal('number');
        expect(result).to.be.greaterThanOrEqual(25);
        expect(result).to.be.lessThanOrEqual(50);
    });

    it('Should generate a random boolean', () => {
        const trueOrFalse = bool();
        expect(trueOrFalse).satisfies(() =>{
            return trueOrFalse === true || trueOrFalse === false;
        });
    });

    //! needs finishing off
    it('Should pick from a set of numbers', () => {
        const input = [{min: 5, max: 10}, {min: 34, max: 81}];
        const result = sets(input);
        expect(typeof result).to.be.equal('number');
    });
});
