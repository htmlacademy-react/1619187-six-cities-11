import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers,setNearOffers, requireAuthorization, setOffersDataLoadingStatus, setNearOffersDataLoadingStatus, setReviews, setReviewsDataLoadingStatus} from './action';
import { Offer } from '../types/offer';
import {AuthorizationStatus} from '../const';
import { Review } from '../types/review';

type initialStateProps = {
  city: string;
  offers: Offer[];
  nearOffers: Offer[] | null;
  reviews: Review[] | null;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  isNearOffersDataLoading: boolean;
  isReviewsDataLoading: boolean;
}

const initialState: initialStateProps = {
  city: 'Paris',
  offers: [],
  nearOffers: null,
  reviews: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isNearOffersDataLoading: false,
  isReviewsDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => { //условие для обновления хранилища
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setNearOffersDataLoadingStatus, (state, action) => {
      state.isNearOffersDataLoading = action.payload;
    })
    .addCase(setReviewsDataLoadingStatus, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
