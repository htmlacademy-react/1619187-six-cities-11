import { useAppDispatch } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import {TextLength} from '../../const';
import {useForm, type SubmitHandler} from 'react-hook-form';

type Inputs = {
  review: string;
  rating: string;
};

function CommentForm ({hotelId}: {hotelId?: string}) : JSX.Element {
  const { register, handleSubmit, formState: {isValid }, reset } = useForm<Inputs>({mode: 'all'});
  const dispatch = useAppDispatch();
  const submitHandler: SubmitHandler<Inputs> = async (data) => {
    if (hotelId) {
      await dispatch(addReviewAction({comment: data.review,
        hotelId,
        rating: Number(data.rating)}));

      reset();
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit(submitHandler)}>
      <label className="reviews__label form__label" htmlFor="review">
          Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          value={5}
          id="5-stars"
          type="radio"
          {...register('rating', {required: true})}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          value={4}
          id="4-stars"
          type="radio"
          {...register('rating', {required: true})}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          value={3}
          id="3-stars"
          type="radio"
          {...register('rating', {required: true})}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          value={2}
          id="2-stars"
          type="radio"
          {...register('rating', {required: true})}

        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          id="1-star"
          type="radio"
          value={1}
          {...register('rating', {required: true})}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        {...register('review', { required: true, minLength: TextLength.Min, maxLength: TextLength.Max, deps: ['rating'] })}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with
            at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
            Submit
        </button>
      </div>
    </form>
  );}

export default CommentForm;
