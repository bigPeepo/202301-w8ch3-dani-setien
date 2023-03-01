import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

const initialUserState: User = {
  email: "",
  isLogged: false,
  token: "",
  deliveryAddress: "",
  orders: [],
  shoppingCart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserStatus: User,
      action: PayloadAction<User>
    ): User => ({
      ...action.payload,
      token: action.payload.token,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;

export const userReducer = userSlice.reducer;
