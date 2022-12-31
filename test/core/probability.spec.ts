import { expect } from 'chai';
import { IProbabilityOptions, Probability } from '../../src/core/probability';
import { Register } from '../../src/core/register';

describe('Probability Function', () => {
    it('Should return a value with a probability of 100%', () => {
        type NewType = IProbabilityOptions<string>;

        const options: NewType = { conditions: [{ generator: 'hello-world', probability: 100 }] };

        const person = {
            name: Probability(options),
        };

        const result = new Register(person).build();
        expect(result).to.deep.equal({
            name: 'hello-world'
        });
    });

    it('Should fail as all conditions do not meet 100%', () => {
        type NewType = IProbabilityOptions<string>;

        const options: NewType = { conditions: [{ generator: 'hello-world', probability: 14 }] };

        const person = {
            name: Probability(options),
        };


        const register = new Register(person);
        try {
            register.build();
        } catch (error) {
            const typedError = error as Error;
            expect(error as Error).to.be.instanceOf(Error);
            expect(typedError.message).to.be.equal('Conditions are not valid. They do not equal 100.');
        }
    });

    it('Should correctly get one of two probabilities', () => {
        type NewType = IProbabilityOptions<string>;

        const options: NewType = {
            conditions: [
                { generator: 'hello-world', probability: 14 },
                { generator: 'some-other-world', probability: 86 }
            ]
        };

        const person = {
            name: Probability(options),
        };

        const register = new Register(person);
        const result = register.build();
        expect(result.name).to.be.oneOf(['hello-world', 'some-other-world']);
    });
});
