import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import FavouriteOfferCard from '../../components/favourite-offers-card/favourite-offers-card';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';

function FavoritesScreen () : JSX.Element {
  const offersFromStore = useAppSelector((state) => state.offers);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const filterOffers = offersFromStore.filter((offer) => offer.isFavorite === true);
  const filterOffer = filterOffers.map((offer) => <FavouriteOfferCard offer={offer} key = {offer.id}/>);

  const dispatch = useAppDispatch();

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
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={'/favorites'}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {authorizationStatus === AuthorizationStatus.Auth &&
                    <>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{filterOffer.length}</span>
                    </>}
                  </Link>
                </li>
                <li className="header__nav-item">
                  {authorizationStatus === AuthorizationStatus.Auth ?
                    <Link className="header__nav-link" to={'/'} onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                    }}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link> :
                    <Link className="header__nav-link" to={'/login'}>
                      <span className="header__signout">Sign in</span>
                    </Link>}
                </li>
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
