import { Dispatch } from "react";
import { connect } from "react-redux";
import { MessageToRender } from "../../domain/Message";
import { connectSocketAC } from "../../store/socket/socket.actions";
import { ChatAreaRaw } from "./ChatArea.component";

export type ChatAreaState = {
  messages: {
    messages: MessageToRender[];
  };
};

type ChatAreaDispatchProps = {
  connectToSockets: () => void;
};

const mapStateToProps = (state: ChatAreaState) => ({
  messages: state.messages.messages,
});

const mapDispatchToProps = (
  dispatch: Dispatch<any>
): ChatAreaDispatchProps => ({
  connectToSockets: () => dispatch(connectSocketAC()),
});

export const ChatArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatAreaRaw);
