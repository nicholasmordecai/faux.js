import { expect } from "chai";
import { Config } from "../../../src/configuration";
import { normal, binomial, pareto, exponential } from "../../../src/core/probability";

describe('Number tests', () => {
    it('Should generate a number from a normal distribution', () => {
        Config.seed = 1;
        const results: number[] = [];

        for (let i = 0; i < 100000; i++) {
            const result = normal(0, 10, 1);
            results.push(Math.round(result));
        }

        const distribution: { [key: string]: number } = {};

        for (const num of results) {
            distribution[num] = distribution[num] ? distribution[num] + 1 : 1;
        }
        expect(distribution).to.deep.equal({
            1: 23,
            2: 568,
            3: 6110,
            4: 24216,
            5: 38213,
            6: 24169,
            7: 6127,
            8: 554,
            9: 19,
            10: 1
        })
    });

    it('Should generate a number from a binomial distribution', () => {
        const result = binomial(1, 10, 0.5);
        expect(result).to.be.equal(0.009765625)
    });

    it('Should generate a number from a pareto distribution', () => {
        const result = pareto(1, 4);
        expect(result).to.be.within(1, 4);
    });

    it('Should generate a number from an exponential curve', () => {
        const result = exponential(1);
        expect(result).to.be.within(0, 5);
    });
});