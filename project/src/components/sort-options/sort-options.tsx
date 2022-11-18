import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../../store/action';

type SortOptionsProps = {
  sortType:
    {POPULAR: string;
    PRICELOWTOHIGHT: string;
    PRICEHIGHTTOLOW: string;
    RAITING: string;
    };
};

function SortOptions ({sortType}: SortOptionsProps) : JSX.Element {
  const currentSort = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();
  const [activeState, setActiveState] = useState(false);

  const placesOptionsClickHandler = () => {
    setActiveState(!activeState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={placesOptionsClickHandler}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${activeState ? 'places__options--opened' : ''}`}>
        {Object.values(sortType).map((type)=>
          <li className={`places__option ${type === currentSort ? 'places__option--active' : ''}`} tabIndex={0} key={type} onClick={() => dispatch(changeSort(type))}>{type}</li>
        )}
      </ul>
    </form>
  );
}

export default SortOptions;
