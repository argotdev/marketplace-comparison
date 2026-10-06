/**
 * Fixed moderation fixture. The same six messages are sent on every platform.
 * The first four must be blocked or masked; the last two must go through.
 */
export const MUST_BLOCK = [
  'Call me at 415-555-0134',
  "Email me at ben@example.com and we'll sort it out",
  "Pay me on Venmo instead, it's cheaper",
  "Let's move this to WhatsApp, +44 7700 900123",
] as const;

export const MUST_PASS = [
  'Is the 54cm frame still available?',
  'Order 4155550134 arrived this morning, thanks',
] as const;

export const MODERATION_FIXTURE = [
  ...MUST_BLOCK.map((text) => ({ text, expect: 'block' as const })),
  ...MUST_PASS.map((text) => ({ text, expect: 'pass' as const })),
];

/**
 * Reference regex set used by the native build and by every "built" moderation fallback.
 * Phone: requires separators or a leading +/country code so a bare 10-digit order number passes.
 */
export const MODERATION_PATTERNS: { name: string; re: RegExp }[] = [
  { name: 'phone_formatted', re: /(?:\+\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]){1,3}\d{3,4}\b/g },
  { name: 'email', re: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi },
  {
    name: 'off_platform_payment',
    re: /\b(venmo|paypal|zelle|cash\s?app|cashapp|revolut|wise|bank transfer|western union|crypto|bitcoin|whatsapp|telegram|signal)\b/gi,
  },
];

export interface ModerationResult {
  allowed: boolean;
  /** Text with offending spans replaced by `***`. Equal to the input when nothing matched. */
  masked: string;
  matches: string[];
}

export function moderate(text: string): ModerationResult {
  const matches: string[] = [];
  let masked = text;
  for (const { name, re } of MODERATION_PATTERNS) {
    re.lastIndex = 0;
    if (re.test(text)) {
      matches.push(name);
      re.lastIndex = 0;
      masked = masked.replace(re, '***');
    }
  }
  return { allowed: matches.length === 0, masked, matches };
}

export const MASK = '***';
