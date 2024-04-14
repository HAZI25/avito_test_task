import { Nullable } from './utilityTypes';

export interface PostersResponse {
	docs: Image[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}

export interface Image {
	movieId: number;
	type: Nullable<string>;
	url: Nullable<string>;
	previewUrl: Nullable<string>;
	height: Nullable<number>;
	width: Nullable<number>;
	createdAt: Nullable<string>;
	updatedAt: Nullable<string>;
	id: Nullable<string>;
}
