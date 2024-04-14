import Movies from 'components/Movies/Movies';
import { classNames } from 'utils/classNames';
import cls from './MoviesPage.module.scss';
import { useFilterParams } from 'hooks/useFilterParams';
import SearchMovies from 'components/SearchMovies/SearchMovies';

const MoviesPage = () => {
	const { searchQuery } = useFilterParams();

	return (
		<section className={classNames('container', cls.root)}>
			{!!searchQuery ? <SearchMovies /> : <Movies />}
		</section>
	);
};

export default MoviesPage;
