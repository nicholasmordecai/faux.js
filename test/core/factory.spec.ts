import { expect } from "chai";
import { Factory } from "../../src/core/factory";
import { fromFormat } from './../../src/generators/util/string';
import { address } from './../../src/generators/geographic/address';
import { int } from "../../src/generators/math/number";

const obj = {
    'test': () => 1,
    'test-2': () => 'hello',
}

describe('Factory tests', () => {
    it('Should instantiate a correct instance', () => {
        const factory = new Factory({});
        expect(factory).to.be.instanceOf(Factory);
    });

    // it('Should create a factory with multiple functions', () => {
    //     const factory = new Factory(obj);
    //     expect(typeof factory.get('test')()).to.be.equal('number')
    //     expect(factory.get('test')()).to.be.equal(1)
    //     expect(typeof factory.get('test-2')()).to.be.equal('string')
    //     expect(factory.get('test-2')()).to.be.equal('hello')
    // });

    it('Should build a factory which returns a fixed value instead of a returning function', () => {
        const staticValues = {
            name: 'hello-world'
        };
        const staticfactory = new Factory(staticValues);
        expect(staticfactory.build()).to.deep.equal({
            name: 'hello-world'
        });
    });

    // it('Should create a dictionary and replace a function after a call', () => {
    //     const obj = {
    //         username: () => 'some-username',
    //         password: () => 'awesome-password'
    //     };
    //     const factory = new Factory(obj);
    //     expect(factory.get('username')()).to.be.equal('some-username')
    //     expect(factory.get('password')()).to.be.equal('awesome-password');

    //     factory.add('password', () => '********');
    //     expect(factory.get('password')()).to.be.equal('********');
    // });

    it('Should build an instance of the factory', () => {
        const factory = new Factory(obj);
        const result = factory.build();
        expect(result.test).to.be.equal(1);
        expect(result["test-2"]).to.be.equal('hello');
    });

    it('Should build a factory with multiple objects', () => {
        const obj2 = {
            'hello': obj,
            'world': () => 'world'
        }

        const factory = new Factory(obj2);
        const result = factory.build();
        expect(result).to.deep.equal({
            'hello': {
                'test': 1,
                'test-2': 'hello'
            },
            'world': 'world'
        });
    });

    // it.only('Should build nested factories', () => {
    //     const user = {
    //         name: 'Shirlock Holmes',
    //         age: () => 40,
    //         address: {
    //             street: 'baker street',
    //             number: 221,
    //             foo: () => 11
    //         }
    //     }
    // });
});
