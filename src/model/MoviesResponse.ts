import { MovieDto } from './MovieDto';

export interface MoviesResponse {
	docs: MovieDto[];
	total: number;
	limit: number;
	page: number;
	pages: number;
}
