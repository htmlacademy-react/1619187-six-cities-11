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
  currentOffer: Offer | null;
  reviews: Review[];
  favoriteOffers: Offer[];
  isOffersDataLoading: boolean;
  isNearOffersDataLoading: boolean;
  isCurrentOffersDataLoading: boolean;
  isReviewsDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
  errorMessage: string | undefined;
};

export type UserActionState = {
  city: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
