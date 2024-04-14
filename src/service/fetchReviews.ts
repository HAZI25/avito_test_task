import { ReviewsResponse } from 'model/ReviewsResponse';
import { axiosInstance } from './axios';

export const fetchReviews = async (
	page: number,
	limit: number,
	movieId: number
) => {
	const response = await axiosInstance.get<ReviewsResponse>(`v1.4/review`, {
		params: {
			page,
			limit,
			movieId,
		},
	});
	return response.data;
};
