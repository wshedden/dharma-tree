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
      <p className="text-xs uppercase tracking-[0.2em] text-violet-300/80">Current Node</p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-100">{node.title}</h2>
      <p className="mt-1 text-sm text-cyan-200/90">{node.subtitle}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-200">Depth level: {depth}</span>
        <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-200">
          {childCount > 0 ? `${childCount} child node${childCount === 1 ? '' : 's'}` : 'Leaf node'}
        </span>
      </div>

      <div className="mt-5 rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
        <h3 className="text-sm font-semibold text-slate-100">Description</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{node.description}</p>
      </div>

      <div className="mt-4">
        <InfoCard
          title="Context"
          body="Use the surrounding nodes to move deeper into this branch, or move up with breadcrumbs to reframe the current concept."
        />
      </div>
    </aside>
  );
};
