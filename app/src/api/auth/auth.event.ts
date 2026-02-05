import EventEmitter from "events";

const authEvent = new EventEmitter();

export enum AUTH_EVENT_ACTION_TYPE {
  INIT_APP = "INIT_APP",
  LOGIN = "LOG_IN",
  FORGOTTEN_PASSWORD = "FORGOTTEN_PASSWORD",
}

export const setAuthEventListener = () => {
  authEvent.addListener(AUTH_EVENT_ACTION_TYPE.INIT_APP, ({ user }) => {
    // sendVerificationEmail(user);
  });
  authEvent.addListener(AUTH_EVENT_ACTION_TYPE.FORGOTTEN_PASSWORD, ({ user, token }) => {
    // sendForgottenPasswordEmail(user, token);
  });
};

export default authEvent;
