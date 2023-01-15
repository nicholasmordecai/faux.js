import { expect } from 'chai';
import { decode, verify} from 'jsonwebtoken';

import { JWT } from './../../../src/generators/internet/authentication';

describe('Authentication generator tests', () => {
    it('Should generate a JWT', () => {
        const token = JWT({name: 'foo'});
        expect(token).to.be.string;

        const decoded = decode(token);
        expect(decoded).to.haveOwnProperty('name')
        expect(decoded).to.haveOwnProperty('iat');
    });
});
