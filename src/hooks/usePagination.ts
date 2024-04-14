import { useState } from 'react';

export const usePagination = <T>(
	allData: T[],
	perPage: number,
	firstPageNumber: number = 1
) => {
	const [page, setPage] = useState(firstPageNumber);
	const allActors = allData;
	const lastIndex = page * perPage;
	const firstIndex = lastIndex - perPage;
	const totalPages = Math.ceil(allActors.length / perPage);
	const data = allActors.slice(firstIndex, lastIndex);

	return { page, setPage, totalPages, data };
};
