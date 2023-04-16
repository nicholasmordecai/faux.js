import { expect } from 'chai';
import { Config } from '../../../src/configuration';
import { md5, salt } from '../../../src/generators/internet/password';

describe('Password generator tests', () => {
    it('Should generate a 32 character md5 hash', () => {
        const hash = md5();
        expect(hash).to.be.string;
        expect(hash.length).to.be.equal(32);
    });

    it('Should generate MD5 hash with input string', () => {
        const hash = md5('abcdefg');
        expect(hash).to.be.string;
        expect(hash.length).to.be.equal(32);
    });

    it('Should generate a determanistic md5', () => {
        Config.seed = 1;
        const hash1 = md5();
        Config.seed = 1;
        const hash2 = md5();
        expect(hash1).to.be.equal(hash2);
    });

    it('Should generate a 10 character salt', () => {
        const genSalt = salt();
        expect(genSalt).to.be.string;
        expect(genSalt.length).to.be.equal(10);
    });

    it('Should generate a 16 character salt', () => {
        const genSalt = salt(16);
        expect(genSalt).to.be.string;
        expect(genSalt.length).to.be.equal(16);
    });
});