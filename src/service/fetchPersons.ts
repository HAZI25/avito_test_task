import axios from 'axios';
import { Person, PersonsResponse } from 'model/PersonsResponse';
import { PersonProfession, SortType } from 'model/types';
import { axiosInstance } from './axios';

export const fetchPersonByFilm = async (
	page: number,
	limit: number,
	movieId: number,
	profession: PersonProfession,
	sortField: keyof Person = 'photo',
	sortType: SortType = -1
) => {
	const response = await axiosInstance.get<PersonsResponse>('v1.4/person', {
		params: {
			page,
			limit,
			'movies.id': movieId,
			'movies.enProfession': profession,
			sortField,
			sortType,
		},
	});
	return response.data;
};
