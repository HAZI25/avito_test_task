import { MovieDto } from 'model/MovieDto';
import cls from './MovieAbout.module.scss';
import { getStringNamesByProfession } from 'utils/getPersonsByProfession';
import { PersonProfession } from 'model/types';
import { formatDate } from 'utils/formatDate';
import { convertMovieLength } from 'utils/convertMovieLength';

type MovieAboutProps = {
	movie: MovieDto;
};

const MovieAbout = ({ movie }: MovieAboutProps) => {
	const directors = getStringNamesByProfession(
		movie.persons,
		PersonProfession.Director
	).join(', ');

	return (
		<div className={cls.root}>
			<h2 className={cls.aboutTitle}>О фильме</h2>
			<div className={cls.aboutRows}>
				{movie.year && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Год производства</p>
						<p className={cls.aboutValue}>{movie.year}</p>
					</div>
				)}
				{movie.countries?.length > 0 && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Страна</p>
						<p className={cls.aboutValue}>
							{movie.countries.map((country) => country.name).join(', ')}
						</p>
					</div>
				)}
				{movie.genres?.length > 0 && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Жанр</p>
						<p className={cls.aboutValue}>
							{movie.genres.map((genre) => genre.name).join(', ')}
						</p>
					</div>
				)}
				{!!movie.slogan && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Слоган</p>
						<p className={cls.aboutValue}>{movie.slogan}</p>
					</div>
				)}
				{!!directors && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Режиссер</p>
						<p className={cls.aboutValue}>{directors}</p>
					</div>
				)}
				{!!movie.budget?.value && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Бюджет</p>
						<p className={cls.aboutValue}>
							{`${
								movie.budget?.currency + ' '
							}${movie.budget.value.toLocaleString('ru')}`}
						</p>
					</div>
				)}
				{!!movie.fees?.world?.value && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Сборы в мире</p>
						<p className={cls.aboutValue}>
							{`${
								movie.fees?.world?.currency + ' '
							}${movie.fees.world.value.toLocaleString('ru')}`}
						</p>
					</div>
				)}
				{!!movie.fees?.russia?.value && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Сборы в России</p>
						<p className={cls.aboutValue}>
							{`${
								movie.fees?.russia?.currency + ' '
							}${movie.fees.russia.value.toLocaleString('ru')}`}
						</p>
					</div>
				)}
				{!!movie.premiere?.world && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Премьера в мире</p>
						<p className={cls.aboutValue}>{formatDate(movie.premiere.world)}</p>
					</div>
				)}
				{!!movie.premiere?.russia && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Премьера в России</p>
						<p className={cls.aboutValue}>
							{formatDate(movie.premiere.russia)}
						</p>
					</div>
				)}
				{!!movie.ageRating && (
					<div className={cls.aboutRow}>
						<p className={`${cls.aboutLabel} ${cls.ageRating}`}>Возраст</p>
						<p className={cls.aboutValue}>{movie.ageRating}+</p>
					</div>
				)}
				{!!movie.movieLength && (
					<div className={cls.aboutRow}>
						<p className={cls.aboutLabel}>Время</p>
						<p className={cls.aboutValue}>
							{`${movie.movieLength} мин. / ${convertMovieLength(
								movie.movieLength
							)}`}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default MovieAbout;
