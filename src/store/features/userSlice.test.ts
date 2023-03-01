import { UserLogin } from "../../types/types";
import {
  initialUserState,
  loginUserActionCreator,
  userReducer,
  logoutUserActionCreator,
} from "./userSlice";

describe("Given a loginUser function", () => {
  describe("When it receives an email 'supabiatch@google.com' and a token 'token'", () => {
    test("Then it should return a user with email 'supabiatch@google.com', a token 'token' and a positive isLogged status", () => {
      const user: UserLogin = {
        email: "supabiatch@google.com",
        token: "token",
        isLogged: false,
      };

      const expectedUserStatus = {
        email: "supabiatch@google.com",
        isLogged: true,
        token: "token",
        deliveryAddress: "",
        orders: [],
        shoppingCart: [],
      };
      const loginUserAction = loginUserActionCreator(user);

      const newUser = userReducer(initialUserState, loginUserAction);

      expect(newUser).toStrictEqual(expectedUserStatus);
    });
  });

  describe("When it receives a logout action", () => {
    test("Then it should return an email '', token '', deliveryAddress '', orders [], shoppingCart [], isLogged false", () => {
      const loggedUserStatus = {
        email: "supabiatch@google.com",
        isLogged: true,
        token: "token",
        deliveryAddress: "",
        orders: [],
        shoppingCart: [],
      };

      const loggedOutUserStatus = {
        email: "",
        isLogged: false,
        token: "",
        deliveryAddress: "",
        orders: [],
        shoppingCart: [],
      };

      const logoutUserAction = logoutUserActionCreator();
      const newUserStatus = userReducer(loggedUserStatus, logoutUserAction);

      expect(newUserStatus).toStrictEqual(loggedOutUserStatus);
    });
  });
});
