import type { ConceptNode, PositionedNode } from '../types/concept';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

interface RadialLayoutOptions {
  children: ConceptNode[],
  containerWidth: number;
  containerHeight: number;
  childNodeDiameter?: number;
  centerNodeDiameter?: number;
  minSpacing?: number;
  edgePadding?: number;
}

const getBaseAngles = (childCount: number): number[] => {
  if (childCount === 1) {
    return [-Math.PI / 2];
  }

  if (childCount === 2) {
    return [-Math.PI / 2, Math.PI / 2];
  }

  if (childCount === 3) {
    return [-Math.PI / 2, -Math.PI / 2 + (2 * Math.PI) / 3, -Math.PI / 2 + (4 * Math.PI) / 3];
  }

  return Array.from({ length: childCount }, (_, index) => (-Math.PI / 2 + (2 * Math.PI * index) / childCount) % (2 * Math.PI));
};

export const getRadialLayout = ({
  children,
  containerWidth,
  containerHeight,
  childNodeDiameter = 160,
  centerNodeDiameter = 256,
  minSpacing = 28,
  edgePadding = 52,
}: RadialLayoutOptions): PositionedNode[] => {
  if (children.length === 0) {
    return [];
  }

  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const childCount = children.length;

  const maxRadiusX = centerX - edgePadding - childNodeDiameter / 2;
  const maxRadiusY = centerY - edgePadding - childNodeDiameter / 2;
  const maxAllowedRadius = Math.max(0, Math.min(maxRadiusX, maxRadiusY));

  const centerSafetyRadius = centerNodeDiameter / 2 + childNodeDiameter / 2 + minSpacing;
  const minRadiusForNeighbors =
    childCount > 1
      ? (childNodeDiameter + minSpacing) / (2 * Math.sin(Math.PI / childCount))
      : centerSafetyRadius;

  const targetRadiusByCount = centerSafetyRadius + childCount * 6;
  const calculatedRadius = Math.max(centerSafetyRadius, minRadiusForNeighbors, targetRadiusByCount);
  const radius = clamp(calculatedRadius, centerSafetyRadius, maxAllowedRadius);

  const angles = getBaseAngles(childCount);

  return children.map((node, index) => {
    const angle = angles[index] ?? -Math.PI / 2;
    return {
      node,
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });
};
