import cls from './MovieActorList.module.scss';
import Pagination from 'components/UIKit/Pagination/Pagination';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPersonByFilm } from 'service/fetchPersons';
import DotLoader from 'components/UIKit/DotLoader/DotLoader';
import { PersonProfession } from 'model/types';
import PersonCard from 'components/PersonCard/PersonCard';
import { useMediaQueries } from 'hooks/useMediaQueries';

type MovieActorListProps = {
	movieId: number;
};

const MovieActorList = ({ movieId }: MovieActorListProps) => {
	const [page, setPage] = useState(1);

	const { isExtraLarge, isLarge, isMedium, isSmall } = useMediaQueries();

	let limit;

	if (isExtraLarge || isLarge) {
		limit = 4;
	} else if (isMedium) {
		limit = 3;
	} else if (isSmall) {
		limit = 2;
	} else limit = 1;

	const { data, status } = useQuery({
		queryKey: ['persons', page, movieId, PersonProfession.Actor],
		queryFn: () =>
			fetchPersonByFilm(page, limit, movieId, PersonProfession.Actor),
		placeholderData: (prev) => prev,
	});

	return (
		<div>
			<p className={cls.title}>Актеры</p>
			{status === 'pending' ? (
				<DotLoader />
			) : status === 'error' ? (
				<p>Не удалось загрузить...</p>
			) : !!data.total ? (
				<>
					<div className={cls.actors}>
						{data.docs.map((actor) => (
							<PersonCard key={actor.id} person={actor} />
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

export default MovieActorList;
