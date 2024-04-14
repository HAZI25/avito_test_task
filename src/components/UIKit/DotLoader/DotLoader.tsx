import { classNames } from 'utils/classNames';
import cls from './DotLoader.module.scss';

type DotLoaderProps = {
	className?: string;
};

const DotLoader = ({ className }: DotLoaderProps) => {
	return <div className={classNames(cls.loader, className)}></div>;
};

export default DotLoader;
