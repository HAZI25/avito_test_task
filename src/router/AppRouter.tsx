import { Route, Routes } from 'react-router-dom';
import { Routes as AppRoutes } from './Routes';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import Movie from 'pages/MoviePage/MoviePage';
import RandomFilm from 'pages/RandomFilm/RandomFilm';

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AppRoutes.Home} element={<MoviesPage />} />
			<Route path={`${AppRoutes.Movie}/:id`} element={<Movie />} />
			<Route path={AppRoutes.RandomFilm} element={<RandomFilm />} />
		</Routes>
	);
};

export default AppRouter;
