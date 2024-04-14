import { ShortImage } from './Response';
import { Nullable } from './utilityTypes';

export interface SeasonResponse {
	docs: Season[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}

export interface Season {
	id: Nullable<string>;
	movieId: Nullable<number>;
	number: Nullable<number>;
	episodesCount: Nullable<number>;
	episodes: Episode[];
	poster: ShortImage;
	name: Nullable<string>;
	enName: Nullable<string>;
	duration: Nullable<number>;
	description: Nullable<string>;
	enDescription: Nullable<string>;
	airDate: Nullable<string>;
	updatedAt: Nullable<string>;
	createdAt: Nullable<string>;
	source: Nullable<string>;
}

export interface Episode {
	number: Nullable<number>;
	name: Nullable<string>;
	enName: Nullable<string>;
	description: Nullable<string>;
	still: Nullable<ShortImage>;
	duration: Nullable<number>;
	airDate: Nullable<string>;
	enDescription: Nullable<string>;
}
