/** Twilio ships no first-party chat UI kit for Conversations; this page records what exists instead. */
export default function TwilioKit() {
  return (
    <div className="kit-frame" data-kit="twilio-none" style={{ padding: 16, overflow: 'auto' }}>
      <h3>No UI kit</h3>
      <p>Twilio Conversations (classic) has no supported, first-party chat UI kit. What exists:</p>
      <ul>
        <li>
          <code>twilio/twilio-conversations-demo-react</code>: a demo app (React + Paste) that its README calls "not a production ready implementation".
        </li>
        <li>Twilio Paste: presentational chat components (ChatLog, ChatMessage, ChatBubble) with no SDK binding.</li>
        <li>Flex UI: a contact-center product, not an embeddable chat kit.</li>
      </ul>
      <p>The order card for Twilio is therefore only rendered in the adapter view.</p>
    </div>
  );
}
