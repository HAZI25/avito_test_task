import { useQuery } from '@tanstack/react-query';
import { fetchPossibleValuesByField } from 'service/fetchPossibleValuesByField';
import { generateYears } from 'utils/generateYears';
import cls from './FilterMovies.module.scss';
import { classNames } from 'utils/classNames';
import { useMemo } from 'react';
import { useFilterParams } from 'hooks/useFilterParams';
import { PossibleSortValue } from 'model/types';

type FilterMoviesProps = {
	className?: string;
};

const FilterMovies = ({ className }: FilterMoviesProps) => {
	const { data: countries, status: countriesStatus } = useQuery({
		queryKey: ['countries'],
		queryFn: () => fetchPossibleValuesByField(PossibleSortValue.Country),
		staleTime: Infinity,
	});

	const years = useMemo(
		() =>
			generateYears(new Date().getFullYear(), new Date().getFullYear() - 50),
		[]
	);

	const ageRatings = ['0', '6', '12', '16', '18'];

	const {
		country,
		year,
		ageRating,
		setCountry,
		setAgeRating,
		setYear,
		resetFilters,
	} = useFilterParams();

	return (
		<div className={classNames(cls.root, className)}>
			<div className={cls.row}>
				<p>Год</p>
				<select
					name="year"
					id="year"
					value={year}
					onChange={(e) => setYear(e.target.value)}
				>
					<option value="">Все годы</option>
					{years.map((year) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>
			<div className={cls.row}>
				<p>Страна</p>
				<select
					name="country"
					id="country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				>
					<option value="">Все страны</option>
					{countriesStatus === 'pending' ? (
						<option value="">Загрузка...</option>
					) : countriesStatus === 'error' ? (
						<option value="">Ошибка</option>
					) : (
						countries.map((country) => (
							<option key={country.name} value={country.name}>
								{country.name}
							</option>
						))
					)}
				</select>
			</div>
			<div className={cls.row}>
				<p>Возрастной рейтинг</p>
				<select
					name="ageRating"
					id="ageRating"
					value={ageRating}
					onChange={(e) => setAgeRating(e.target.value)}
				>
					<option value="">Любой</option>
					{ageRatings.map((age) => (
						<option key={age} value={age}>
							{age}+
						</option>
					))}
				</select>
			</div>
			<button className={cls.reset} onClick={resetFilters}>
				Сбросить
			</button>
		</div>
	);
};

export default FilterMovies;
