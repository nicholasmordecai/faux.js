import { expect } from 'chai';
import { fauxjs } from './../src';

describe('Main Entry Tests', () => {
    it('Should be able to import the main libs', () => {
        const result = fauxjs.Generators.Math.bool();
        expect(typeof result).to.be.equal('boolean');
    });
});