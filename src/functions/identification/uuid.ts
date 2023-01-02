import { v5 } from 'uuid';
import { Config } from '../../configuration';

export function uuid(): string {
	return v5('uuid', '1b671a64-40d5-491e-99b0-da01ff1f3341');
}
