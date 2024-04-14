export enum SearchParams {
	SearchQuery = 'q',
	Country = 'country',
	Year = 'year',
	AgeRating = 'ageRating',
}

export enum PersonProfession {
	Actor = 'actor',
	Director = 'director',
}

export enum ReviewType {
	Positive = 'Позитивный',
	Negative = 'Негативный',
	Neutral = 'Нейтральный',
}

export enum SortType {
	ASC = 1,
	DES = -1,
}

export enum PossibleSortValue {
	Genre = 'genres.name',
	Country = 'countries.name',
	Type = 'type',
}
