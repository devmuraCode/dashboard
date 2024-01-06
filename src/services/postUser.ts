import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../types/user";
import { httpClient } from "../core/httpsClient";

export const postData = createAsyncThunk("type/postData", async (data: IUser) => {
  try {
    const response = await httpClient.post("/api/token/", data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});



