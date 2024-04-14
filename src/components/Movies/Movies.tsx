import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import MovieCard from 'components/MovieCard/MovieCard';
import cls from './Movies.module.scss';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import DotLoader from 'components/UIKit/DotLoader/DotLoader';
import { fetchMovies } from 'service/fetchMovies';
import { classNames } from 'utils/classNames';
import { useFilterParams } from 'hooks/useFilterParams';
import FilterMovies from 'components/FilterMovies/FilterMovies';

const Movies = () => {
	const { ref, inView } = useInView();

	const { country, year, ageRating } = useFilterParams();

	const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfiniteQuery({
			queryKey: ['movies', country, year, ageRating],
			queryFn: ({ pageParam }) =>
				fetchMovies(
					{ pageParam },
					country || null,
					year || null,
					ageRating || null
				),
			initialPageParam: 1,
			getNextPageParam: (lastPage, _, lastPageParam) =>
				lastPage.pages > lastPageParam ? lastPageParam + 1 : undefined,
		});

	useEffect(() => {
		if (inView && hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	}, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

	return (
		<div className={classNames(cls.root)}>
			<FilterMovies className={cls.filter} />
			<div className={cls.movies}>
				{status === 'pending' ? (
					<DotLoader className={cls.loader} />
				) : status === 'error' ? (
					<p>Не удалось загрузить...</p>
				) : data.pages[0]?.total > 0 ? (
					<>
						<div className={cls.moviesWrapper}>
							{data.pages.map((resp) =>
								resp.docs.map((movie) => (
									<MovieCard movie={movie} key={movie.id} />
								))
							)}
						</div>
						<div ref={ref}>
							{isFetchingNextPage && <DotLoader className={cls.loader} />}
						</div>
					</>
				) : (
					<p>Фильма по такому запросу нет...</p>
				)}
			</div>
		</div>
	);
};

export default Movies;
