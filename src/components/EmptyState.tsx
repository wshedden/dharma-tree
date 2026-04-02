import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    className="absolute left-1/2 top-[72%] flex w-72 -translate-x-1/2 flex-col items-center rounded-2xl border border-slate-700/80 bg-slate-900/75 p-4 text-center"
  >
    <Sparkles className="h-5 w-5 text-cyan-300" aria-hidden="true" />
    <p className="mt-2 text-sm font-medium text-slate-100">Leaf node reached</p>
    <p className="mt-1 text-xs text-slate-400">No child concepts here yet. Use breadcrumbs, search, or Back to continue exploring.</p>
  </motion.div>
);
