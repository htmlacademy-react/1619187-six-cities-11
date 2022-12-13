import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Data} from '../../types/state';
import {fetchOffersAction,fetchNearOffersAction, fetchReviews, addReviewAction, changeFavoriteOfferAction, fetchFavoriteOffersAction, fetchCurrentOfferAction } from '../api-actions';

const initialState: Data = {
  offers: [],
  nearOffers: [],
  currentOffer: null,
  reviews: [],
  favoriteOffers: [],
  isFavoriteOffersDataLoading: false,
  isOffersDataLoading: false,
  isCurrentOffersDataLoading: false,
  isNearOffersDataLoading: false,
  isReviewsDataLoading: false,
  errorMessage: undefined,
};

export const OffersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeFavoriteStatus: (state, action: PayloadAction<{hotelId: number; isFavorite: boolean}>) => {
      const currentOffer = state.offers.find((offer) => offer.id === action.payload.hotelId);
      const currentOfferFromStore = state.currentOffer;
      if(currentOffer) {
        currentOffer.isFavorite = action.payload.isFavorite;
      }
      if (currentOffer?.id === currentOfferFromStore?.id) {
        if (currentOfferFromStore) {
          currentOfferFromStore.isFavorite = action.payload.isFavorite;
        }

      }
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
      .addCase(fetchOffersAction.rejected, (state, action) => {
        state.offers = [];
        state.isOffersDataLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isCurrentOffersDataLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isCurrentOffersDataLoading = false;
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
      .addCase(changeFavoriteOfferAction.fulfilled, (state, action) => {
        const currentOfferIndex = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
        if(currentOfferIndex > -1){
          state.favoriteOffers[currentOfferIndex] = action.payload;
          state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.isFavorite);
        } else {
          state.favoriteOffers.push(action.payload);
        }
        const currentNearOfferIndex = state.nearOffers.findIndex((nearOffer) => nearOffer.id === action.payload.id);
        state.nearOffers[currentNearOfferIndex] = action.payload;

      });
  }});

export const {changeFavoriteStatus} = OffersData.actions;
