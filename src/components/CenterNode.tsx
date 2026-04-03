import { motion } from 'motion/react';
import type { ConceptNode } from '../types/concept';

interface CenterNodeProps {
  node: ConceptNode;
  x: number;
  y: number;
  size: number;
}

export const CenterNode = ({ node, x, y, size }: CenterNodeProps) => (
  <motion.div
    key={node.id}
    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-violet-300/35 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 p-5 shadow-glow backdrop-blur"
    style={{ left: x, top: y, width: size }}
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.28 }}
  >
    <p className="text-xs uppercase tracking-[0.2em] text-violet-200/85">Current Concept</p>
    <h2 className="mt-2 text-xl font-semibold text-slate-100">{node.title}</h2>
    <p className="mt-1 text-sm text-slate-300">{node.subtitle}</p>
  </motion.div>
);
