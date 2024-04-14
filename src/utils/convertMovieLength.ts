export const convertMovieLength = (minutes: number) => {
	const hours = Math.floor(minutes / 60);
	const remainingMin = minutes - hours * 60;
	return `${hours.toString().padStart(2, '0')}:${remainingMin
		.toString()
		.padStart(2, '0')}`;
};
