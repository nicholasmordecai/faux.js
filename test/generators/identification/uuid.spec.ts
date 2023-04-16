import { expect } from 'chai';
import { uuid } from './../../../src/generators/identification/uuid';

describe('UUID tests', () => {
    it('Should generate a random UUID', () => {
        const guid = uuid();
        expect(guid).to.be.string;
        expect(guid.length).to.be.equal(36);
        expect(guid[8]).to.be.equal('-')
        expect(guid[13]).to.be.equal('-')
        expect(guid[18]).to.be.equal('-')
        expect(guid[23]).to.be.equal('-')
    });
});