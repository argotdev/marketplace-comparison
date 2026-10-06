// Sendbird UIKit for React: SendbirdProvider + GroupChannel + CSS, React externalised.
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';
import '@sendbird/uikit-react/dist/index.css';

export function Kit({ appId, userId, token, channelUrl }: { appId: string; userId: string; token: string; channelUrl: string }) {
  return (
    <SendbirdProvider appId={appId} userId={userId} accessToken={token}>
      <GroupChannel channelUrl={channelUrl} />
    </SendbirdProvider>
  );
}
