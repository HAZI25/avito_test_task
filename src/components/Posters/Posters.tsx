import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Slider from 'components/UIKit/Slider/Slider';
import { fetchPosters } from 'service/fetchPosters';
import cls from './Posters.module.scss';
import DotLoader from 'components/UIKit/DotLoader/DotLoader';

export type PostersProps = {
	movieId: number;
};

const Posters = ({ movieId }: PostersProps) => {
	const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfiniteQuery({
			queryKey: ['posters', movieId],
			queryFn: ({ pageParam }) => fetchPosters({ pageParam }, 5, movieId),
			initialPageParam: 1,
			getNextPageParam: (lastPage, _, lastPageParam) =>
				lastPage.pages > lastPageParam ? lastPageParam + 1 : undefined,
		});

	return (
		<div>
			{status === 'pending' ? (
				<div>
					<DotLoader />
				</div>
			) : status === 'error' ? (
				<p>Не удалось загрузить...</p>
			) : (
				<>
					<p className={cls.title}>Постеры</p>
					<Slider
						rootClassName={cls.slider}
						imageUrls={data.pages
							.map((resp) =>
								resp.docs.map((poster) => poster.url || poster.previewUrl)
							)
							.flat()}
						onEnd={() => hasNextPage && !isFetchingNextPage && fetchNextPage()}
						onEndThreshold={2}
					/>
				</>
			)}
		</div>
	);
};

export default Posters;
