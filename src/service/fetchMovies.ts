import { MoviesResponse } from 'model/MoviesResponse';
import { axiosInstance } from './axios';

export const fetchMovies = async (
	{ pageParam = 1 },
	country?: string,
	year?: string,
	ageRating?: string
) => {
	const response = await axiosInstance.get<MoviesResponse>('v1.4/movie', {
		params: {
			page: pageParam,
			limit: 10,
			'countries.name': country,
			year,
			ageRating,
		},
	});
	return response.data;
};
