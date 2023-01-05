import { expect } from 'chai';
import { Config } from '../src/configuration';
import { rngFloat } from './../src/generators/math/number';

describe('Seed', () => {
    it('Should create a random number', () => {
        const rng = rngFloat();
        expect(typeof rng).to.be.equal('number');
    });

    it('Should set the seed and create a random number', () => {
        Config.seed = 123;
        const rng = rngFloat();
        expect(typeof rng).to.be.equal('number');
        expect(rng).to.be.equal(0.7872516233474016);
    });

    it('Should set the seed and create a random number, twice', () => {
        Config.seed = 123;
        const rng = rngFloat();
        expect(typeof rng).to.be.equal('number');
        expect(rng).to.be.equal(0.7872516233474016);

        Config.seed = 55;
        const rng2 = rngFloat();
        expect(typeof rng2).to.be.equal('number');
        expect(rng2).to.be.equal(0.44626285089179873);
    });
});
