import * as React from "react";
import { MessageToRender } from "../../domain/Message";
import { createRecord } from "../../utils/localStorageService";
import { MessageRaw } from "../Message/Message.component";
import { Container } from "./ChatArea.styled";

type ChatAreaProps = {
  messages: MessageToRender[];
  connectToSockets: () => void;
};

export const ChatAreaRaw = ({ messages, connectToSockets }: ChatAreaProps) => {
  const chatAreaRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    createRecord("clockMode", "12");
    connectToSockets();
  }, []);

  return (
    <Container ref={chatAreaRef}>
      {messages.map((item, idx: number) => {
        return (
          <div key={idx}>
            <MessageRaw message={item} />
          </div>
        );
      })}
    </Container>
  );
};
