import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {UserAction} from '../../types/state';

const initialState: UserAction = {
  city: 'Paris',
};

export const UserActions = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const {changeCity} = UserActions.actions;
