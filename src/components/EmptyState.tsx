import { Compass } from 'lucide-react'
import { motion } from 'motion/react'

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute left-1/2 top-[72%] flex -translate-x-1/2 items-center gap-3 rounded-full border border-violet-400/30 bg-slate-900/90 px-4 py-2 text-sm text-slate-300"
    >
      <Compass className="h-4 w-4 text-cyan-300" />
      End of branch. Choose breadcrumbs, Back, Home, or Search.
    </motion.div>
  )
}

export default EmptyState
