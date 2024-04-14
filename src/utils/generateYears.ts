export const generateYears = (start: number, end: number) => {
	const years = [];
	if (start > end) {
		for (let i = start; i >= end; i--) {
			years.push(i);
		}
	} else {
		for (let i = start; i <= end; i++) {
			years.push(i);
		}
	}

	return years;
};
