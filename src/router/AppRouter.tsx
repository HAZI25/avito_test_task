import { Route, Routes } from 'react-router-dom';
import { Routes as AppRoutes } from './Routes';
import Films from 'pages/Films/Films';
import Film from 'pages/Film/Film';
import RandomFilm from 'pages/RandomFilm/RandomFilm';

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AppRoutes.Home} element={<Films />} />
			<Route path={AppRoutes.Film} element={<Film />} />
			<Route path={AppRoutes.RandomFilm} element={<RandomFilm />} />
		</Routes>
	);
};

export default AppRouter;
