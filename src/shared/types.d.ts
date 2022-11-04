import { tsTypes } from './enums';

export interface options<T> {
    fake?: boolean;
    value?: T;
}

export interface RawType {
	key: string | null;
	type: tsTypes;
	children: RawType[] | undefined;
}
