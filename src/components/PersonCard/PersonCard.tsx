import { Person } from 'model/PersonsResponse';
import cls from './PersonCard.module.scss';
import NoPoster from 'assets/img/no-poster.jpg';

type PersonCardProps = {
	person: Person;
};

const PersonCard = ({ person: actor }: PersonCardProps) => {
	const actorName = actor.name || actor.enName;

	return (
		<div className={cls.root}>
			<div className={cls.imageWrapper}>
				<img
					className={cls.img}
					src={actor.photo || NoPoster}
					alt={actorName || 'Актер'}
					width={170}
					height={300}
					loading="lazy"
					onError={({ currentTarget }) => {
						currentTarget.onerror = null;
						currentTarget.src = NoPoster;
					}}
				/>
			</div>
			<div className={cls.info}>
				<p className={cls.name}>{actorName || 'Имя неизвестно.'}</p>
				{actor.sex && <p className={cls.secondary}>Пол: {actor.sex}</p>}
				<p className={cls.secondary}>
					Возраст: {actor.age ? actor.age + ' лет' : 'Неизвестно'}
				</p>
			</div>
		</div>
	);
};

export default PersonCard;
