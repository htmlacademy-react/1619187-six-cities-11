import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import UserInfo from '../../components/user-info/user-info';
import CitiesList from '../../components/cities-list/cities-list';
import { CITIES } from '../../const';

function MainEmptyScreen () : JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Нет доступных вариантов для проживания</title>
      </Helmet>
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
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList cities={CITIES}/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
              We could not find any property available at the moment in
              Dusseldorf
                </p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEmptyScreen;
