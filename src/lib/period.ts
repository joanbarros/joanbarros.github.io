const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-08" -> "Aug 2025" (long) or "2025" (short). */
function formatDate(value: string, style: "short" | "long"): string {
  const [year, month] = value.split("-");
  if (style === "short" || !month) return year;
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** Formats a start/end pair, e.g. "2014 – 2017" or "Aug 2025 – Present". */
export function formatPeriod(
  start?: string,
  end?: string,
  style: "short" | "long" = "short",
): string | undefined {
  if (start === undefined) return undefined;
  const from = formatDate(start, style);
  const to = end ? formatDate(end, style) : "Present";
  return from === to ? from : `${from} – ${to}`;
}

/** Sortable month index; a year-only value counts as December of that year. */
function toIndex(value: string): number {
  const [year, month = "12"] = value.split("-");
  return Number(year) * 12 + Number(month);
}

interface Dated {
  data: { kind: "work" | "education"; start?: string; end?: string };
}

/**
 * Orders timeline entries: work before education, current roles first, then
 * by most recent end date and start date. Undated entries sink to the bottom
 * of their group.
 */
export function sortTimeline<T extends Dated>(entries: T[]): T[] {
  const kindRank = { work: 0, education: 1 } as const;
  const endOf = (e: T) =>
    e.data.start === undefined ? -Infinity : e.data.end ? toIndex(e.data.end) : Infinity;
  const startOf = (e: T) => (e.data.start ? toIndex(e.data.start) : -Infinity);
  return [...entries].sort(
    (a, b) =>
      kindRank[a.data.kind] - kindRank[b.data.kind] ||
      endOf(b) - endOf(a) ||
      startOf(b) - startOf(a),
  );
}
