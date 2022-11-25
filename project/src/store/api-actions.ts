import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offer} from '../types/offer';
import {setOffers, requireAuthorization, setOffersDataLoadingStatus, setNearOffersDataLoadingStatus, setReviewsDataLoadingStatus, setNearOffers, setReviews} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { Review } from '../types/review.js';


export const fetchOffersAction = createAsyncThunk<void, undefined, { //загрузка списка офферов
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers); //получаем данные
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(setOffers(data)); //диспатчим их
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, {hotelId: string}, { //загрузка списка офферов поблизости
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async ({hotelId}, {dispatch, extra: api}) => {
    dispatch(setNearOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.NearOffers.replace('{hotelId}', hotelId));
    dispatch(setNearOffersDataLoadingStatus(false));
    dispatch(setNearOffers(data));
  },
);

export const fetchReviews = createAsyncThunk<void, {hotelId: string}, { //загрузка списка отзывов к офферу
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({hotelId}, {dispatch, extra: api}) => {
    dispatch(setReviewsDataLoadingStatus(true));
    const {data} = await api.get<Review[]>(APIRoute.Reviews.replace('{hotelId}', hotelId));
    dispatch(setReviewsDataLoadingStatus(false));
    dispatch(setReviews(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, { //проверка наличия авторизации
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
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
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
