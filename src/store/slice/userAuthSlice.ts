import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../../app/types/user';

const initialState:UserSchema  = {
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
