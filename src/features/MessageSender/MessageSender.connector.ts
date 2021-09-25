import { Dispatch } from "react";
import { connect } from "react-redux";
import { Message } from "../../domain/Message";
import { sendMessageAC } from "../../store/message/message.actions";
import { MessageSenderRaw } from "./MessageSender.component";

export type MessageSenderState = {
  userName: string;
};

export type MessageSenderDispatchProps = {
  sendMessage: (message: Message) => void;
};

const mapStateToProps = (state: MessageSenderState) => ({
  userName: state.userName,
});

const mapDispatchToProps = (
  dispatch: Dispatch<any>
): MessageSenderDispatchProps => ({
  sendMessage: (message: Message) => dispatch(sendMessageAC(message)),
});

export const MessageSender = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageSenderRaw);
