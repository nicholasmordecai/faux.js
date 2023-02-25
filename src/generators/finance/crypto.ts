import { int } from '../math/number';
import { alphaNumeric } from '../util/string';

export function BitcoinAddress(): string {
	const addressLength = int({ min: 26, max: 35 });
	return alphaNumeric(addressLength);
}

export function TetherAddress(): string {
	const addressLength = int({ min: 26, max: 35 });
	return alphaNumeric(addressLength);
}

export function USDCoinAddress(): string {
	const addressLength = int({ min: 26, max: 35 });
	return alphaNumeric(addressLength);
}

export function RippleAddress(): string {
	const addressLength = int({ min: 26, max: 35 });
	return alphaNumeric(addressLength);
}

export function CardanoAddress(): string {
	const addressLength = int({ min: 26, max: 35 });
	return alphaNumeric(addressLength);
}

export const Crypto = {
	BitcoinAddress
};
