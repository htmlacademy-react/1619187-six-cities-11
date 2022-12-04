import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Data} from '../../types/state';
import {fetchOffersAction,fetchNearOffersAction, fetchReviews, addReviewAction, changeFavoriteOfferwAction, fetchFavoriteOffersAction } from '../api-actions';

const initialState: Data = {
  offers: [],
  nearOffers: [],
  reviews: [],
  favoriteOffers: [],
  isFavoriteOffersDataLoading: false,
  isOffersDataLoading: false,
  isNearOffersDataLoading: false,
  isReviewsDataLoading: false,
};

export const OffersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeFavoriteStatus: (state, action: PayloadAction<{hotelId: number; isFavorite: boolean}>) => {
      const currentOffer = state.offers.find((offer) => offer.id === action.payload.hotelId);

      if(currentOffer) {
        currentOffer.isFavorite = action.payload.isFavorite;}
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
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
      })
      .addCase(changeFavoriteOfferwAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  }
});

export const {changeFavoriteStatus} = OffersData.actions;
