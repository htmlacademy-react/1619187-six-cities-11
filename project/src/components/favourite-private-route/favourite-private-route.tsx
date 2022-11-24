import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

//этим компонентом будем оборачивать приватные маршруты (которые доступны после авторизации)
type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element; //компонент, который будет отрисовываться, если мы авторизованы
}

function FavouritePrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} /> //выполняем перенаправление на др страницу
  );
}

export default FavouritePrivateRoute;
