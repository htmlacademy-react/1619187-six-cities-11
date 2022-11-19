import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import CommentForm from '../../components/comment-form/comment-form';
import { Link, useParams } from 'react-router-dom';
import {reviews} from '../../mocks/reviews';
import {nearOffers} from '../../mocks/near-offer';
import ReviewList from '../../components/review-list/review-list';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import {CITIES} from '../../const';
import {Offer} from '../../types/offer';
import { useAppSelector } from '../../hooks';

type PropertyScreenProps = {
  offers: Offer[];
}

function PropertyScreen ({offers}: PropertyScreenProps) : JSX.Element {
  const params = useParams();
  const currentOffer = offers.find((offer) => params.id === String(offer.id)); //оффер который отображается в property-screen
  const currentCity = useAppSelector((state) => state.city);
  const filteredCity = CITIES.filter((city) => city.title === currentCity);
  const filteredNearOffers = nearOffers.filter((nearOffer) => nearOffer.city.name === currentCity);
  const newOffers = currentOffer ? [...filteredNearOffers, currentOffer] : [];

  return (
    <div className="page">
      <Helmet>
        <title>Информация о месте для аренды</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo logoLinkStatus = {false}/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={'/favorites'}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__reviews__listname">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={'/'}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer?.images.map((image)=>
                (
                  <div className="property__image-wrapper" key={image}>
                    <img
                      className="property__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer?.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div> }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer?.title}
                </h1>
                <button className={`property__bookmark-button button ${currentOffer?.isFavorite ? 'property__bookmark-button--active' : '' }`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${100 / 5 * Math.round(Number(currentOffer?.rating))}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer?.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                    Max {currentOffer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{currentOffer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer?.goods.map((good)=> <li className="property__inside-item" key={good}>{good}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={currentOffer?.hostInformation.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{currentOffer?.hostInformation.name}</span>
                  {currentOffer?.hostInformation.isPro &&
                    <span className="property__user-status"> Pro </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ul className="reviews__list">
                  <ReviewList reviews={reviews}/>
                </ul>
                <CommentForm/>
              </section>
            </div>
          </div>
          <section className="property__map map" style={{width: '1144px', marginRight: 'auto', marginLeft: 'auto'}}>
            <Map city={filteredCity[0]} offers={newOffers} selectedOffer={currentOffer}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OfferList offers={filteredNearOffers} classnameForCard={'near-places__card'} classnameForImg={'near-places__image-wrapper'}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;
