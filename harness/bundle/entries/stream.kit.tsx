// stream-chat-react: Chat + Channel + Window + MessageList + MessageComposer + CSS, React externalised.
import { StreamChat } from 'stream-chat';
import { Chat, Channel, Window, MessageList, MessageComposer } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

export function Kit({ apiKey, channelId }: { apiKey: string; channelId: string }) {
  const client = StreamChat.getInstance(apiKey);
  return (
    <Chat client={client}>
      <Channel channel={client.channel('order', channelId)}>
        <Window>
          <MessageList />
          <MessageComposer />
        </Window>
      </Channel>
    </Chat>
  );
}
