// CometChat UI Kit v7: CometChatProvider + MessageList + MessageComposer (CSS is injected by the kit), React externalised.
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { CometChatMessageComposer, CometChatMessageList, CometChatProvider } from '@cometchat/chat-uikit-react';

export function Kit({ group }: { group: CometChat.Group }) {
  return (
    <CometChatProvider>
      <CometChatMessageList group={group} />
      <CometChatMessageComposer group={group} />
    </CometChatProvider>
  );
}
