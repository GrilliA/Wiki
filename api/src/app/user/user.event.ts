import EventEmitter from "events";

const userEvent = new EventEmitter();

export enum USER_EVENT_ACTION_TYPE {
  NEW_USER = "NEW_USER",
}

export const setUserEventListener = () => {
  userEvent.addListener(USER_EVENT_ACTION_TYPE.NEW_USER, (user) => {
    // sendCredentialsEmail(user);
  });
};

export default userEvent;
