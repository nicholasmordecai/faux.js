import { AddressPerformance } from '../performance/address';

async function run(){
	const result = await AddressPerformance();
	console.log(result);
}

run();
