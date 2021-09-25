import { Send } from "@material-ui/icons";
import { ChangeEvent, useState } from "react";
import { FC } from "react";
import { createRef } from "react";
import { readRecord } from "../../utils/localStorageService";
import { getTime } from "../../utils/time";
import {
  MessageSenderDispatchProps as MessageSenderProps,
  MessageSenderState,
} from "./MessageSender.connector";
import { Container } from "./MessageSender.styled";

export const MessageSenderRaw: FC<MessageSenderProps & MessageSenderState> = ({
  userName,
  sendMessage,
}) => {
  const [chatMessage, setChatMessage] = useState("");
  const messagesInputRef = createRef<HTMLInputElement>();

  const sendChatMessage = () => {
    const clockMode = readRecord("clockMode");
    const clockModeIsSet = clockMode === '12' || clockMode === '24';

    if (chatMessage !== "" && clockModeIsSet) {
      sendMessage({
        from: userName,
        content: chatMessage,
        time: getTime(clockMode),
      });
    }
  };

  const cleanMessageInput = () => {
    setChatMessage("");

    if (messagesInputRef.current) {
      messagesInputRef.current.focus();
    }
  };

  const handleClick = () => {
    sendChatMessage();
    cleanMessageInput();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChatMessage(e.target.value);

  return (
    <Container>
      <input
        id="send-message-input"
        type="text"
        ref={messagesInputRef}
        value={chatMessage}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>
        <Send />
      </button>
    </Container>
  );
};
