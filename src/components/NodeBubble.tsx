import { motion } from 'motion/react';
import type { ConceptNode } from '../types/concept';

interface NodeBubbleProps {
  node: ConceptNode;
  onSelect: (id: string) => void;
  x: number;
  y: number;
  index: number;
}

export const NodeBubble = ({ node, onSelect, x, y, index }: NodeBubbleProps) => (
  <motion.button
    type="button"
    onClick={() => onSelect(node.id)}
    className="absolute w-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cyan-300/25 bg-surface-900/80 p-3 text-left shadow-lg shadow-cyan-900/20 backdrop-blur transition hover:border-cyan-300/60 hover:bg-surface-800/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: 'spring', stiffness: 210, damping: 20, delay: index * 0.04 }}
    whileHover={{ scale: 1.04, y: -3 }}
    whileTap={{ scale: 0.98 }}
  >
    <p className="line-clamp-2 text-sm font-semibold text-cyan-100">{node.title}</p>
    <p className="mt-1 line-clamp-2 text-xs text-slate-300">{node.subtitle}</p>
  </motion.button>
);
