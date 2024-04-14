import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import DotLoader from 'components/UIKit/DotLoader/DotLoader';
import { classNames } from 'utils/classNames';
import { useFilterParams } from 'hooks/useFilterParams';
import cls from './SearchMovies.module.scss';
import { searchMovies } from 'service/searchMovies';
import SearchMovieCard from 'components/SearchMovieCard/SearchMovieCard';

const SearchMovies = () => {
	const { ref, inView } = useInView();

	const { searchQuery } = useFilterParams();

	const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfiniteQuery({
			queryKey: ['searchMovies', searchQuery],
			queryFn: ({ pageParam }) => searchMovies({ pageParam }, searchQuery),
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
			{status === 'pending' ? (
				<DotLoader className={cls.loader} />
			) : status === 'error' ? (
				<p>Не удалось загрузить...</p>
			) : data.pages[0]?.total > 0 ? (
				<>
					<p className={cls.info}>
						<span className={cls.label}>Запрос:</span> {searchQuery}
					</p>
					<div className={cls.movies}>
						{data.pages.map((resp) =>
							resp.docs.map((movie) => (
								<SearchMovieCard movie={movie} key={movie.id} />
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
	);
};

export default SearchMovies;
