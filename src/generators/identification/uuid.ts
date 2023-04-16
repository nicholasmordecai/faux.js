import { alphaNumericLower } from '../util/string';

/**
 * @description generates a random UUID v4
 * Imitates the UUID V4 gneerator result
 * Note: Not cryptographically secure - only use for testing / seed data!
 * 
 * @example
 * const guid = uuidv4(); // hA76dcB12l
 */
export function uuid(): string {
	return `${alphaNumericLower(8)}-${alphaNumericLower(4)}-${alphaNumericLower(4)}-${alphaNumericLower(4)}-${alphaNumericLower(12)}`;
}


export default {
	uuid
};
