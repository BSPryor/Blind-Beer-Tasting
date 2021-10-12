import axios from "axios";
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
  user: { _id: "", name: "" },
};

export const useReducer = (state: IUserState, action: IUserActions) => {
  let user = action.payload.user;

  switch (action.type) {
    case "signin":
      axios.post("/auth/signin");
    case "signup":
      axios.post("/auth/signup");
    case "signout":
      axios.post("/auth/signout");
    default:
      return state;
  }
};
