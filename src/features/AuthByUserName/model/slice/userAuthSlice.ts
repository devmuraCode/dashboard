import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataStoreStateType } from "../../../../store/StateSchema";
import { ILoginData } from "../type/userSchema";
import { loginUser } from "../servic/loginUser";

const initialState: IDataStoreStateType<ILoginData> = {
  data: undefined,
  loading: false,
  error: undefined,
  fulfilled: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.fulfilled = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
