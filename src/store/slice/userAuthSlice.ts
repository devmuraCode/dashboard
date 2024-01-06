import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/user';

const initialState: IUser = {
  username: '',
  password: '',
};

export const userAuthSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setUsername, setPassword } = userAuthSlice.actions;

export default userAuthSlice.reducer;
