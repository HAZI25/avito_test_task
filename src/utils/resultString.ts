export type TextWithEnding = {
	str: string | number | undefined | null;
	ending?: string;
};

export const resultString = (separator: string, ...args: TextWithEnding[]) => {
	return args
		.filter((value) => {
			if (typeof value.str === 'number') {
				return true;
			} else return Boolean(value.str);
		})
		.map((value) => `${value.str}${value.ending ? value.ending : ''}`)
		.join(separator);
};
