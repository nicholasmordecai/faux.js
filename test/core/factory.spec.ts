import { expect } from "chai";
import { Factory } from "../../src/core/factory";
import { RecursivePartial } from "../../src/types";

const obj = {
    'test': () => 1,
    'test-2': () => 'hello',
}

describe('Factory tests', () => {
    it('Should instantiate a correct instance', () => {
        const factory = new Factory({});
        expect(factory).to.be.instanceOf(Factory);
    });

    it('Should create a factory with multiple functions', () => {
        const factory = new Factory(obj);
        expect(typeof factory.get('test')()).to.be.equal('number')
        expect(factory.get('test')()).to.be.equal(1)
        expect(typeof factory.get('test-2')()).to.be.equal('string')
        expect(factory.get('test-2')()).to.be.equal('hello')
    });

    it('Should fake a factory which returns a fixed value instead of a returning function', () => {
        const staticValues = {
            name: 'hello-world'
        };
        const staticfactory = new Factory(staticValues);
        expect(staticfactory.fake()).to.deep.equal({
            name: 'hello-world'
        });
    });

    it('Should create a dictionary and replace a function after a call', () => {
        const obj = {
            username: () => 'some-username',
            password: () => 'awesome-password'
        };
        const factory = new Factory(obj);
        expect(factory.get('username')()).to.be.equal('some-username')
        expect(factory.get('password')()).to.be.equal('awesome-password');

        factory.add('password', () => '********');
        expect(factory.get('password')()).to.be.equal('********');
    });

    it('Should fake an instance of the factory', () => {
        const factory = new Factory(obj);
        const result = factory.fake();
        expect(result.test).to.be.equal(1);
        expect(result["test-2"]).to.be.equal('hello');
    });

    it('Should fake a factory with multiple objects', () => {
        const obj2 = {
            'hello': obj,
            'world': () => 'world'
        }

        const factory = new Factory(obj2);
        const result = factory.fake();
        expect(result).to.deep.equal({
            'hello': {
                'test': 1,
                'test-2': 'hello'
            },
            'world': 'world'
        });
    });

    it('Should fake nested factories', () => {
        const address = {
            street: 'baker street',
            number: 221,
        }

        const addressFactory = new Factory(address);

        const user = {
            name: 'Shirlock Holmes',
            age: () => 40,
            address: addressFactory
        }

        const userFactory = new Factory(user);
        const newUser = userFactory.fake();

        expect(newUser).to.deep.equal({
            name: 'Shirlock Holmes',
            age: 40,
            address: {
                street: 'baker street',
                number: 221
            }
        });
    });

    it('Should build a factory', () => {
        const product = {
            name: 'wardrobe',
            price: 14.99
        }

        const productFactory = new Factory(product);

        const newProduct = productFactory.build({
            name: 'bike',
            price: 100
        });

        expect(newProduct).does.deep.equal({
            name: 'bike',
            price: 100
        });
    });

    it('Should build a partial factory', () => {
        const product = {
            name: 'wardrobe',
            price: 14.99
        }

        const productFactory = new Factory(product);

        const newProduct = productFactory.buildPartial({
            name: 'sofa',
        });

        newProduct.price = 12.99;

        expect(newProduct).to.deep.equal({
            name: 'sofa',
            price: 12.99
        });
    });

    it('Should validate a partial factory object', () => {
        const product = {
            name: 'wardrobe',
            price: 14.99,
            stock: {
                inStock: 100,
                onOrder: 12
            }
        }

        const productFactory = new Factory(product);

        const newProduct = productFactory.buildPartial({
            name: 'sofa',
            stock: {
                inStock: 50,
                onOrder: 10
            }
        });
        
        newProduct.price = 12.99;

        const valid = productFactory.validate(newProduct);
        expect(valid).to.be.true;
    });

    it('Should fail to validate a partial factory object', () => {
        const product = {
            name: 'wardrobe',
            price: 14.99,
        }

        const productFactory = new Factory(product);

        const newProduct = productFactory.buildPartial({
            name: 'sofa',
        });

        expect(() => productFactory.validate(newProduct))
            .to.throw('Could not validate object. Item price can not be matched as undefined against number');
    });

    it('Should fail to validate a complex partial factory object', () => {
        const product = {
            name: 'wardrobe',
            price: 14.99,
            stock: {
                inStock: 50,
                onOrder: 10
            }
        }

        const productFactory = new Factory(product);

        const newProduct = productFactory.buildPartial({
            name: 'sofa',
            price: 14.99,
            stock: {
                inStock: 50,
            }
        });

        expect(() => productFactory.validate(newProduct))
            .to.throw('Could not validate object. Item onOrder can not be matched as undefined against number');
    });
});
