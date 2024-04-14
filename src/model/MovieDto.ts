import {
	ItemName,
	ShortImage,
	Rating,
	ExternalId,
	Name,
	Votes,
	Logo,
	MovieStatus,
	MovieTypeNumber,
	MovieType,
} from './Response';
import { Nullable } from './utilityTypes';

export interface MovieDto {
	fees: Nullable<Fees>;
	status: Nullable<MovieStatus>;
	externalId: Nullable<ExternalId>;
	rating: Nullable<Rating>;
	votes: Nullable<Votes>;
	backdrop: Nullable<ShortImage>;
	movieLength: Nullable<number>;
	id: Nullable<number>;
	type: Nullable<MovieType>;
	name: Nullable<string>;
	description: Nullable<string>;
	premiere: Nullable<Premiere>;
	slogan: Nullable<string>;
	year: Nullable<number>;
	budget: Nullable<CurrencyValue>;
	poster: Nullable<ShortImage>;
	facts: Nullable<Fact[]>;
	genres: Nullable<ItemName[]>;
	countries: Nullable<ItemName[]>;
	seasonsInfo: Nullable<SeasonInfo[]>;
	persons: Nullable<Person[]>;
	lists: Nullable<string[]>;
	typeNumber: Nullable<MovieTypeNumber>;
	alternativeName: Nullable<string>;
	enName: Nullable<string>;
	names: Nullable<Name[]>;
	similarMovies: Nullable<LinkedMovie[]>;
	updatedAt: Nullable<string>;
	sequelsAndPrequels: Nullable<LinkedMovie[]>;
	ratingMpaa: Nullable<string>;
	shortDescription: Nullable<string>;
	ticketsOnSale: Nullable<boolean>;
	ageRating: Nullable<number>;
	logo: Nullable<Logo>;
	watchability: Nullable<Watchability>;
	top10: Nullable<number>;
	top250: Nullable<number>;
	audience: Nullable<Audience[]>;
	isSeries: Nullable<boolean>;
	seriesLength: Nullable<number>;
	totalSeriesLength: Nullable<number>;
	networks: Nullable<NetworkItem[]>;
	videos: Nullable<Videos>;
}

export interface Fact {
	value: string;
	type: Nullable<string>;
	spoiler: Nullable<boolean>;
}

export interface Fees {
	world: Nullable<CurrencyValue>;
	russia: Nullable<CurrencyValue>;
	usa: Nullable<CurrencyValue>;
}

export interface CurrencyValue {
	value: Nullable<number>;
	currency: Nullable<String>;
}

export interface Premiere {
	country: Nullable<string>;
	world: Nullable<string>;
	russia: Nullable<string>;
	digital: Nullable<string>;
	cinema: Nullable<string>;
	bluray: Nullable<string>;
	dvd: Nullable<string>;
}

export interface SeasonInfo {
	number: Nullable<number>;
	episodesCount: Nullable<number>;
}

export interface Person {
	id: number;
	photo: Nullable<string>;
	name: Nullable<string>;
	enName: Nullable<string>;
	description: Nullable<string>;
	profession: Nullable<string>;
	enProfession: Nullable<string>;
}

export interface LinkedMovie {
	id: number;
	name: Nullable<string>;
	enName: Nullable<string>;
	alternativeName: Nullable<string>;
	type: Nullable<string>;
	poster: Nullable<ShortImage>;
	year: Nullable<number>;
	rating: Nullable<Rating>;
}

export interface Watchability {
	items: WatchabilityItem[];
}

export interface WatchabilityItem {
	name: Nullable<string>;
	logo: Logo;
	url: string;
}

export interface Audience {
	count: Nullable<number>;
	country: Nullable<string>;
}

export interface Videos {
	trailers: Nullable<Video[]>;
}

export interface Video {
	url: Nullable<string>;
	name: Nullable<string>;
	site: Nullable<string>;
	type: Nullable<string>;
	size: Nullable<number>;
}

export interface NetworkItem {
	name: Nullable<string>;
	logo: Nullable<{ url: Nullable<string> }>;
}
