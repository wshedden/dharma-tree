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

const FALLBACK_CANVAS_WIDTH = 900;
const FALLBACK_CANVAS_HEIGHT = 560;
const CENTER_NODE_SIZE = 256;
const EDGE_PADDING = 52;
const MIN_SPACING = 28;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const TreeCanvas = ({ node, onSelect }: TreeCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: FALLBACK_CANVAS_WIDTH, height: FALLBACK_CANVAS_HEIGHT });
  const centerX = canvasSize.width / 2;
  const centerY = canvasSize.height / 2;
  const childCount = node.children.length;

  useLayoutEffect(() => {
    const element = canvasRef.current;
    if (!element) {
      return;
    }

    const measure = () => {
      setCanvasSize({
        width: element.clientWidth || FALLBACK_CANVAS_WIDTH,
        height: element.clientHeight || FALLBACK_CANVAS_HEIGHT,
      });
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const childNodeSize = useMemo(() => {
    if (childCount === 0) {
      return 160;
    }

    const maxRadiusX = centerX - EDGE_PADDING;
    const maxRadiusY = centerY - EDGE_PADDING;
    const maxAllowedRadius = Math.max(0, Math.min(maxRadiusX, maxRadiusY));
    const availableRing = maxAllowedRadius - CENTER_NODE_SIZE / 2 - MIN_SPACING;
    const baseSize = clamp(170 - Math.max(0, childCount - 4) * 6, 120, 170);
    const constrainedByCanvas = clamp(availableRing * 2, 110, 170);
    return Math.min(baseSize, constrainedByCanvas);
  }, [centerX, centerY, childCount]);

  const positions = useMemo(
    () =>
      getRadialLayout({
        children: node.children,
        containerWidth: canvasSize.width,
        containerHeight: canvasSize.height,
        childNodeDiameter: childNodeSize,
        centerNodeDiameter: CENTER_NODE_SIZE,
        minSpacing: MIN_SPACING,
        edgePadding: EDGE_PADDING,
      }),
    [canvasSize.height, canvasSize.width, childNodeSize, node.children],
  );

  return (
    <section className="relative min-h-[32rem] overflow-hidden rounded-2xl border border-slate-800 bg-surface-950/90 shadow-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:30px_30px] opacity-25" />

      <motion.div
        key={node.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative mx-auto h-[560px] w-full max-w-[900px]"
        ref={canvasRef}
      >
        <CenterNode node={node} x={centerX} y={centerY} size={CENTER_NODE_SIZE} />

        <AnimatePresence>
          {positions.map((item, index) => (
            <NodeBubble
              key={item.node.id}
              node={item.node}
              onSelect={onSelect}
              x={item.x}
              y={item.y}
              index={index}
              size={childNodeSize}
            />
          ))}
        </AnimatePresence>

        {node.children.length === 0 ? <EmptyState /> : null}
      </motion.div>
    </section>
  );
};
