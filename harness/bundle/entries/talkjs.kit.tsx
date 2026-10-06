// TalkJS Components SDK: @talkjs/react-components Chatbox + default.css (renders in the page, not an iframe), React externalised.
import { Chatbox } from '@talkjs/react-components';
import '@talkjs/react-components/default.css';

export function Kit({ appId, userId, token, conversationId }: { appId: string; userId: string; token: string; conversationId: string }) {
  return <Chatbox appId={appId} userId={userId} token={token} conversationId={conversationId} />;
}
