import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserLogin } from "../../types/types";

export const initialUserState: User = {
  email: "",
  isLogged: false,
  token: "",
  deliveryAddress: "",
  orders: [],
  shoppingCart: [],
};

const loginUserSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserStatus: User,
      action: PayloadAction<UserLogin>
    ): User => ({
      ...currentUserStatus,
      ...action.payload,
      isLogged: true,
    }),

    logoutUser: (currentUserStatus: User): User => ({
      ...initialUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = loginUserSlice.actions;

export const loginUserReducer = loginUserSlice.reducer;
