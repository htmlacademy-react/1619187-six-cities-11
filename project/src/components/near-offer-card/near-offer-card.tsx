import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';

type NearOfferCardProps = {
  changeSetActive: (id: number)=> void;
  nearOffer: Offer;
}

function NearOfferCard ({nearOffer, changeSetActive}: NearOfferCardProps) : JSX.Element {
  const offerMouseEnterHandler = () => {
    changeSetActive(nearOffer.id);
  };

  const offerMouseleaveHandler = () => {
    changeSetActive(0);
  };
  return (
    <article className="near-places__card place-card"
      onMouseEnter={offerMouseEnterHandler}
      onMouseLeave={offerMouseleaveHandler}
    >
      {nearOffer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div> }
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img
            className="place-card__image"
            src={nearOffer.previewImage}
            width={260}
            height={200}
            alt="Place"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{nearOffer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${nearOffer.isFavorite ? 'place-card__bookmark-button--active' : '' }`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${100 / 5 * Math.round(nearOffer.rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${nearOffer.id}`}>{nearOffer.title}</Link>
        </h2>
        <p className="place-card__type">{nearOffer.type}</p>
      </div>
    </article>
  );
}

export default NearOfferCard;
