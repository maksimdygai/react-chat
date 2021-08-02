import { ChatArea } from '../../features/ChatArea/ChartArea.component';
import { MessageSender } from '../../features/MessageSender/MessageSender.component';
import {Container} from './Chat.styled';

export const Chat = () => (
  <Container>
    <ChatArea messages={['hello', 'bye', 'brick']} />
    <MessageSender />
  </Container>
);
