import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers} from './action';
import { Offer } from '../types/offer';

const initialState: {city: string; offers: Offer[]} = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => { //условие для обновления хранилища
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
