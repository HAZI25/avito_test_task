import Pagination from 'components/UIKit/Pagination/Pagination';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import DotLoader from 'components/UIKit/DotLoader/DotLoader';
import { fetchReviews } from 'service/fetchReviews';
import cls from './MovieReviewList.module.scss';
import ReviewCard from 'components/ReviewCard/ReviewCard';
import { useMediaQueries } from 'hooks/useMediaQueries';

type MovieReviewListProps = {
	movieId: number;
};

const MovieReviewList = ({ movieId }: MovieReviewListProps) => {
	const [page, setPage] = useState(1);

	const { isExtraLarge, isLarge, isMedium, isSmall } = useMediaQueries();

	let limit;

	if (isLarge || isExtraLarge) {
		limit = 3;
	} else if (isMedium) {
		limit = 2;
	} else {
		limit = 1;
	}

	const { data, status } = useQuery({
		queryKey: ['reviews', page, movieId],
		queryFn: () => fetchReviews(page, limit, movieId),
		placeholderData: (prev) => prev,
	});

	return (
		<div className={cls.root}>
			<p className={cls.title}>Отзывы</p>
			{status === 'pending' ? (
				<DotLoader />
			) : status === 'error' ? (
				<p>Не удалось загрузить...</p>
			) : !!data.total ? (
				<>
					<div className={cls.reviews}>
						{data.docs.map((review) => (
							<ReviewCard review={review} key={review.id} />
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

export default MovieReviewList;
