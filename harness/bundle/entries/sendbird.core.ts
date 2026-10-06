// Sendbird: @sendbird/chat with GroupChannelModule only (no OpenChannel/Feed modules).
import SendbirdChat from '@sendbird/chat';
import { GroupChannelModule, GroupChannelHandler } from '@sendbird/chat/groupChannel';

export async function run(appId: string, userId: string, token: string, channelUrl: string) {
  const sb = SendbirdChat.init({ appId, modules: [new GroupChannelModule()] });
  await sb.connect(userId, token);
  const channel = await sb.groupChannel.getChannel(channelUrl);
  sb.groupChannel.addGroupChannelHandler('h', new GroupChannelHandler({ onMessageReceived: (_c, m) => console.log(m.messageId) }));
  channel.sendUserMessage({ message: 'hola' });
}
