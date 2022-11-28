import React, { FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import {TextLength, Rating} from '../../const';

const checkCommentValidityLength = (text: string) => {
  if (text.length < TextLength.minLength || text.length > TextLength.maxLength) {
    return false;
  }

  return true;
};
const checkRating = (rating: number) => {
  if (rating > Rating.minRating && rating <= Rating.maxRating) {
    return true;
  }

  return false;
};

function CommentForm ({hotelId}: {hotelId?: string}) : JSX.Element {

  const [formData, setFormData] = React.useState('');
  const [rating, setRating] = React.useState(0);
  //const {register} = useForm();
  const isButtonDisablet = !checkCommentValidityLength(formData) || !checkRating(rating);

  //что бы записать значение из полей формы в состояние нужен обработчик
  const fieldChangeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(evt.target.value);
  };

  const inputClickHandler = (evt: React.MouseEvent<HTMLInputElement> ) => {
    const target = evt.target as unknown as HTMLInputElement;

    setRating(Number(target.value));
  };
  const dispatch = useAppDispatch();
  const SubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    if (hotelId) {
      dispatch(addReviewAction({comment: formData,
        hotelId,
        rating}));
    }
  }; //обработчик для отправки формы комментария

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={SubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">
          Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
          defaultChecked={rating === 5}
          onClick={inputClickHandler}

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
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
          defaultChecked={rating === 4}
          onClick={inputClickHandler}
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
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
          defaultChecked={rating === 3}
          onClick={inputClickHandler}
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
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
          defaultChecked={rating === 2}
          onClick={inputClickHandler}
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
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
          defaultChecked={rating === 1}
          onClick={inputClickHandler}
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
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
        maxLength={300}
        onChange={fieldChangeHandler}
        value={formData}
        //ref={register}
        required
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
          disabled={isButtonDisablet}
        >
            Submit
        </button>
      </div>
    </form>
  );}

export default CommentForm;
