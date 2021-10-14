import axios from "axios";
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
    _id: "",
    name: "",
    authenticated: localStorage.getItem("token") || "",
  },
};

export const userReducer = (state: IUserState, action: IUserActions) => {
  let user = action.payload.user;

  switch (action.type) {
    case "signin":
      axios.post("/auth/signin", user).then(function (response: {}) {
        console.log(response);
      });
      return state;
    case "signup":
      axios.post("/auth/signup", user).then(function (response: {}) {
        console.log(response);
      });
      return state;
    case "signout":
      axios.post("/auth/signout", user).then(function (response: any) {
        console.log(response);
      });
      return state;
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
