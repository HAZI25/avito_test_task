import {
	ExternalId,
	ItemName,
	Logo,
	MovieStatus,
	MovieType,
	MovieTypeNumber,
	Name,
	Rating,
	ShortImage,
	Votes,
} from './Response';
import { Nullable } from './utilityTypes';

export interface SearchMovieResponse {
	docs: SearchMovieDto[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}

export interface SearchMovieDto {
	id: Nullable<number>;
	name: Nullable<string>;
	alternativeName: Nullable<string>;
	enName: Nullable<string>;
	type: Nullable<MovieType>;
	description: Nullable<string>;
	shortDescription: Nullable<string>;
	movieLength: Nullable<number>;
	names: Nullable<Name[]>;
	externalId: Nullable<ExternalId>;
	logo: Nullable<Logo>;
	poster: Nullable<ShortImage>;
	backdrop: Nullable<ShortImage>;
	rating: Nullable<Rating>;
	votes: Nullable<Votes>;
	genres: Nullable<ItemName[]>;
	countries: Nullable<ItemName[]>;
	releaseYears: Nullable<YearRange>;
	isSeries: Nullable<boolean>;
	ticketsOnSale: Nullable<boolean>;
	totalSeriesLength: Nullable<number>;
	seriesLength: Nullable<number>;
	ratingMpaa: Nullable<string>;
	ageRating: Nullable<number>;
	top10: Nullable<number>;
	top250: Nullable<number>;
	typeNumber: Nullable<MovieTypeNumber>;
	status: Nullable<MovieStatus>;
}

interface YearRange {
	start: Nullable<number>;
	end: Nullable<number>;
}
