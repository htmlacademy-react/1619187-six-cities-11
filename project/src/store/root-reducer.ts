import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {OffersData} from './offers-data/offers-data';
import {UserActionsState} from './user-actions-state/user-actions-state';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: OffersData.reducer,
  [NameSpace.Offers]: UserActionsState.reducer,
  [NameSpace.User]: userProcess.reducer,
});
