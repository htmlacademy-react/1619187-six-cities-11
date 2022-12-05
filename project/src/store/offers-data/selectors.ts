import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import { Review } from '../../types/review';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.Data].nearOffers;
export const getNearOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isNearOffersDataLoading;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getReviewsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isReviewsDataLoading;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getFavoriteOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFavoriteOffersDataLoading;
export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Data].currentOffer;
export const getCurrentOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isCurrentOffersDataLoading;

