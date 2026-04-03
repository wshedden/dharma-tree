import { AnimatePresence, motion } from 'motion/react';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { ConceptNode } from '../types/concept';
import { getRadialLayout } from '../lib/layout';
import { CenterNode } from './CenterNode';
import { EmptyState } from './EmptyState';
import { NodeBubble } from './NodeBubble';

interface TreeCanvasProps {
  node: ConceptNode;
  onSelect: (id: string) => void;
}

const DEFAULT_CANVAS_WIDTH = 900;
const DEFAULT_CANVAS_HEIGHT = 560;
const CENTER_NODE_SIZE = 256;
const CHILD_NODE_SIZE = 160;

export const TreeCanvas = ({ node, onSelect }: TreeCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({
    width: DEFAULT_CANVAS_WIDTH,
    height: DEFAULT_CANVAS_HEIGHT,
  });

  useLayoutEffect(() => {
    const element = canvasRef.current;

    if (!element) {
      return undefined;
    }

    const updateSize = () => {
      const rect = element.getBoundingClientRect();
      setCanvasSize({ width: rect.width, height: rect.height });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const positions = useMemo(() => {
    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height / 2;

    return getRadialLayout({
      childCount: node.children.length,
      containerWidth: canvasSize.width,
      containerHeight: canvasSize.height,
      nodeSize: CHILD_NODE_SIZE,
      centerNodeSize: CENTER_NODE_SIZE,
    }).map((point, index) => ({
      node: node.children[index],
      x: centerX + point.x,
      y: centerY + point.y,
    }));
  }, [canvasSize.height, canvasSize.width, node.children]);

  return (
    <section className="relative min-h-[32rem] overflow-hidden rounded-2xl border border-slate-800 bg-surface-950/90 shadow-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:30px_30px] opacity-25" />

      <motion.div
        ref={canvasRef}
        key={node.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative mx-auto h-[560px] w-full max-w-[900px]"
      >
        <CenterNode node={node} />

        <AnimatePresence>
          {positions.map((item, index) => (
            <NodeBubble key={item.node.id} node={item.node} onSelect={onSelect} x={item.x} y={item.y} index={index} />
          ))}
        </AnimatePresence>

        {node.children.length === 0 ? <EmptyState /> : null}
      </motion.div>
    </section>
  );
};
