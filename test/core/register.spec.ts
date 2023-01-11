import { expect } from "chai";
import { Register } from "../../src/core/register";

const obj = {
    'test': () => 1,
    'test-2': () => 'hello',
}

describe('Register tests', () => {
    it('Should instantiate a correct instance', () => {
        const register = new Register({});
        expect(register).to.be.instanceOf(Register);
    });

    it('Should create a register with multiple functions', () => {
        const register = new Register(obj);
        expect(typeof register.get('test')()).to.be.equal('number')
        expect(register.get('test')()).to.be.equal(1)
        expect(typeof register.get('test-2')()).to.be.equal('string')
        expect(register.get('test-2')()).to.be.equal('hello')
    });

    it('Should build a register which returns a fixed value instead of a returning function', () => {
        const staticValues = {
            name: 'hello-world'
        };
        const staticRegister = new Register(staticValues);
        expect(staticRegister.build()).to.deep.equal({
            name: 'hello-world'
        });
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

    it('Should build an instance of the register', () => {
        const register = new Register(obj);
        const result = register.build();
        expect(result.test).to.be.equal(1);
        expect(result["test-2"]).to.be.equal('hello');
    });

    it('Should build a register with multiple objects', () => {
        const obj2 = {
            'hello': obj,
            'world': () => 'world'
        }

        const register = new Register(obj2);
        const result = register.build();
        expect(result).to.deep.equal({
            'hello': {
                'test': 1,
                'test-2': 'hello'
            },
            'world': 'world'
        });
    });
});
