// Ably Chat React UI Kit: providers + ChatWindow + style.css (experimental kit), React externalised.
import * as Ably from 'ably';
import { ChatClient } from '@ably/chat';
import { ChatClientProvider, ChatRoomProvider } from '@ably/chat/react';
import { AvatarProvider, ChatSettingsProvider, ChatWindow, ThemeProvider } from '@ably/chat-react-ui-kit';
import '@ably/chat-react-ui-kit/dist/style.css';

export function Kit({ key, roomName }: { key: string; roomName: string }) {
  const client = new ChatClient(new Ably.Realtime({ key, clientId: 'demo' }));
  return (
    <ChatClientProvider client={client}>
      <ThemeProvider>
        <AvatarProvider>
          <ChatSettingsProvider>
            <ChatRoomProvider name={roomName}>
              <ChatWindow roomName={roomName} />
            </ChatRoomProvider>
          </ChatSettingsProvider>
        </AvatarProvider>
      </ThemeProvider>
    </ChatClientProvider>
  );
}
