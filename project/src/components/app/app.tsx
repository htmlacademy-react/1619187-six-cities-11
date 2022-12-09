import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import MainScreen from '../../pages/main-screen/main-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import FavouritePrivateRoute from '../favourite-private-route/favourite-private-route';
import LoginPrivateRoute from '../login-private-route/login-private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-process/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);


  if (!isAuthChecked) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <LoginPrivateRoute authorizationStatus={authorizationStatus}>
                <LoginScreen />
              </LoginPrivateRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <FavouritePrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesScreen/>
              </FavouritePrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Room}/:id`}
            element={<PropertyScreen/>}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>

      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
