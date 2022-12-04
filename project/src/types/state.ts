import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import { Offer } from './offer.js';
import { Review } from './review.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
export type Data = {
  offers: Offer[];
  nearOffers: Offer[];
  reviews: Review[];
  favoriteOffers: Offer[];
  isOffersDataLoading: boolean;
  isNearOffersDataLoading: boolean;
  isReviewsDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
};

export type UserActionState = {
  city: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
