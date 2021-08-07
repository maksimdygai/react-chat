import { ChangeEvent, useState } from "react";
import { createRef } from "react";
import { Container } from "./MessageSender.styled";

export const MessageSender = () => {
  const [chatMessage, setChatMessage] = useState("");
  const messagesInputRef = createRef<HTMLInputElement>();
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
    </Container>
  );
};
