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

const DEFAULT_CANVAS_SIZE = {
  width: 900,
  height: 560,
};

const CENTER_NODE_SIZE = {
  width: 256,
  height: 180,
};

const CHILD_NODE_SIZE = {
  width: 160,
  height: 116,
};

export const TreeCanvas = ({ node, onSelect }: TreeCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [canvasSize, setCanvasSize] = useState(DEFAULT_CANVAS_SIZE);

  useLayoutEffect(() => {
    const element = canvasRef.current;
    if (!element) {
      return;
    }

    const updateSize = () => {
      const { width, height } = element.getBoundingClientRect();
      setCanvasSize({
        width: Math.round(width),
        height: Math.round(height),
      });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const positions = useMemo(() => {
    const points = getRadialLayout({
      childCount: node.children.length,
      containerWidth: canvasSize.width,
      containerHeight: canvasSize.height,
      nodeSize: CHILD_NODE_SIZE,
      centerNodeSize: CENTER_NODE_SIZE,
    });

    return points.map((point, index) => ({
      node: node.children[index],
      x: point.x,
      y: point.y,
    }));
  }, [canvasSize.height, canvasSize.width, node.children]);

  return (
    <section className="relative min-h-[32rem] overflow-hidden rounded-2xl border border-slate-800 bg-surface-950/90 shadow-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:30px_30px] opacity-25" />

      <motion.div
        key={node.id}
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative mx-auto h-[560px] w-full max-w-[900px]"
      >
        <CenterNode node={node} x={canvasSize.width / 2} y={canvasSize.height / 2} />

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
