export const formatDate = (dateString: string) => {
	var date = new Date(dateString);
	var months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	];
	var day = date.getDate();
	var month = months[date.getMonth()];
	var year = date.getFullYear();
	return day + ' ' + month + ' ' + year;
};
