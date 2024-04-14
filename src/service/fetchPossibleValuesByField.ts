import { PossibleValue } from 'model/PossibleValue';
import { axiosInstance } from './axios';
import { PossibleSortValue } from 'model/types';

export const fetchPossibleValuesByField = async (field: PossibleSortValue) => {
	const response = await axiosInstance.get<PossibleValue[]>(
		'v1/movie/possible-values-by-field',
		{
			params: {
				field,
			},
		}
	);
	return response.data;
};
