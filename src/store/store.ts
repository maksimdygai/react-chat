import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { messageReducer } from "./message/message.reducer";
import { socketReducer } from "./socket/socket.reducer";
import { socketMiddleware } from "./socket/socket.middleware";

const rootReducer = combineReducers({
  socket: socketReducer,
  messages: messageReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = {
  ...createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(socketMiddleware))
  ),
};
