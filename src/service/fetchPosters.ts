import { PostersResponse } from 'model/PostersResponse';
import { axiosInstance } from './axios';

export const fetchPosters = async (
	{ pageParam = 1 },
	limit: number,
	movieId: number
) => {
	const response = await axiosInstance.get<PostersResponse>('v1.4/image', {
		params: {
			page: pageParam,
			limit,
			movieId,
		},
	});
	return response.data;
};
