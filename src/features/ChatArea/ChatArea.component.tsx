import * as React from "react";
import { MessageToRender } from "../../domain/Message";
import { createRecord } from "../../utils/localStorageService";
import { MessageRaw } from "../Message/Message.component";
import { ChatAreaDispatchProps } from "./ChatArea.connector";
import { Container } from "./ChatArea.styled";

type ChatAreaProps = ChatAreaDispatchProps & {
  messages: MessageToRender[];
};

export const ChatAreaRaw = ({
  messages,
  connectToSockets,
  setUserName,
}: ChatAreaProps) => {
  const chatAreaRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    createRecord("clockMode", "12");
    setUserName("random_hero");
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
