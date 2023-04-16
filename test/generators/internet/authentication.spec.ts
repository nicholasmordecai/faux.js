import { expect } from 'chai';
import { token, JWT } from './../../../src/generators/internet/authentication';

describe('Authentication generator tests', () => {
    it('Should generate a random token', () => {
        const randomToken = token(20);
        expect(randomToken).to.be.string;
        expect(randomToken.length).to.be.equal(20);
    });

    it('Should generate a random JWT', () => {
        const token = JWT();
        expect(token).to.be.string;
        expect(token.split('.').length).to.be.equal(3);
    });
});
