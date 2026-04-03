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

      <div className="mt-5 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 px-3 py-2">
          <p className="text-xs uppercase tracking-wider text-slate-400">Structure</p>
          <p className="mt-1 font-medium">{childCount > 0 ? `${childCount} child nodes` : 'Leaf node'}</p>
        </div>
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 px-3 py-2">
          <p className="text-xs uppercase tracking-wider text-slate-400">Depth</p>
          <p className="mt-1 font-medium">Level {depth}</p>
        </div>
      </div>

      <div className="mt-5 border-t border-slate-800 pt-4">
        <p className="text-xs uppercase tracking-wider text-slate-500">Prototype Notes</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          This panel is focused on the currently selected concept. Secondary guidance is intentionally minimized.
        </p>
      </div>
    </aside>
  );
};
