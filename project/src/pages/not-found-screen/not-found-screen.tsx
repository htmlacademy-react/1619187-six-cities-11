import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import {AppRoute} from '../../const';
import {Helmet} from 'react-helmet-async';
import UserInfo from '../../components/user-info/user-info';

function NotFoundScreen () : JSX.Element {

  return (
    <div className="page page--gray">
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo logoLinkStatus = {false}/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <UserInfo/>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="page--not_found" style={{textAlign: 'center', paddingTop: 50}}>
        <h1>404. Page not found</h1>
        <Link to={AppRoute.Main}>Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default NotFoundScreen;
