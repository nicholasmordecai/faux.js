import { expect } from "chai";
import { Register } from "../../src/core/register";

const obj = {
    'test': () => { return 1 },
    'test-2': () => { return 'hello' },
}

describe('Register tests', () => {
    it('Should instantiate a correct instance', () => {
        const register = new Register({});
        expect(register).to.be.instanceOf(Register);
    });

    it('Should create a dictionary with multiple functions', () => {
        const register = new Register(obj);
        expect(typeof register.get('test')()).to.be.equal('number')
        expect(register.get('test')()).to.be.equal(1)
        expect(typeof register.get('test-2')()).to.be.equal('string')
        expect(register.get('test-2')()).to.be.equal('hello')
    });

    it('Should create a dictionary and replace a function after a call', () => {
        const obj = {
            username: () => 'some-username',
            password: () => 'awesome-password'
        };
        const register = new Register(obj);
        expect(register.get('username')()).to.be.equal('some-username')
        expect(register.get('password')()).to.be.equal('awesome-password');

        register.add('password', () => '********');
        expect(register.get('password')()).to.be.equal('********');
        
    });
});
