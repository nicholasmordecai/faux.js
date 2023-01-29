import { expect } from 'chai';
import { uuid } from './../../../src/generators/identification/uuid';

describe('UUID tests', () => {
    it('Should generate a random UUID', () => {
        const result = uuid();
        expect(result).to.be.string;
        expect(result.length).to.be.equal(36);
    });
});