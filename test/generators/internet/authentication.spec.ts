import { expect } from 'chai';
import { decode } from 'jsonwebtoken';

import { JWT } from './../../../src/generators/internet/authentication';

describe('Authentication generator tests', () => {
    it('Should generate a JWT', () => {
        const token = JWT();
        expect(token).to.be.string;
    });
});
