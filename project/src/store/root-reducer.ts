import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {OffersData} from './offers-data/offers-data';
import {UserActions} from './user-actions/user-actions';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: OffersData.reducer,
  [NameSpace.Action]: UserActions.reducer,
  [NameSpace.User]: userProcess.reducer,
});
