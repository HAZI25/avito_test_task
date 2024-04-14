import { useMediaQuery } from 'react-responsive';

export const useMediaQueries = () => {
	const isExtraLarge = useMediaQuery({ query: '(min-width: 1201px)' });
	const isLarge = useMediaQuery({
		query: '(min-width: 993px) and (max-width: 1200px)',
	});
	const isMedium = useMediaQuery({
		query: '(min-width: 769px) and (max-width: 992px)',
	});
	const isSmall = useMediaQuery({
		query: '(min-width: 577px) and (max-width: 768px)',
	});
	const isExtraSmall = useMediaQuery({ query: '(max-width: 577px)' });

	return {
		isExtraLarge,
		isLarge,
		isMedium,
		isSmall,
		isExtraSmall,
	};
};
