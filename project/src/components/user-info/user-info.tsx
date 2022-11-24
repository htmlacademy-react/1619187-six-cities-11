import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserInfo(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={'/favorites'}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
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
    </>
  );
}

export default UserInfo;
