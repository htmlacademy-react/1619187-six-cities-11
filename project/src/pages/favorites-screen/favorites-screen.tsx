import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import FavouriteOfferCard from '../../components/favourite-offers-card/favourite-offers-card';
import {useAppSelector } from '../../hooks';
import UserInfo from '../../components/user-info/user-info';
import { getFavoriteOffers, getFavoriteOffersDataLoadingStatus} from '../../store/offers-data/selectors';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty-screen';
import LoadingScreen from '../loading-screen/loading-screen';

function FavoritesScreen () : JSX.Element {
  const favoriteOffersFromStore = useAppSelector(getFavoriteOffers);
  const isFavoriteOffersDataLoading = useAppSelector(getFavoriteOffersDataLoadingStatus);


  if (favoriteOffersFromStore.length === 0) {
    return (<FavoritesEmptyScreen/>);
  }

  if (isFavoriteOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  const filterOffer = favoriteOffersFromStore.map((offer) => <FavouriteOfferCard offer={offer} key = {offer.id}/>);

  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo logoLinkStatus={false}/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <UserInfo/>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {filterOffer}
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {filterOffer}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
