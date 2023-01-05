import { v5 } from 'uuid';

export function uuid(): string {
	return v5('uuid', '1b671a64-40d5-491e-99b0-da01ff1f3341');
}

export default {
	uuid
}