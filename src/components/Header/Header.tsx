import { Link } from 'react-router-dom';
import { Routes } from 'router/Routes';
import cls from './Header.module.scss';
import { classNames } from 'utils/classNames';
import placeholder from 'assets/img/avatar-placeholder.png';
import Magnifier from 'assets/icons/magnifier.svg';
import { useState } from 'react';

const Header = () => {
	const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

	const toggleMobileSearchVisibility = () => {
		setIsMobileSearchVisible((prev) => !prev);
	};

	return (
		<header className={classNames(cls.root)}>
			<div className={classNames('container', cls.container)}>
				<Link to={Routes.Home} className={cls.logo}>
					МУВИС
				</Link>
				<nav className={cls.nav}>
					<ul>
						<li className={cls.navItem}>
							<Link to={Routes.RandomFilm}>Случайный фильм</Link>
						</li>
					</ul>
				</nav>
				<form
					className={classNames(cls.form, {
						[cls.mobile]: isMobileSearchVisible,
					})}
				>
					<input type="search" placeholder="Фильмы, сериалы, персоны..." />
					<button>
						<Magnifier className={cls.iconSearch} />
					</button>
				</form>
				<button
					className={cls.showMobileInput}
					onClick={toggleMobileSearchVisibility}
				>
					<Magnifier />
				</button>
				<img src={placeholder} className={cls.user} />
			</div>
		</header>
	);
};

export default Header;
