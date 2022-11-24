import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('offers/changeCity');
export const setOffers = createAction<Offer[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
