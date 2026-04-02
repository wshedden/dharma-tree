import { motion } from 'motion/react'
import type { ConceptNode } from '../types/concept'

interface NodeBubbleProps {
  node: ConceptNode
  x: number
  y: number
  onSelect: (id: string) => void
}

const NodeBubble = ({ node, x, y, onSelect }: NodeBubbleProps) => {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      exit={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-sky-300/35 bg-slate-900/80 p-3 text-left shadow-lg shadow-cyan-900/25 backdrop-blur-sm transition-colors hover:border-fuchsia-300/60 hover:bg-slate-800/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      onClick={() => onSelect(node.id)}
    >
      <p className="line-clamp-2 text-sm font-semibold text-slate-100">{node.title}</p>
      <p className="mt-1 line-clamp-2 text-xs text-slate-400">{node.subtitle}</p>
    </motion.button>
  )
}

export default NodeBubble
