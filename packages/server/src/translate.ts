import { env } from './env.ts';
import type { Lang } from '@mkt/shared';

export interface TranslateResult {
  available: boolean;
  provider?: string;
  translations: Partial<Record<Lang, string>>;
  detected?: string;
}

/**
 * Server-side translation used by builds whose platform has no translation feature.
 * Provider is chosen by TRANSLATION_PROVIDER in .env (deepl | google). With no provider
 * configured this returns available:false and the caller records the requirement as `not run`.
 */
export function translationProvider(): string | null {
  if (env.TRANSLATION_PROVIDER === 'deepl' && env.DEEPL_API_KEY) return 'deepl';
  if (env.TRANSLATION_PROVIDER === 'google' && env.GOOGLE_TRANSLATE_API_KEY) return 'google';
  return null;
}

export async function translate(text: string, from: Lang, targets: Lang[]): Promise<TranslateResult> {
  const provider = translationProvider();
  if (!provider) return { available: false, translations: {} };
  const translations: Partial<Record<Lang, string>> = { [from]: text };
  for (const target of targets) {
    if (target === from) continue;
    translations[target] = provider === 'deepl' ? await deepl(text, from, target) : await google(text, from, target);
  }
  return { available: true, provider, translations };
}

async function deepl(text: string, from: Lang, to: Lang): Promise<string> {
  const key = env.DEEPL_API_KEY;
  const host = key.endsWith(':fx') ? 'https://api-free.deepl.com' : 'https://api.deepl.com';
  const res = await fetch(`${host}/v2/translate`, {
    method: 'POST',
    headers: { Authorization: `DeepL-Auth-Key ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: [text], source_lang: from.toUpperCase(), target_lang: to === 'en' ? 'EN-US' : to.toUpperCase() }),
  });
  if (!res.ok) throw new Error(`deepl ${res.status}: ${await res.text()}`);
  const json = (await res.json()) as { translations: { text: string }[] };
  return json.translations[0].text;
}

async function google(text: string, from: Lang, to: Lang): Promise<string> {
  const res = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${env.GOOGLE_TRANSLATE_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: text, source: from, target: to, format: 'text' }),
  });
  if (!res.ok) throw new Error(`google translate ${res.status}: ${await res.text()}`);
  const json = (await res.json()) as { data: { translations: { translatedText: string }[] } };
  return json.data.translations[0].translatedText;
}
