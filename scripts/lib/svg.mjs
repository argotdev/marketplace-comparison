// Tiny SVG helpers + the reference palette (docs: dataviz skill, references/palette.md).
export const PALETTE = {
  surface: '#fcfcfb',
  inkPrimary: '#0b0b0b',
  inkSecondary: '#52514e',
  inkMuted: '#898781',
  grid: '#e1e0d9',
  axis: '#c3c2b7',
  // Categorical slots in fixed order (never cycled past 8).
  series: ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#4a3aa7', '#e34948'],
};
export const FONT = 'system-ui, -apple-system, "Segoe UI", sans-serif';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function text(x, y, s, { size = 12, fill = PALETTE.inkSecondary, anchor = 'start', weight = 400, baseline = 'middle', tabular = false } = {}) {
  const style = `font-family:${FONT};font-size:${size}px;font-weight:${weight};${tabular ? 'font-variant-numeric:tabular-nums;' : ''}`;
  return `<text x="${x}" y="${y}" fill="${fill}" text-anchor="${anchor}" dominant-baseline="${baseline}" style="${style}">${esc(s)}</text>`;
}

/** Horizontal bar: square at the baseline (x0), 4px rounded data-end. */
export function hbar(x0, y, w, h, fill) {
  const r = Math.min(4, w / 2, h / 2);
  if (w <= 0) return '';
  return `<path d="M${x0} ${y} h${w - r} a${r} ${r} 0 0 1 ${r} ${r} v${h - 2 * r} a${r} ${r} 0 0 1 -${r} ${r} h-${w - r} z" fill="${fill}"/>`;
}

/** Clean axis ticks: 0..max rounded up to a nice number, ~5 steps. */
export function niceTicks(max, steps = 5) {
  if (!(max > 0)) return [0];
  const raw = max / steps;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * pow).find((s) => s >= raw);
  const top = Math.ceil(max / step) * step;
  const ticks = [];
  for (let v = 0; v <= top + 1e-9; v += step) ticks.push(Number(v.toFixed(6)));
  return ticks;
}

export function fmt(n) {
  if (n === null || n === undefined || Number.isNaN(n)) return '';
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  if (n >= 100) return n.toFixed(0);
  if (n >= 10) return n.toFixed(1);
  return n.toFixed(2).replace(/\.?0+$/, '');
}

export function svgDoc(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">\n<rect width="${w}" height="${h}" fill="${PALETTE.surface}"/>\n${body}\n</svg>\n`;
}

export function parseCsv(txt) {
  const rows = [];
  let cur = [], field = '', q = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (q) {
      if (c === '"' && txt[i + 1] === '"') (field += '"'), i++;
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') cur.push(field), (field = '');
    else if (c === '\n') cur.push(field), rows.push(cur), (cur = []), (field = '');
    else if (c !== '\r') field += c;
  }
  if (field || cur.length) cur.push(field), rows.push(cur);
  const [header, ...data] = rows.filter((r) => r.length > 1 || r[0]);
  return data.map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])));
}
