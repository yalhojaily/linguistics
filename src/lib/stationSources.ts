import type { SourceId, Station } from '../data/types';
import { enrichment } from '../data/enrichment';

/** مصادر طبقة الإثراء لمحطة، بلا تكرار. */
export function enrichmentSourceIds(s: Station): SourceId[] {
  const en = enrichment[s.id];
  if (!en) return [];
  const ids = [...en.deep.flatMap((d) => d.sources), ...(en.milestones ?? []).flatMap((m) => m.sources)];
  return [...new Set(ids)];
}

/** كل مصادر المحطة: مصادر المادة الأصلية أولاً، ثم مصادر الإثراء الجديدة عليها. */
export function allSourceIds(s: Station): SourceId[] {
  const base = s.sources;
  return [...base, ...enrichmentSourceIds(s).filter((id) => !base.includes(id))];
}
