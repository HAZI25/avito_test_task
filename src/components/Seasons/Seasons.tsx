import Pagination from 'components/UIKit/Pagination/Pagination';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import DotLoader from 'components/UIKit/DotLoader/DotLoader';
import cls from './Seasons.module.scss';
import { fetchSeasonsAndSeries } from 'service/fetchSeasons';
import SeasonCard from 'components/SeasonCard/SeasonCard';
import { useMediaQueries } from 'hooks/useMediaQueries';
import { SortType } from 'model/types';

type SeasonAndSeriesProps = {
	movieId: number;
};

const SeasonAndSeries = ({ movieId }: SeasonAndSeriesProps) => {
	const [page, setPage] = useState(1);

	const { isExtraLarge, isLarge, isMedium, isSmall } = useMediaQueries();

	let limit;

	if (isLarge || isExtraLarge) {
		limit = 4;
	} else if (isMedium) {
		limit = 3;
	} else if (isSmall) {
		limit = 2;
	} else limit = 1;

	const { data, status } = useQuery({
		queryKey: ['seasons', page, movieId, limit],
		queryFn: () =>
			fetchSeasonsAndSeries(page, limit, movieId, 'number', SortType.ASC),
		placeholderData: (prev) => prev,
	});

	return (
		<div>
			<p className={cls.title}>Сезоны</p>
			{status === 'pending' ? (
				<DotLoader />
			) : status === 'error' ? (
				<p>Не удалось загрузить...</p>
			) : !!data.total ? (
				<>
					<div className={cls.seasons}>
						{data.docs.map((season) => (
							<SeasonCard season={season} key={season.id} />
						))}
					</div>
					{data.pages > 1 && (
						<Pagination
							onNextPageClick={() => {
								if (page < data.pages) setPage((prev) => prev + 1);
							}}
							onPrevPageClick={() => {
								if (page > 1) setPage((prev) => prev - 1);
							}}
							onFirstPageClick={() => setPage(1)}
							onLastPageClick={() => setPage(data.pages)}
							disable={{ left: page === 1, right: page === data.pages }}
							nav={{ total: data.pages, current: page }}
							className={cls.pagination}
						/>
					)}
				</>
			) : (
				<p>Информации нет.</p>
			)}
		</div>
	);
};

export default SeasonAndSeries;
