export function fakeType(obj: {[key: string]: any}) {
	for (const k in obj) {
		if (typeof obj[k] == 'object' && obj[k] !== null)
			fakeType(obj[k]);
		else {
			if(obj[k] !== null) {
				const val = obj[k]();
				console.log(val);
				obj[k] = val;
			}
		}
	}

	return obj;
}
