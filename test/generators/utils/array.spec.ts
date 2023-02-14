import { expect } from 'chai';
import { fromArray } from '../../../src/generators/util/array';

describe('Array Util', () => {
    it('Should pick the only item from an array of 1', () => {
        const result = fromArray(['hello']);
        expect(result).to.be.equal('hello');
    });

    it('Should pick the only item from an array', () => {
        const list = ['hello', 'world', 'foo', 'bar'];
        const result = fromArray(list);
        expect(result).to.be.oneOf(list);
    });
});
