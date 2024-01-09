import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../types/user";
import { httpClient } from "../core/httpsClient";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants";

export const postData = createAsyncThunk("type/postData", async (data: IUser) => {
  try {
    const response = await httpClient.post("/api/token/", data);
    const token = response.data.access;
    const refresh = response.data.refresh;
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
    response.data;

  } catch (err) {
    console.log(err);
  }
});
