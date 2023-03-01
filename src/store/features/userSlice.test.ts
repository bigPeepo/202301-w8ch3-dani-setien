import { UserLogin } from "../../types/types";
import {
  initialUserState,
  loginUserActionCreator,
  loginUserReducer,
} from "./userSlice";

describe("Given a loginUser function", () => {
  describe("When it receives a username 'supabiatch@google.com' and a token 'token'", () => {
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

      const newUser = loginUserReducer(initialUserState, loginUserAction);

      expect(newUser).toStrictEqual(expectedUserStatus);
    });
  });
});
