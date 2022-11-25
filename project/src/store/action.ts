import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import {AuthorizationStatus} from '../const';
import { Review } from '../types/review';

export const changeCity = createAction<string>('offers/changeCity');
export const setOffers = createAction<Offer[]>('data/setOffers');
export const setNearOffers = createAction<Offer[]>('data/setNearOffers');
export const setReviews = createAction<Review[]>('data/setReviews');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setNearOffersDataLoadingStatus = createAction<boolean>('data/setNearOffersDataLoadingStatus');
export const setReviewsDataLoadingStatus = createAction<boolean>('data/setReviewsDataLoadingStatus');
