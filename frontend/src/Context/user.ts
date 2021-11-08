import React, { createContext } from "react";

import IUser from "../Interfaces/user";

export interface IUserState {
  user: IUser;
}

export interface IUserActions {
  type: "signin" | "signup" | "signout";
  payload: {
    user: IUser;
  };
}

export const initialUserState: IUserState = {
  user: {
    name: "",
    _id: "",
    token: "",
  },
};

export const userReducer = (
  state: IUserState,
  action: IUserActions
): IUserState => {
  let user = action.payload.user;

  switch (action.type) {
    case "signin":
      localStorage.setItem("token", user.token);
      return { user };
    case "signup":
      localStorage.setItem("token", user.token);
      return { user };
    case "signout":
      localStorage.removeItem("token");
      return { user };
    default:
      return state;
  }
};

export interface IUserContextProps {
  userState: IUserState;
  userDispatch: React.Dispatch<IUserActions>;
}

const UserContext = createContext<IUserContextProps>({
  userState: initialUserState,
  userDispatch: () => {},
});

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;
