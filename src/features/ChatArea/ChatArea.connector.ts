import { Dispatch } from "react";
import { connect } from "react-redux";
import { MessageToRender } from "../../domain/Message";
import { changeUsernameAC } from "../../store/message/message.actions";
import { connectSocketAC } from "../../store/socket/socket.actions";
import { ChatAreaRaw } from "./ChatArea.component";

export type ChatAreaState = {
  messages: {
    messages: MessageToRender[];
  };
};

export type ChatAreaDispatchProps = {
  connectToSockets: () => void;
  setUserName: (userName: string) => void;
};

const mapStateToProps = (state: ChatAreaState) => ({
  messages: state.messages.messages,
});

const mapDispatchToProps = (
  dispatch: Dispatch<any>
): ChatAreaDispatchProps => ({
  connectToSockets: () => dispatch(connectSocketAC()),
  setUserName: (userName: string) => dispatch(changeUsernameAC(userName)),
});

export const ChatArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatAreaRaw);
