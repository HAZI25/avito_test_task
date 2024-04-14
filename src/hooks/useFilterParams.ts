import { SearchParams } from 'model/types';
import { useSearchParams } from 'react-router-dom';

export const useFilterParams = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchQuery = searchParams.get(SearchParams.SearchQuery) || '';
	const country = searchParams.get(SearchParams.Country) || '';
	const year = searchParams.get(SearchParams.Year) || '';
	const ageRating = searchParams.get(SearchParams.AgeRating) || '';
	const setSearchQuery = (q: string) => {
		setSearchParams((prev) => {
			if (q) {
				prev.set(SearchParams.SearchQuery, q);
			} else {
				prev.delete(SearchParams.SearchQuery);
			}
			return prev;
		});
	};
	const setCountry = (q: string) => {
		setSearchParams((prev) => {
			if (q) {
				prev.set(SearchParams.Country, q);
			} else {
				prev.delete(SearchParams.Country);
			}
			return prev;
		});
	};
	const setYear = (q: string) => {
		setSearchParams((prev) => {
			if (q) {
				prev.set(SearchParams.Year, q);
			} else {
				prev.delete(SearchParams.Year);
			}
			return prev;
		});
	};
	const setAgeRating = (q: string) => {
		setSearchParams((prev) => {
			if (q) {
				prev.set(SearchParams.AgeRating, q);
			} else {
				prev.delete(SearchParams.AgeRating);
			}
			return prev;
		});
	};

	const resetFilters = () => {
		setSearchParams((prev) => {
			prev.delete(SearchParams.AgeRating);
			prev.delete(SearchParams.SearchQuery);
			prev.delete(SearchParams.Country);
			prev.delete(SearchParams.Year);
			return prev;
		});
	};

	return {
		searchParams,
		setSearchParams,
		searchQuery,
		country,
		year,
		ageRating,
		setSearchQuery,
		setAgeRating,
		setCountry,
		setYear,
		resetFilters,
	};
};
