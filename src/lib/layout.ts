import type { ConceptNode, PositionedNode } from '../types/concept';

interface LayoutOptions {
  width: number;
  height: number;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const getChildNodeLayout = (
  children: ConceptNode[],
  { width, height }: LayoutOptions,
): PositionedNode[] => {
  if (children.length === 0) {
    return [];
  }

  const centerX = width / 2;
  const centerY = height / 2;

  const minDimension = Math.min(width, height);
  const baseRadius = clamp(minDimension * 0.3, 140, 280);
  const spread = children.length > 7 ? Math.PI * 1.65 : Math.PI * 1.45;
  const startAngle = -Math.PI / 2 - spread / 2;
  const step = children.length === 1 ? 0 : spread / (children.length - 1);

  return children.map((node, index) => {
    const angle = children.length === 1 ? -Math.PI / 2 : startAngle + index * step;
    const ringOffset = children.length > 8 ? ((index % 2) * 42 - 18) : 0;
    const radius = baseRadius + ringOffset;

    return {
      node,
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });
};
