import { MovieDto } from 'model/MovieDto';
import { axiosInstance } from './axios';

export const fetchMovie = async (id: string) => {
	const response = await axiosInstance.get<MovieDto>(`v1.4/movie/${id}`);
	return response.data;
};
