import * as React from "react";
import { MessageToRender } from "../../domain/Message";
import { MessageRaw } from "../Message/Message.component";
import { Container } from "./ChatArea.styled";

type ChatAreaProps = {
  messages: MessageToRender[];
};

export const ChatAreaRaw = ({ messages }: ChatAreaProps) => {
  const chatAreaRef = React.createRef<HTMLDivElement>();

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
