import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, changeSort} from './action';
import { Offer } from '../types/offer';

const initialState: {city: string; offers: Offer[]; sort: string} = {
  city: 'Paris',
  offers: [],
  sort: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => { //условие для обновления хранилища
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    });
});

export {reducer};
