import Benchmark, { Event } from 'benchmark';
import { faker } from '@faker-js/faker';
import { city } from '../src/functions/geographic/address';

interface IResult {
  Lumis: {
    city: number
  },
  Faker: {
    city: number
  }
}

export async function AddressPerformance(): Promise<IResult> {
	return new Promise((resolve) => {
		const suite = new Benchmark.Suite;

		const result: IResult = {
			Lumis: {
				city: -1
			},
			Faker: {
				city: -1
			}
		};

		suite.add('Faker', () => { faker.address.city(); });
		suite.add('Lumis', () => { city(); });

		suite.on('cycle', (event: Event) => {
			const benchmark = event.target;
			const key = benchmark.name as 'Lumis' | 'Faker';
			result[key].city = benchmark.hz as number;
		});

		suite.on('complete', () => {
			resolve(result);
		});

		suite.run({ async: true });
	});
}
