import { connect } from "react-redux";
import { MessageToRender } from "../../domain/Message";
import { ChatAreaRaw } from "./ChatArea.component";

export type ChatAreaState = {
  messages: {
    messages: MessageToRender[];
  };
};

const mapStateToProps = (state: ChatAreaState) => ({
  messages: state.messages.messages,
});

export const ChatArea = connect(mapStateToProps)(ChatAreaRaw);
