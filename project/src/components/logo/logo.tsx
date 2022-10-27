import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type LogoStatusProps = {
  logoLinkStatus: boolean;
}

function Logo ({logoLinkStatus}: LogoStatusProps): JSX.Element {
  return (
    <Link className={`header__logo-link ${logoLinkStatus ? 'header__logo-link--active' : '' }`} to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}

export default Logo;
