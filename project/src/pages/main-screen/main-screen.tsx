import { useCallback, useEffect, useMemo, useState } from 'react';
import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import {CITIES, SortType, sortOffersByPrice} from '../../const';
import OfferList from '../../components/offer-list/offer-list';
import { Offer } from '../../types/offer';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector} from '../../hooks/index';
import SortOptions from '../../components/sort-options/sort-options';
import UserInfo from '../../components/user-info/user-info';
import { getFavoriteOffers, getOffers } from '../../store/offers-data/selectors';
import { getCity } from '../../store/user-actions/selector';
import MainEmptyScreen from '../main-empty-screen/main-empty-screen';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { store } from '../../store';

function MainScreen () : JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer>();
  const [sortedOffers, setSortedOffer] = useState<Offer[]>([]);
  const [currentSort, setCurrentSort] = useState<string>('Popular');
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoritesOffers = useAppSelector(getFavoriteOffers);
  const offersFromStore = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCity);
  const filteredOffers = useMemo(() => offersFromStore.filter((offer) => offer.city.name === currentCity), [offersFromStore, currentCity]);
  const filteredCity = CITIES.filter((city) => city.title === currentCity);

  useEffect(() => {
    store.dispatch(fetchFavoriteOffersAction());
  }, [authorizationStatus, favoritesOffers.length]);


  const onListItemHover = useCallback((listItemId: number) => {
    const currentPoint = filteredOffers.find((offer) =>
      offer.id === listItemId,
    );

    setSelectedOffer(currentPoint);
  }, [filteredOffers]);

  const changeSetSort = useCallback((type: string) => {
    setCurrentSort(type);
  }, []);

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

  if (offersFromStore.length === 0) {
    return (<MainEmptyScreen/>);
  }
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
                <UserInfo/>
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
