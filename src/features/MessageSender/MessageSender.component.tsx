import { Send } from "@material-ui/icons";
import { ChangeEvent, useState } from "react";
import { FC } from "react";
import { createRef } from "react";
import { getTime } from "../../utils/time";
import { MessageSenderDispatchProps as MessageSenderProps } from "./MessageSender.connector";
import { Container } from "./MessageSender.styled";

export const MessageSenderRaw: FC<MessageSenderProps> = ({ sendMessage }) => {
  const [chatMessage, setChatMessage] = useState("");
  const messagesInputRef = createRef<HTMLInputElement>();
  const username = "amaloh";

  const sendChatMessage = () => {
    if (chatMessage !== "") {
      sendMessage({ from: username, content: chatMessage, time: getTime() });
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
