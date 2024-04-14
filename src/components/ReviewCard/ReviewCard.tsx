import { Review } from 'model/ReviewsResponse';
import cls from './ReviewCard.module.scss';
import { trimEllips } from 'utils/trimEllips';
import { formatDate } from 'utils/formatDate';
import { classNames } from 'utils/classNames';
import { ReviewType } from 'model/types';

export type ReviewCardProps = {
	review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
	const reviewType =
		review.type === ReviewType.Positive
			? 'positive'
			: review.type == ReviewType.Negative
			? 'negative'
			: 'neutral';

	return (
		<article className={classNames(cls.root, cls[reviewType])}>
			{!!review.title && <h3 className={cls.title}>{review.title}</h3>}
			<p className={cls.review}>{trimEllips(review.review, 500)}</p>
			<p className={cls.date}>{formatDate(review.date)}</p>
		</article>
	);
};

export default ReviewCard;
