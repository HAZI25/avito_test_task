import { Link } from 'react-router-dom';
import { Routes } from 'router/Routes';
import { classNames } from 'utils/classNames';
import cls from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={classNames('container', cls.root)}>
			<Link to={Routes.Home} className={cls.logo}>
				МУВИС
			</Link>
		</div>
	);
};

export default Footer;
