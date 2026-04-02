import type { ConceptNode } from '../types/concept'
import InfoCard from './InfoCard'

interface DetailPanelProps {
  node: ConceptNode
  depth: number
}

const DetailPanel = ({ node, depth }: DetailPanelProps) => {
  return (
    <aside className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/85 p-5">
      <div className="rounded-2xl border border-violet-400/30 bg-slate-900/65 p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-violet-300">Node Detail</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-100">{node.title}</h3>
        <p className="mt-1 text-sm text-slate-300">{node.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">{node.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-cyan-400/40 px-3 py-1 text-xs text-cyan-200">
            Depth: {depth}
          </span>
          <span className="rounded-full border border-fuchsia-400/40 px-3 py-1 text-xs text-fuchsia-200">
            {node.children.length > 0 ? `${node.children.length} child nodes` : 'Leaf node'}
          </span>
        </div>
      </div>

      <InfoCard
        title="Why this structure works"
        body="Focused navigation reduces cognitive overload. The learner always sees one concept in depth plus immediate next options."
      />
      <InfoCard
        title="Future extensions"
        body="This model can add references, progress checkpoints, spaced review, and cross-links without changing core traversal logic."
      />
      <InfoCard
        title="About this prototype"
        body="All entries are placeholder educational content for UX and architecture validation, not doctrinally accurate material."
      />
    </aside>
  )
}

export default DetailPanel
