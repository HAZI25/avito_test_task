import { LinkedMovie } from 'model/MovieDto';
import cls from './SimilarMovies.module.scss';
import Slider from 'components/UIKit/Slider/Slider';
import SimilarMovieCard from 'components/SimilarMovieCard/SimilarMovieCard';
import { useMediaQueries } from 'hooks/useMediaQueries';

export type SimilarMoviesProps = {
	movies: LinkedMovie[];
};

const SimilarMovies = ({ movies }: SimilarMoviesProps) => {
	const { isExtraLarge, isLarge, isMedium, isSmall } = useMediaQueries();

	let limit;

	if (isExtraLarge || isLarge) {
		limit = 4;
	} else if (isMedium) {
		limit = 3;
	} else if (isSmall) {
		limit = 2;
	} else limit = 1;

	return (
		<div>
			<p className={cls.title}>Вам может понравиться</p>
			{!!movies && movies.length > 0 ? (
				<Slider perSlide={limit} slideContainerClassName={cls.sliderSlide}>
					{movies.map((movie) => (
						<SimilarMovieCard key={movie.id} movie={movie} />
					))}
				</Slider>
			): <p>Информации нет.</p>}
		</div>
	);
};

export default SimilarMovies;
