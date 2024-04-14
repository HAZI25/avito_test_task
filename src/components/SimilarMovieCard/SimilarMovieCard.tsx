import NoPoster from 'assets/img/no-poster.jpg';
import { Link } from 'react-router-dom';
import { Routes } from 'router/Routes';
import { resultString } from 'utils/resultString';
import { LinkedMovie } from 'model/MovieDto';
import cls from './SimilarMovieCard.module.scss';

type SimilarMovieCardProps = {
	movie: LinkedMovie;
};
const SimilarMovieCard = ({ movie }: SimilarMovieCardProps) => {
	const movieName =
		movie.name ||
		movie.alternativeName ||
		movie.enName ||
		'Название отсутствует.';

	return (
		<article className={cls.root}>
			<div className={cls.main}>
				<Link className={cls.posterLink} to={`${Routes.Movie}/${movie.id}`}>
					<img
						className={cls.poster}
						src={movie.poster?.previewUrl || movie.poster?.url || NoPoster}
						alt={movieName}
						loading="lazy"
						height={200}
						width={150}
						onError={({ currentTarget }) => {
							currentTarget.onerror = null;
							currentTarget.src = NoPoster;
						}}
					/>
				</Link>
				<div className={cls.info}>
					<div className={cls.nameWrapper}>
						<Link to={`${Routes.Movie}/${movie.id}`} className={cls.name}>
							{movieName}
						</Link>
					</div>
					<div className={cls.infoSecondary}>
						{(!!movie.alternativeName || !!movie.year) && (
							<p>
								{resultString(
									' * ',
									{ str: movie.alternativeName },
									{ str: movie.year, ending: ' г.' }
								)}
							</p>
						)}
						{!!movie.rating?.kp && <p>Рейтинг: {movie.rating.kp.toFixed(1)}</p>}
					</div>
				</div>
			</div>
		</article>
	);
};

export default SimilarMovieCard;
