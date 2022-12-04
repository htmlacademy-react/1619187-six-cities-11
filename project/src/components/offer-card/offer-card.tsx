import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import { changeFavoriteOfferwAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type OfferCardProps = {
  changeSetActive: (id: number)=> void;
  offer: Offer;
  classNameForCard: string;
  classNameForImg: string;
  offerId: number;
}

function OfferCard ({offer, classNameForCard, classNameForImg, offerId, changeSetActive}: OfferCardProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const buttonActiveHandler = () => {
    if (offerId) {
      if (!offer.isFavorite) {
        dispatch(changeFavoriteOfferwAction({hotelId: offerId, status: 1 , isFavorite: !offer.isFavorite }));
      } else {
        dispatch(changeFavoriteOfferwAction({hotelId: offerId, status: 0 , isFavorite: !offer.isFavorite}));
      }
    }
  };

  //что бы записать значение из полей формы в состояние нужен обработчик
  const offerMouseEnterHandler = () => {
    changeSetActive(offer.id);
  };

  const offerMouseleaveHandler = () => {
    changeSetActive(0);
  };

  return (
    <article className={`${classNameForCard} place-card`}
      onMouseEnter={offerMouseEnterHandler}
      onMouseLeave={offerMouseleaveHandler}
    >
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div> }
      <div className={`${classNameForImg} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : '' }`} type="button" onClick={buttonActiveHandler}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${100 / 5 * Math.round(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
