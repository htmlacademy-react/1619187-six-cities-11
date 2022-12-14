import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Offer} from '../types/offer';
import {saveToken, dropToken} from '../services/token';
import {APIRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { Review } from '../types/review';
import { ReviewData } from '../types/review-data';
import { NewReviewData } from '../types/new-review-data';
import { FavoriteOfferData } from '../types/favorite-offer-data';
import { changeFavoriteStatus } from './offers-data/offers-data';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<Offer, {hotelId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffers',
  async ({hotelId}, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.CurrentOffers.replace('{hotelId}', hotelId));
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offer[], {hotelId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async ({hotelId}, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.NearOffers.replace('{hotelId}', hotelId));
    return data;
  },
);
export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.FavoriteOffers);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<Review[], {hotelId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({hotelId}, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(APIRoute.Reviews.replace('{hotelId}', hotelId));
    return data;
  },
);

export const addReviewAction = createAsyncThunk<NewReviewData[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/review',
  async ({comment, rating, hotelId}, {dispatch, extra: api}) => {
    const {data} = await api.post<NewReviewData[]>(APIRoute.Reviews.replace('{hotelId}', String(hotelId)), {comment, rating});
    return data;
  },
);

export const changeFavoriteOfferAction = createAsyncThunk<Offer, FavoriteOfferData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/favoriteOffer',
  async ({hotelId, isFavorite }, {dispatch, extra: api}) => {
    const response = await api.post<Offer>(APIRoute.FavoriteOffer.replace('{hotelId}', String(hotelId)).replace('{status}', String(Number(isFavorite))));
    dispatch(changeFavoriteStatus({hotelId, isFavorite}));
    return response.data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
