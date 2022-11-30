import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offer} from '../types/offer';
import {saveToken, dropToken} from '../services/token';
import {APIRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { Review } from '../types/review.js';
import { ReviewData } from '../types/review-data.js';
import { newReviewData } from '../types/new-review-data.js';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, { //загрузка списка офферов
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers); //получаем данные
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offer[], {hotelId: string}, { //загрузка списка офферов поблизости
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

export const fetchReviews = createAsyncThunk<Review[], {hotelId: string}, { //загрузка списка отзывов к офферу
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

export const addReviewAction = createAsyncThunk<newReviewData[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/review',
  async ({comment, rating, hotelId}, {dispatch, extra: api}) => {
    const {data} = await api.post<newReviewData[]>(APIRoute.Reviews.replace('{hotelId}', String(hotelId)), {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, { //проверка наличия авторизации
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
