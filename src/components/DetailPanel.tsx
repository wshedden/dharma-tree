import type { ConceptNode } from '../types/concept';

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
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{node.description}</p>

      <div className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
        <div className="rounded-xl border border-slate-700 bg-slate-900/65 p-3">
          <p className="text-xs uppercase tracking-wider text-slate-400">Children</p>
          <p className="mt-1 font-medium text-slate-100">{childCount > 0 ? childCount : 'Leaf node'}</p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/65 p-3">
          <p className="text-xs uppercase tracking-wider text-slate-400">Depth</p>
          <p className="mt-1 font-medium text-slate-100">Level {depth}</p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/65 p-3">
          <p className="text-xs uppercase tracking-wider text-slate-400">Type</p>
          <p className="mt-1 font-medium text-slate-100">{childCount > 0 ? 'Branch node' : 'Terminal node'}</p>
        </div>
      </div>
    </aside>
  );
};
