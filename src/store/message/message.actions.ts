import { Message } from "../../domain/Message";

export const SEND_MESSAGE_RESPONSE = "SEND_MESSAGE_RESPONSE";
export const MESSAGE_SENT = "MESSAGE_SENT";
export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";
export const USER_CHANGED = "USER_CHANGED";

export const messageReceivedAC = (message: Message) => {
  return {
    type: SEND_MESSAGE_RESPONSE,
    message,
  };
};

export const sendMessageAC = (message: Message) => {
  return {
    type: SEND_MESSAGE_REQUEST,
    message,
  };
};

export const messageSentAC = () => {
  return {
    type: MESSAGE_SENT,
  };
};

export const changeUsernameAC = (username: string) => {
  return {
    type: USER_CHANGED,
    username,
  };
};
