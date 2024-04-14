import cls from './MovieCard.module.scss';
import NoPoster from 'assets/img/no-poster.jpg';
import { Link } from 'react-router-dom';
import { Routes } from 'router/Routes';
import { trimEllips } from 'utils/trimEllips';
import { resultString } from 'utils/resultString';
import { isNullOrUnd } from 'utils/isNullOrUnd';
import { MovieDto } from 'model/MovieDto';

type MovieCardProps = {
	movie: MovieDto;
};
const MovieCard = ({ movie }: MovieCardProps) => {
	const movieName =
		movie.name ||
		movie.alternativeName ||
		(movie?.names?.length > 0 && movie.names[0].name) ||
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
					/>
				</Link>
				<div className={cls.info}>
					<div className={cls.nameRating}>
						<Link to={`${Routes.Movie}/${movie.id}`} className={cls.name}>
							{movieName}
						</Link>
						{!!movie?.rating?.kp && (
							<p className={cls.rating}>{movie?.rating?.kp.toFixed(1)}</p>
						)}
					</div>
					<div className={cls.infoSecondary}>
						{(!!movie.alternativeName ||
							!!movie.year ||
							!!movie.movieLength) && (
							<p>
								{resultString(
									' * ',
									{ str: movie.alternativeName },
									{ str: movie.year, ending: ' г.' },
									{ str: movie.movieLength, ending: ' мин.' }
								)}
							</p>
						)}
						{(movie.countries?.length !== 0 || movie.genres?.length !== 0) && (
							<p>
								{resultString(
									' * ',
									{ str: movie.countries[0]?.name },
									{ str: movie.genres[0]?.name }
								)}
							</p>
						)}
						{(!isNullOrUnd(movie.ageRating) || !!movie.ratingMpaa) && (
							<p>
								{resultString(
									' или ',
									{ str: movie.ageRating, ending: '+' },
									{ str: movie.ratingMpaa }
								)}
							</p>
						)}
					</div>
					<p className={cls.description}>
						{trimEllips(
							movie.shortDescription ||
								movie.description ||
								'Описание отстутствует.',
							250
						)}
					</p>
				</div>
			</div>
		</article>
	);
};

export default MovieCard;
