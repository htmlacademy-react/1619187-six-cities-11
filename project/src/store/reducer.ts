import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, requireAuthorization, setOffersDataLoadingStatus} from './action';
import { Offer } from '../types/offer';
import {AuthorizationStatus} from '../const';

const initialState: {city: string; offers: Offer[]; authorizationStatus: AuthorizationStatus; isOffersDataLoading: boolean} = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => { //условие для обновления хранилища
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
