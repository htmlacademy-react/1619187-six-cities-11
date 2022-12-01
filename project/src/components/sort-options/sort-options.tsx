import { memo, useState } from 'react';
import {SortType} from '../../const';

type SortOptionsProps = {
  sortType: typeof SortType;
    currentSort: string;
    changeSetSort: (type: string)=> void;
};

function SortOptions ({sortType, currentSort, changeSetSort}: SortOptionsProps) : JSX.Element {
  const [activeState, setActiveState] = useState(false);

  const sortClickHandler = (type: string) => () =>{
    changeSetSort(type);
  };

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
          <li className={`places__option ${type === currentSort ? 'places__option--active' : ''}`} tabIndex={0} key={type} onClick={sortClickHandler(type)}>{type}</li>
        )}
      </ul>
    </form>
  );
}

export default memo(SortOptions);
