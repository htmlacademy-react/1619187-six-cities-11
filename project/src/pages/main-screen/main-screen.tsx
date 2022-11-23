//в странички будем импортировать более мелкие компоненты из components, например, хедер, футер, карточки и тд
//сами стр потом импортируем в app

import { useEffect, useMemo, useState } from 'react';
import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import {CITIES, SortType, sortOffersByPrice} from '../../const';
import OfferList from '../../components/offer-list/offer-list';
import {Link} from 'react-router-dom';
import { Offer } from '../../types/offer';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector} from '../../hooks/index';
import SortOptions from '../../components/sort-options/sort-options';
import {logoutAction} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

function MainScreen () : JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer>();
  const [sortedOffers, setSortedOffer] = useState<Offer[]>([]);
  const [currentSort, setCurrentSort] = useState<string>('Popular');

  const offersFromStore = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const filteredOffers = useMemo(() => offersFromStore.filter((offer) => offer.city.name === currentCity), [offersFromStore, currentCity]);
  const filteredCity = CITIES.filter((city) => city.title === currentCity);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();

  const onListItemHover = (listItemId: number) => {
    const currentPoint = filteredOffers.find((offer) =>
      offer.id === listItemId,
    );

    setSelectedOffer(currentPoint);
  };

  const changeSetSort = (type: string) => {
    setCurrentSort(type);
  };

  const sortingOffers = (copyOffers: Offer[]) => {
    switch (currentSort) {
      case SortType.PRICELOWTOHIGHT:
        return copyOffers.sort((x,y) => x.price - y.price);
      case SortType.PRICEHIGHTTOLOW:
        return copyOffers.sort(sortOffersByPrice);
      case SortType.RAITING:
        return copyOffers.sort((x,y) => y.rating - x.rating);
      case SortType.POPULAR:
        return copyOffers;
    }
  };

  useEffect(() => {
    const sorted = sortingOffers([...filteredOffers]);
    setSortedOffer(sorted ?? []);
  }, [currentSort, filteredOffers]);


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo logoLinkStatus/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={'/favorites'}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {authorizationStatus === AuthorizationStatus.Auth &&
                    <>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList cities={CITIES}/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
              <SortOptions sortType={SortType} currentSort={currentSort} changeSetSort={changeSetSort}/>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={sortedOffers} onListItemHover={onListItemHover} classnameForCard={'cities__card'} classnameForImg={'cities__image-wrapper'}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={filteredCity[0]} offers={filteredOffers} selectedOffer={selectedOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>);
}

export default MainScreen;
