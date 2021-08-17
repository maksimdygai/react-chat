import { Message } from "../../domain/Message";
import { readRecord } from "../../utils/localStorageService";
import {
  SEND_MESSAGE_RESPONSE,
  MESSAGE_SENT,
  USER_CHANGED,
} from "./message.actions";

const INITIAL_STATE = {
  username: readRecord("username") || "guest0001",
  messages: [],
};

export const messageReducer = (
  state = INITIAL_STATE,
  action: {
    username?: string;
    type: string;
    message: Message;
  }
) => {
  switch (action.type) {
    case USER_CHANGED:
      return Object.assign({}, state, { username: action.username });

    case SEND_MESSAGE_RESPONSE: {
      const isMessageTypeSent = action.message.from === state.username;

      action.message = Object.assign(action.message, {
        type: isMessageTypeSent ? "sent" : "received",
      });

      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    }

    case MESSAGE_SENT:
    default:
      return state;
  }
};
