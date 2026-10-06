/**
 * Stream Feeds v3: an activity feed of listing updates (price drop, status change) that Sendbird has
 * no equivalent for. The server posts activities to feed `listing:<listingId>`; this component reads it.
 * Docs: https://getstream.io/activity-feeds/docs/react/
 */
import { useEffect, useState } from 'react';
import { FeedsClient, type ActivityResponse } from '@stream-io/feeds-client';
import { LISTING, serverApi, USERS, type UserId } from '@mkt/shared';

export default function ListingFeed({ userId }: { userId: string; orderId: string }) {
  const [activities, setActivities] = useState<ActivityResponse[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let client: FeedsClient | null = null;
    let off: (() => void) | undefined;
    (async () => {
      try {
        const t = await serverApi.token('stream', userId as UserId);
        client = new FeedsClient(t.extra?.apiKey ?? '');
        await client.connectUser({ id: userId, name: USERS[userId as UserId]?.name }, t.extra?.feedsToken ?? t.token);
        const feed = client.feed('listing', LISTING.id);
        await feed.getOrCreate({ watch: true, limit: 20 });
        const render = () => setActivities(feed.state.getLatestValue().activities ?? []);
        render();
        off = feed.state.subscribe(render);
      } catch (e) {
        setError((e as Error).message);
      }
    })();
    return () => {
      off?.();
      client?.disconnectUser();
    };
  }, [userId]);

  if (error) return <div className="error">{error}</div>;
  return (
    <div className="feed" data-testid="listing-feed">
      <h3>Listing updates</h3>
      {activities.length === 0 && <p style={{ color: '#777' }}>No updates yet.</p>}
      <ul>
        {activities.map((a) => (
          <li key={a.id} data-testid="feed-activity" data-type={a.type}>
            <b>{a.type}</b> {a.text} <span style={{ color: '#999' }}>{new Date(a.created_at).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
