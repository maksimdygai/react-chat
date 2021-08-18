import { io } from "socket.io-client";
import { Message } from "../../domain/Message";
import {
  messageReceivedAC,
  messageSentAC,
  SEND_MESSAGE_REQUEST,
} from "../message/message.actions";
import { CONNECT_SOCKET, connectionChangedAC } from "./socket.actions";

const EVENTS = {
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  MESSAGE: "message",
};

export class Socket {
  public user: string;
  public port: string;
  private onChange: (isConnected: boolean) => void;
  private onMessage: (message: Message) => void;
  private socket: any;

  constructor(
    onChange: (isConnected: boolean) => void,
    onMessage: (message: Message) => void
  ) {
    this.onChange = onChange;
    this.onMessage = onMessage;
    this.socket = "";
    this.user = "";
    this.port = "";
  }

  public connect = (user: string, port: string) => {
    this.user = user;
    this.port = port;

    const host = `http://192.168.0.106:${port}`;

    this.socket = io(host);
    this.socket.on(EVENTS.CONNECT, this.onConnected);
  };

  public onConnected = () => {
    this.socket.on(EVENTS.MESSAGE, this.onMessage);
    this.onChange(true);
  };

  public sendMessage = (message: Message) => {
    if (typeof this.socket.emit === "function") {
      this.socket.emit(EVENTS.MESSAGE, message);
    }
    // } else {
    //   console.error("Cannot emit socket messages. Socket.io not connected.");
    // }
  };

  public disconnect = () => this.socket.close();
}

export const socketMiddleware = (store: any) => {
  const onConnectionChange = (isConnected: boolean) => {
    store.dispatch(connectionChangedAC(isConnected));
  };

  const onIncomingMessage = (message: Message) =>
    store.dispatch(messageReceivedAC(message));

  const socket = new Socket(onConnectionChange, onIncomingMessage);

  return (next: any) => (action: any) => {
    const messages = store.getState().messages;
    const socketState = store.getState().socket;

    switch (action.type) {
      case CONNECT_SOCKET:
        socket.connect(messages.user, process.env.PORT || socketState.port);

        break;

      case SEND_MESSAGE_REQUEST:
        socket.sendMessage(action.message);
        store.dispatch(messageSentAC());

        break;

      default:
        break;
    }

    return next(action);
  };
};
