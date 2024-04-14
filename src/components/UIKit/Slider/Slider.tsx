import React, { ReactNode, useState } from 'react';
import cls from './Slider.module.scss';
import { classNames } from 'utils/classNames';

type SliderProps = {
	rootClassName?: string;
	slideContainerClassName?: string;
	imageUrls?: string[];
	onEnd?: () => void;
	onEndThreshold?: number;
	children?: ReactNode;
	perSlide?: number;
};

const Slider = ({
	imageUrls,
	rootClassName,
	slideContainerClassName,
	onEnd,
	onEndThreshold,
	children,
	perSlide,
}: SliderProps) => {
	const [index, setIndex] = useState(0);

	const showPrevImg = () => {
		if (index > 0) setIndex((prev) => prev - 1);
	};
	const showNextImg = () => {
		if (index < imageUrls?.length - 1 || index < groupedNodes.length - 1) {
			setIndex((prev) => prev + 1);
		}
		if (
			index >=
				(imageUrls?.length - (onEndThreshold || 0) ||
					React.Children.count(children)) -
					(onEndThreshold || 0) &&
			onEnd
		)
			onEnd();
	};

	const nodes = React.Children.toArray(children);
	const groupedNodes: ReactNode[][] = [];

	for (let i = 0; i < nodes.length; i += perSlide) {
		groupedNodes.push(nodes.slice(i, i + perSlide));
	}

	return (
		<div className={classNames(cls.root, rootClassName)}>
			<div className={cls.slides}>
				{!!children
					? groupedNodes.map((parent, parentIndex) => (
							<div
								key={parentIndex}
								className={classNames(cls.parent, slideContainerClassName)}
								style={{ translate: `${-100 * index}%` }}
							>
								{parent.map((child) => child)}
							</div>
					  ))
					: imageUrls?.map((url) => (
							<img
								key={url}
								className={cls.image}
								src={url}
								style={{ translate: `${-100 * index}%` }}
							/>
					  ))}
			</div>
			<button
				onClick={showPrevImg}
				className={classNames(cls.btn, cls.btnLeft)}
			>
				{'<'}
			</button>
			<button
				onClick={showNextImg}
				className={classNames(cls.btn, cls.btnRight)}
			>
				{'>'}
			</button>
		</div>
	);
};

export default Slider;
