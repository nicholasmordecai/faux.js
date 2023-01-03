import { fromFormat } from '../util/string';
import { getLocale } from './../../configuration';

// https://www.iban.com/structure
// https://www.investopedia.com/terms/i/iban.asp
export function IBAN(): string {
	return fromFormat(getLocale.bank.iban);
}

// https://treasuryxl.com/blog/what-are-bic-swift-codes-how-do-you-find-them-and-how-do-they-work/#:~:text=Let's%20get%20this%20BIC%20format,bank's%20head%20office%20is%20situated.
// export function SWIFT() {

// }

// export function BIC() {

// }

export function accountNumber(): number {
	return parseInt(fromFormat('99999999'));
}

export function sortCode(): number {
	return parseInt(fromFormat('999999'));
}

export function cardNumber() {
	return fromFormat('9999-9999-9999-9999');
}

// export function validFrom() {

// }

// export function validTo() {

// }

export function CCV() {
	return parseInt(fromFormat('999'));
}
