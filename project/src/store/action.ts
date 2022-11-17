import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction<string>('offers/changeCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
