import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../../../constants";
import { httpClient } from "../../../../core/httpsClient";
import { loginActions } from "../slice/userAuthSlice";

export const loginUser = createAsyncThunk(
  "type/postData",
  async (data: any, thunkAPI) => {
    try {
      const response = await httpClient.post("/api/token/", data);
      const token = response.data.access;
      const refresh = response.data.refresh;

      localStorage.setItem(ACCESS_TOKEN_KEY, token);
      localStorage.setItem(REFRESH_TOKEN_KEY, refresh);

      thunkAPI.dispatch(loginActions.setAuthData(response.data));

      response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
