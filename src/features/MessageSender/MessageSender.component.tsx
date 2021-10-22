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
  sendMessage: sendMessageAction,
}) => {
  const [message, setMessage] = useState("");
  const messagesInputRef = createRef<HTMLInputElement>();

  const sendMessage = () => {
    const clockMode = readRecord("clockMode");

    if (message !== "" && clockMode) {
      sendMessageAction({
        from: userName,
        content: message,
        time: getTime(clockMode),
      });
    }
  };

  const cleanMessageInput = () => {
    setMessage("");

    if (messagesInputRef.current) {
      messagesInputRef.current.focus();
    }
  };

  const handleClick = () => {
    sendMessage();
    cleanMessageInput();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  return (
    <Container>
      <input
        id="send-message-input"
        type="text"
        ref={messagesInputRef}
        value={message}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>
        <Send />
      </button>
    </Container>
  );
};
