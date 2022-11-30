import { Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import { getCity } from '../../store/user-actions/selector';
import {changeCity} from '../../store/user-actions/user-actions';
import {City} from '../../types/city';

type CitiesListProps = {
  cities: City[];
};

function CitiesList ({cities}: CitiesListProps) : JSX.Element {
  const currentCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();


  return (
    <>
      {cities.map((city) =>
        (
          <li className="locations__item" key={city.title}>
            <Link className={`locations__item-link tabs__item ${city.title === currentCity ? 'tabs__item--active' : ''}`} to={`#${city.title}`} onClick={() => dispatch(changeCity(city.title))}>
              <span>{city.title}</span>
            </Link>
          </li>)
      )}
    </>
  );
}

export default CitiesList;

