import * as React from "react";
import { Message } from "../../domain/Message";
import { MessageRaw } from "../Message/Message.component";
import { Container } from "./ChatArea.styled";

// type ChatAreaState = {
//   messageState: {
//     messages: []
//   }
// }

type ChatAreaProps = {
  messages: Message[];
};

export const ChatArea = (props: ChatAreaProps) => {
  const chatAreaRef = React.createRef<HTMLDivElement>();
  const { messages } = props;

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

// public componentDidUpdate(): void {
//     const chatAreaElement: Element = this.chatAreaRef.current as Element;
//     const shouldScroll: boolean = chatAreaElement.scrollTop + chatAreaElement.clientHeight !== chatAreaElement.scrollHeight;

//     if (shouldScroll) {
//       scrollToBottom(chatAreaElement);
//     }
//   }
