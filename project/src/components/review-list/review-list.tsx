import ReviewCard from '../../components/review-card/review-card';
import {Review} from '../../types/review';

type RewiewListProps = {
  reviews: Review[];
}

function ReviewList ({reviews}:RewiewListProps): JSX.Element {

  return (
    <>
      {reviews.map((review) => <ReviewCard review={review} key = {review.id}/>)}
    </>
  );
}

export default ReviewList;
