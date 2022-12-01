import { memo, useCallback } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import { getCity } from '../../store/user-actions/selector';
import { changeCity } from '../../store/user-actions/user-actions';
import {City} from '../../types/city';
import CitiesItem from '../city-item/city-item';

type CitiesListProps = {
  cities: City[];
};

function CitiesList ({cities}: CitiesListProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  const clickHandler = useCallback((cityTitle: string) => {
    dispatch(changeCity(cityTitle));
  }, [dispatch]);

  return (
    <>
      {cities.map((city) => <CitiesItem city = {city} currentCity={currentCity} key={city.title} clickHandler={clickHandler}/>)}
    </>
  );
}
export default memo(CitiesList);
