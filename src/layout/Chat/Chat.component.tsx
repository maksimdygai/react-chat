import { ChatArea } from "../../features/ChatArea/ChartArea.component";
import { MessageSender } from "../../features/MessageSender/MessageSender.component";
import { Container } from "./Chat.styled";

const messages = [
  { from: "loh", type: "alert", time: "1355", content: "hello google.com" },
  {
    from: "chmo",
    type: "concern",
    time: "1401",
    content:
      "bye https://www.dailymail.co.uk/news/article-9869959/John-Legend-Chrissy-Teigen-Dwyane-Wade-arrive-Marthas-Vineyard-Obamas-birthday-bash.html",
  },
  { from: "nedrug", type: "greeting", time: "1556", content: "brick" },
];

export const Chat = () => (
  <Container>
    <ChatArea messages={messages} />
    <MessageSender />
  </Container>
);
