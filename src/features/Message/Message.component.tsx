import MicrolinkCard from "@microlink/react";
import Linkify from "linkifyjs/react";
import * as getUrls from "get-urls";
import { Message } from "../../domain/Message";
import { NicknameRaw } from "./Nickname/Nickname.component";
import { TimestampRaw } from "./Timestamp/Timestamp.component";
import { Message as StyledMessage } from "./Message.styled";

export type MessageProps = {
  message: Message;
};

const parseURLs = (text: string) => {
  const urls: Set<string> = getUrls(text);

  if (!urls.size) {
    return;
  }

  return [...urls].map((url: string, idx: number) => (
    <MicrolinkCard url={url} key={idx} />
  ));
};

export const MessageRaw = (props: MessageProps) => {
  const { message } = props;

  return (
    <>
      <div id="nickname-container">
        {message.type === "received" && <NicknameRaw value={message.from} />}
        <TimestampRaw
          value={message.time}
          floatToRight={message.type === "sent"}
        />
      </div>
      <StyledMessage type={message.type}>
        <Linkify>
          {message.content} {parseURLs(message.content)}
        </Linkify>
      </StyledMessage>
    </>
  );
};
