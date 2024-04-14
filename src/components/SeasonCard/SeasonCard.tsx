import { SeasonInfo } from 'model/MovieDto';
import cls from './SeasonCard.module.scss';
import { Season } from 'model/SeasonResponse';
import NoPoster from 'assets/img/no-poster.jpg';
import { formatDate } from 'utils/formatDate';

type SeasonCardProps = {
	season: Season;
};

const SeasonCard = ({ season }: SeasonCardProps) => {
	const name = season.name || season.enName;

	return (
		<div className={cls.root}>
			<img
				className={cls.img}
				src={season.poster?.previewUrl || season.poster?.url || NoPoster}
				alt={name || 'Сезон'}
				width={170}
				height={300}
				loading="lazy"
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = NoPoster;
				}}
			/>
			<div className={cls.info}>
				<p className={cls.name}>{name || 'Название неизвестно.'}</p>
				<div className={cls.secondary}>
					<p className={cls.episodes}>
						Эпизодов:{' '}
						{season.episodesCount || season.episodes.length || 'Неизвестно.'}
					</p>
					<p className={cls.date}>{formatDate(season.airDate)}</p>
				</div>
			</div>
		</div>
	);
};

export default SeasonCard;
