import { Nullable } from './utilityTypes';

export interface ReviewsResponse {
	docs: Review[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}

export interface Review {
	id: number;
	movieId: number;
	title: Nullable<string>;
	type: Nullable<string>;
	review: Nullable<string>;
	date: Nullable<string>;
	author: Nullable<string>;
	userRating: Nullable<number>;
	authorId: number;
	createdAt: string;
	updatedAt: string;
}
