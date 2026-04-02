import { AnimatePresence } from 'motion/react'
import type { ConceptNode } from '../types/concept'
import { computeChildPositions } from '../lib/layout'
import CenterNode from './CenterNode'
import EmptyState from './EmptyState'
import NodeBubble from './NodeBubble'

interface TreeCanvasProps {
  currentNode: ConceptNode
  onSelectChild: (id: string) => void
}

const TreeCanvas = ({ currentNode, onSelectChild }: TreeCanvasProps) => {
  const positions = computeChildPositions(currentNode.children.length)

  return (
    <section className="relative min-h-[580px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="absolute inset-0 bg-radial-noise" aria-hidden />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />

      <AnimatePresence mode="popLayout">
        <CenterNode key={currentNode.id} node={currentNode} />
      </AnimatePresence>

      <AnimatePresence>
        {currentNode.children.map((child, index) => (
          <NodeBubble
            key={child.id}
            node={child}
            x={positions[index]?.x ?? 0}
            y={positions[index]?.y ?? 0}
            onSelect={onSelectChild}
          />
        ))}
      </AnimatePresence>

      {currentNode.children.length === 0 && <EmptyState />}
    </section>
  )
}

export default TreeCanvas
