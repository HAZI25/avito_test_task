import { classNames } from 'utils/classNames';
import cls from './Pagination.module.scss';

type PaginationProps = {
	onNextPageClick: () => void;
	onPrevPageClick: () => void;
	onFirstPageClick?: () => void;
	onLastPageClick?: () => void;
	disable: {
		left: boolean;
		right: boolean;
	};
	nav?: {
		current: number;
		total: number;
	};
	className?: string;
};

const Pagination = (props: PaginationProps) => {
	const {
		nav = null,
		disable,
		onNextPageClick,
		onPrevPageClick,
		onFirstPageClick,
		onLastPageClick,
		className,
	} = props;

	return (
		<div className={classNames(cls.root, className)}>
			{!!onFirstPageClick && (
				<button
					className={cls.btn}
					type="button"
					onClick={onFirstPageClick}
					disabled={disable.left}
				>
					{'<<'}
				</button>
			)}
			<button
				className={cls.btn}
				type="button"
				onClick={onPrevPageClick}
				disabled={disable.left}
			>
				{'<'}
			</button>
			{!!nav && (
				<span>
					{nav.current} / {nav.total}
				</span>
			)}
			<button
				className={cls.btn}
				type="button"
				onClick={onNextPageClick}
				disabled={disable.right}
			>
				{'>'}
			</button>
			{!!onLastPageClick && (
				<button
					className={cls.btn}
					type="button"
					onClick={onLastPageClick}
					disabled={disable.right}
				>
					{'>>'}
				</button>
			)}
		</div>
	);
};

export default Pagination;
