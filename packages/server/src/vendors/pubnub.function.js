// PubNub Functions "Before Publish or Fire" handler for channel pattern `order-*`.
// Paste into Admin Portal → Functions → module → Before Publish → Start. Masks phone numbers, email addresses and
// off-platform payment words in Chat SDK text messages (payload: { type: "text", text, files }) and marks meta.moderated.
// Same patterns as packages/shared/src/moderation.ts.
export default (request) => {
  const PATTERNS = [
    /(?:\+\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]){1,3}\d{3,4}\b/g,
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,
    /\b(venmo|paypal|zelle|cash\s?app|cashapp|revolut|wise|bank transfer|western union|crypto|bitcoin|whatsapp|telegram|signal)\b/gi,
  ];
  try {
    const msg = request.message;
    if (msg && msg.type === 'text' && typeof msg.text === 'string') {
      let masked = msg.text;
      let hit = false;
      for (const re of PATTERNS) {
        if (re.test(masked)) {
          hit = true;
          re.lastIndex = 0;
          masked = masked.replace(re, '***');
        }
        re.lastIndex = 0;
      }
      if (hit) {
        msg.text = masked;
        request.meta = Object.assign({}, request.meta || {}, { moderated: true });
      }
    }
    return request.ok();
  } catch (e) {
    console.log('moderation function error', e);
    return request.ok();
  }
};
