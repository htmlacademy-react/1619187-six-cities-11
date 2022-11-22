import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, loadOffers, requireAuthorization, setError} from './action';
import { Offer } from '../types/offer';
import {AuthorizationStatus} from '../const';

const initialState: {city: string; offers: Offer[]; authorizationStatus: string; error: string | null} = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
