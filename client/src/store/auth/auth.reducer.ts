import { Action } from "../stateModel";
import {
  AUTH_CURRENT_USER,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SIGN_UP,
} from "./auth.event";
import { AuthModel } from "./auth.model";

const authReducer = (state: AuthModel, action: Action): AuthModel => {
  switch (action.type) {
    case AUTH_SIGN_UP: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case AUTH_LOGIN: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        currentUser: null,
      };
    }
    case AUTH_CURRENT_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
