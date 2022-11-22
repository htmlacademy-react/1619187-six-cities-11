import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, loadOffers, requireAuthorization} from './action';
import { Offer } from '../types/offer';
import {AuthorizationStatus} from '../const';

const initialState: {city: string; offers: Offer[]; authorizationStatus: string} = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => { //условие для обновления хранилища
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
