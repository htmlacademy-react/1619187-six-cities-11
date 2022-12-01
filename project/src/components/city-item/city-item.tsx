import { memo } from 'react';
import { Link } from 'react-router-dom';
import {City} from '../../types/city';

type CityItemProps = {
  city: City;
  currentCity: string;
  clickHandler: (city: string)=> void;
};

function CitiesItem ({city, currentCity, clickHandler}: CityItemProps) : JSX.Element {

  const clickCityHandler = () => {
    clickHandler(city.title);
  };

  return (
    <li className="locations__item" key={city.title}>
      <Link className={`locations__item-link tabs__item ${city.title === currentCity ? 'tabs__item--active' : ''}`} to={`#${city.title}`} onClick={clickCityHandler}>
        <span>{city.title}</span>
      </Link>
    </li>
  );
}

export default memo(CitiesItem);
