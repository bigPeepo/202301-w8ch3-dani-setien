import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { loginUserReducer } from "../store/features/userSlice";

export const store = configureStore({
  reducer: {
    user: loginUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
