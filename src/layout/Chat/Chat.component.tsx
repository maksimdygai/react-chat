import { ChatArea } from "../../features/ChatArea/ChatArea.connector";
import { MessageSender } from "../../features/MessageSender/MessageSender.connector";
import { Container } from "./Chat.styled";

export const Chat = () => (
  <Container>
    <ChatArea />
    <MessageSender />
  </Container>
);
