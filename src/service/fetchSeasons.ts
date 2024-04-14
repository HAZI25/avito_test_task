import { Season, SeasonResponse } from 'model/SeasonResponse';
import { axiosInstance } from './axios';
import { SortType } from 'model/types';

export const fetchSeasonsAndSeries = async (
	page: number,
	limit: number,
	movieId: number,
	sortField: keyof Season,
	sortType?: SortType
) => {
	const response = await axiosInstance.get<SeasonResponse>('v1.4/season', {
		params: {
			page,
			limit,
			movieId,
			sortType,
			sortField,
		},
	});
	return response.data;
};
