import { Link, useSearchParams } from 'react-router-dom';
import { Routes } from 'router/Routes';
import cls from './Navbar.module.scss';
import placeholder from 'assets/img/avatar-placeholder.png';
import { useState } from 'react';
import { classNames } from 'utils/classNames';
import { useFilterParams } from 'hooks/useFilterParams';
import Search from 'assets/icons/search.svg';

const Navbar = () => {
	const { setSearchQuery } = useFilterParams();
	const [q, setQ] = useState('');

	const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

	const toggleMobileMenu = () => setIsMobileMenuActive((prev) => !prev);
	const closeMobileMenu = () => setIsMobileMenuActive(false);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchQuery(q);
		setQ('');
	};

	return (
		<header className={classNames(cls.root)}>
			<div className={classNames('container', cls.container)}>
				<Link to={Routes.Home} className={cls.logo}>
					МУВИС
				</Link>
				<div className={cls.menu}>
					<div
						className={classNames(cls.menuIcon, {
							[cls.active]: isMobileMenuActive,
						})}
						onClick={toggleMobileMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<nav
						className={classNames(cls.nav, {
							[cls.active]: isMobileMenuActive,
						})}
					>
						<ul className={cls.list}>
							<li className={cls.navItem} onClick={closeMobileMenu}>
								<Link to={Routes.RandomFilm}>Случайный фильм</Link>
							</li>
							<li
								className={classNames(cls.navItem, cls.profile)}
								onClick={closeMobileMenu}
							>
								<Link to={Routes.RandomFilm}>Профиль</Link>
							</li>
						</ul>
					</nav>
				</div>
				<form className={classNames(cls.form)} onSubmit={onSubmit}>
					<input
						type="search"
						placeholder="Поиск фильмов..."
						value={q}
						onChange={(e) => {
							setQ(e.target.value);
						}}
					/>
					<button type="submit">
						<Search />
					</button>
				</form>
				<button className={cls.user}>
					<img src={placeholder} />
				</button>
			</div>
		</header>
	);
};

export default Navbar;

// import { Link, useSearchParams } from 'react-router-dom';
// import { Routes } from 'router/Routes';
// import cls from './Navbar.module.scss';
// import placeholder from 'assets/img/avatar-placeholder.png';
// import { useState } from 'react';
// import { classNames } from 'utils/classNames';
// import { useFilterParams } from 'hooks/useFilterParams';

// function debounce(func: Function, delay: number = 700): Function {
// 	let timer: ReturnType<typeof setTimeout>;

// 	return function (...args: any[]) {
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			func.apply(this, args);
// 		}, delay);
// 	};
// }

// const Navbar = () => {
// 	const { setSearchQuery } = useFilterParams();

// 	const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

// 	const toggleMobileMenu = () => setIsMobileMenuActive((prev) => !prev);
// 	const closeMobileMenu = () => setIsMobileMenuActive(false);

// 	const onSearch = debounce((q: string) => {
// 		setSearchQuery(q);
// 	});

// 	const onClear = () => {
// 		setSearchQuery('');
// 	};

// 	return (
// 		<header className={classNames(cls.root)}>
// 			<div className={classNames('container', cls.container)}>
// 				<Link to={Routes.Home} className={cls.logo}>
// 					МУВИС
// 				</Link>
// 				<div className={cls.menu}>
// 					<div
// 						className={classNames(cls.menuIcon, {
// 							[cls.active]: isMobileMenuActive,
// 						})}
// 						onClick={toggleMobileMenu}
// 					>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</div>
// 					<nav
// 						className={classNames(cls.nav, {
// 							[cls.active]: isMobileMenuActive,
// 						})}
// 					>
// 						<ul className={cls.list}>
// 							<li className={cls.navItem} onClick={closeMobileMenu}>
// 								<Link to={Routes.RandomFilm}>Случайный фильм</Link>
// 							</li>
// 							<li
// 								className={classNames(cls.navItem, cls.profile)}
// 								onClick={closeMobileMenu}
// 							>
// 								<Link to={Routes.RandomFilm}>Профиль</Link>
// 							</li>
// 						</ul>
// 					</nav>
// 				</div>
// 				<form
// 					className={classNames(cls.form)}
// 					onSubmit={(e) => e.preventDefault()}
// 				>
// 					<input
// 						type="search"
// 						placeholder="Поиск фильмов..."
// 						onChange={(e) => {
// 							onSearch(e.target.value);
// 						}}
// 					/>
// 					<button type="button" onClick={onClear}>
// 						x
// 					</button>
// 				</form>
// 				<button className={cls.user}>
// 					<img src={placeholder} />
// 				</button>
// 			</div>
// 		</header>
// 	);
// };

// export default Navbar;
