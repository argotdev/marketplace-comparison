// CometChat: @cometchat/chat-sdk-javascript init + login + send + listener.
import { CometChat } from '@cometchat/chat-sdk-javascript';

export async function run(appId: string, region: string, authToken: string, guid: string) {
  await CometChat.init(appId, new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).autoEstablishSocketConnection(true).build());
  await CometChat.login(authToken);
  CometChat.addMessageListener('l', new CometChat.MessageListener({ onTextMessageReceived: (m: CometChat.TextMessage) => console.log(m.getId()) }));
  await CometChat.sendMessage(new CometChat.TextMessage(guid, 'hola', CometChat.RECEIVER_TYPE.GROUP));
}
