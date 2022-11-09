import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import cn from 'classnames';

type LogoStatusProps = {
  logoLinkStatus: boolean;
}

function Logo ({logoLinkStatus}: LogoStatusProps): JSX.Element {
  return (
    <Link className={cn('header__logo-link', {'header__logo-link--active': logoLinkStatus})} to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}

export default Logo;
