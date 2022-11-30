import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Data} from '../../types/state';
import {fetchOffersAction,fetchNearOffersAction, fetchReviews, addReviewAction } from '../api-actions';

const initialState: Data = {
  offers: [],
  nearOffers: [],
  reviews: [],
  isOffersDataLoading: false,
  isNearOffersDataLoading: false,
  isReviewsDataLoading: false,
};

export const OffersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isNearOffersDataLoading = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isNearOffersDataLoading = false;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
