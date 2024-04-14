import { Nullable } from './utilityTypes';

export interface ShortImage {
	url: Nullable<string>;
	previewUrl: Nullable<string>;
}

export interface ItemName {
	name: Nullable<string>;
}

export interface Logo {
	url: Nullable<string>;
}

export interface Rating {
	kp: Nullable<number>;
	imdb: Nullable<number>;
	filmCritics: Nullable<number>;
	russianFilmCritics: Nullable<number>;
	await: Nullable<number>;
}

export interface ExternalId {
	imdb: Nullable<string>;
	tmdb: Nullable<number>;
	kpHD: Nullable<string>;
}

export interface Name {
	name: string;
	language: Nullable<string>;
	type: Nullable<string>;
}

export interface Votes {
	kp: Nullable<string>;
	imdb: Nullable<number>;
	tmdb: Nullable<number>;
	filmCritics: Nullable<number>;
	russianFilmCritics: Nullable<number>;
	await: Nullable<number>;
}

export type MovieStatus =
	| 'filming'
	| 'pre-production'
	| 'completed'
	| 'announced'
	| 'post-production';

export type MovieType =
	| 'movie'
	| 'tv-series'
	| 'cartoon'
	| 'anime'
	| 'animated-series'
	| 'tv-show';

export type MovieTypeNumber = 1 | 2 | 3 | 4 | 5 | 6;
