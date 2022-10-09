import { expect } from 'chai';
import { JSDocTagStructure } from 'ts-morph';

import * as MockMap from '../../src/mocker/map';

describe('Mock Map', () => {
    it('Should return a random string', () => {
        expect( MockMap.string()).to.be.string
    });

    it('Should return a random name', () => {
        expect( MockMap.name()).to.be.string
    });

    it('Should return a random number', () => {
        expect(typeof MockMap.number()).to.eql('number');
    });

    it('Should return a random age', () => {
        expect(typeof MockMap.age()).to.eql('number');
    });

    it('Should return a random boolean', () => {
        expect(typeof MockMap.boolean()).to.eql('boolean');
    });

    it('Should return a random bigint', () => {
        expect(typeof MockMap.bigint()).to.eql('bigint');
    });

    it('Should return a random box muller transformation', () => {
        expect(typeof MockMap.randn_bm(123)).to.eql('number');
    });
});
