import { motion } from 'motion/react'
import type { ConceptNode } from '../types/concept'

interface CenterNodeProps {
  node: ConceptNode
}

const CenterNode = ({ node }: CenterNodeProps) => {
  return (
    <motion.div
      key={node.id}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 210, damping: 20 }}
      className="absolute left-1/2 top-1/2 z-10 w-64 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-violet-300/40 bg-slate-900/90 p-5 text-center shadow-glow backdrop-blur"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-sky-300/80">Current Node</p>
      <h2 className="mt-2 text-xl font-semibold text-slate-50">{node.title}</h2>
      <p className="mt-2 text-sm text-slate-300">{node.subtitle}</p>
    </motion.div>
  )
}

export default CenterNode
