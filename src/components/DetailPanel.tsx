import type { ConceptNode } from '../types/concept';
import { InfoCard } from './InfoCard';

interface DetailPanelProps {
  node: ConceptNode;
  depth: number;
}

export const DetailPanel = ({ node, depth }: DetailPanelProps) => {
  const childCount = node.children.length;

  return (
    <aside className="rounded-2xl border border-slate-800 bg-surface-900/80 p-5 shadow-xl backdrop-blur">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-300/80">Node Details</p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-100">{node.title}</h2>
      <p className="mt-1 text-sm text-cyan-200/90">{node.subtitle}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{node.description}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-200">Depth: {depth}</span>
        <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-200">
          {childCount > 0 ? `${childCount} child concepts` : 'Leaf node'}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <InfoCard
          title="Why this structure works"
          body="Focused navigation reduces cognitive overload. Users only process the current concept, nearby branches, and contextual path controls."
        />
        <InfoCard
          title="Future extensions"
          body="This data model can add references, related links, learning milestones, progress tracking, and source citations without rewriting core navigation."
        />
        <InfoCard
          title="About this prototype"
          body="All content in this build is intentional placeholder material for interaction and architecture validation only."
        />
      </div>
    </aside>
  );
};
