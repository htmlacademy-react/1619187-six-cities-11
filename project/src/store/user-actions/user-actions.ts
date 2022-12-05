import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {UserActionState} from '../../types/state';

const initialState: UserActionState = {
  city: 'Paris',
};

export const UserActions = createSlice({
  name: NameSpace.Action,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const {changeCity} = UserActions.actions;
