import { expect } from 'chai';
import { Tseudo } from './../src';

describe('Main Entry Tests', () => {
    it('Should be able to import the main libs', () => {
        const result = Tseudo.Generators.math.number.bool();
        expect(typeof result).to.be.equal('boolean');
    });
});