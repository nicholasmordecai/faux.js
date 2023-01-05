export function countDecimals(value: number): number { // https://stackoverflow.com/questions/17369098/simplest-way-of-getting-the-number-of-decimals-in-a-number-in-javascript

    if (Math.floor(value) === value) return 0;

    const str = value.toString();

    if (str.indexOf(".") !== -1) {
        return str.split(".")[1].length || 0;
    } else {
        return 0;
    }
}