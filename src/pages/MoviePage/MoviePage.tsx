import { useQuery } from '@tanstack/react-query';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useParams } from 'react-router-dom';
import { fetchMovie } from 'service/fetchMovie';
import { classNames } from 'utils/classNames';
import cls from './MoviePage.module.scss';
import DotLoader from 'components/UIKit/DotLoader/DotLoader';
import MovieActorList from 'components/MovieActorList/MovieActorList';
import SeasonsAndSeries from 'components/Seasons/Seasons';
import MovieReviewList from 'components/MovieReviewList/MovieReviewList';
import Posters from 'components/Posters/Posters';
import SimilarMovies from 'components/SimilarMovies/SimilarMovies';

const Movie = () => {
	const { id } = useParams();
	const { data, status } = useQuery({
		queryKey: ['movie', id],
		queryFn: () => fetchMovie(id),
	});
	return (
		<section className={classNames('container', cls.root)}>
			{status === 'pending' ? (
				<DotLoader />
			) : status === 'error' ? (
				<p>Не удалось загрузить...</p>
			) : (
				<>
					<MovieInfo movie={data} />
					<MovieActorList movieId={data.id} />
					{data.isSeries && <SeasonsAndSeries movieId={data.id} />}
					<MovieReviewList movieId={data.id} />
					<Posters movieId={data.id} />
					<SimilarMovies movies={data.similarMovies} />
				</>
			)}
		</section>
	);
};

export default Movie;
