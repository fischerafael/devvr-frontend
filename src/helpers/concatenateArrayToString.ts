export function concatenateArrayOfStrings(data: string[]) {
	const newString = data.join(', ');
	const newStringUpper = newString.toUpperCase();
	return newStringUpper;
}
