import { getLocale } from '../../configuration';

/**
 * @function country
 * @description Generate a random country
 *
 * @returns {string}
 */
export function country(): string {
	return getLocale.name;
}

export const Country = country;
