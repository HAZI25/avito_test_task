import { axiosInstance } from './axios';
import { SearchMovieResponse } from 'model/SearchMovieResonse';

export const searchMovies = async ({ pageParam = 1 }, query: string) => {
	const response = await axiosInstance.get<SearchMovieResponse>(
		'v1.4/movie/search',
		{
			params: {
				page: pageParam,
				limit: 10,
				query,
			},
		}
	);
	return response.data;
};
