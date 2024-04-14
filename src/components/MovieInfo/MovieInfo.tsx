import { MovieDto } from 'model/MovieDto';
import cls from './MovieInfo.module.scss';
import MovieAbout from 'components/MovieAbout.tsx/MovieAbout';
import NoPoster from 'assets/img/no-poster.jpg';

type MovieInfoProps = {
	movie: MovieDto;
};

const MovieInfo = ({ movie }: MovieInfoProps) => {
	const movieName =
		movie.name ||
		movie.alternativeName ||
		(movie?.names?.length > 0 && movie.names[0].name) ||
		movie.enName ||
		'Название отсутствует.';

	return (
		<div className={cls.root}>
			<div className={cls.info}>
				<img
					className={cls.poster}
					width={200}
					height={300}
					src={movie.poster.url || movie.poster.previewUrl || NoPoster}
					alt={movieName}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null;
						currentTarget.src = NoPoster;
					}}
				/>
				<div className={cls.content}>
					<div className={cls.nameRating}>
						<div className={cls.nameWrapper}>
							<h1 className={cls.name}>{movieName}</h1>
							{!!movie.shortDescription && (
								<p className={cls.shortDescription}>{movie.shortDescription}</p>
							)}
						</div>
						<div className={cls.ratingWrapper}>
							{!!movie.rating?.kp ? (
								<>
									<p className={cls.rating}>
										Рейтинг: {movie.rating.kp.toFixed(1)}
									</p>
									{!!movie.votes?.kp && (
										<p className={cls.votes}>
											{movie.votes.kp.toLocaleString()} оценок
										</p>
									)}
								</>
							) : (
								<p className={cls.rating}>Недостаточно оценок</p>
							)}
						</div>
					</div>
					<MovieAbout movie={movie} />
				</div>
			</div>
			{!!movie.description && (
				<div className={cls.description}>
					<p className={cls.descriptionTitle}>Описание</p>
					<p>{movie.description}</p>
				</div>
			)}
		</div>
	);
};

export default MovieInfo;
