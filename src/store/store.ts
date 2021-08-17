import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { messageReducer } from "./message/message.reducer";
import { socketReducer } from "./socket/socket.reducer";
import { socketMiddleware } from "./socket/socket.middleware";

const rootReducer = combineReducers({
  socketState: socketReducer,
  messageState: messageReducer,
});

export const store = {
  ...createStore(rootReducer, compose(applyMiddleware(socketMiddleware))),
};
