// Rocket.Chat prebuilt UI in an iframe (?layout=embedded); the JS is served by the Rocket.Chat server, so kit-network.csv is the real measure.
export function Kit({ url, room }: { url: string; room: string }) {
  return <iframe title="Rocket.Chat" src={`${url}/group/${room}?layout=embedded`} style={{ width: '100%', height: '100%', border: 0 }} />;
}
