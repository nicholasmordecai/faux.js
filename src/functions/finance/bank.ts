import { fromFormat } from "../util/string";
import { getLocale } from './../../configuration';

// https://www.iban.com/structure
export function IBAN(): string {
    return fromFormat(getLocale.bank.iban);

}

export function SWIFT() {

}

export function BIC() {

}

export function accountNumber(): number {
    return parseInt(fromFormat('99999999'));
}

export function sortCode(): number {
    return parseInt(fromFormat('999999'));
}

export function cardNumber() {
    return fromFormat('9999-9999-9999-9999');
}

export function validFrom() {

}

export function valitTo() {

}

export function CCV() {
    return parseInt(fromFormat('999'));
}