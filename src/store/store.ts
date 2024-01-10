import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { StateSchema } from "./StateSchema";
import { loginReducer } from "../features/AuthByUserName/model/slice/userAuthSlice";
import postsReducer from "../features/AuthByUserName/model/slice/getPostsSlice";
export const store = configureStore<StateSchema>({
  reducer: {
    loginForm: loginReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
