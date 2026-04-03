import type { ConceptNode, PositionedNode } from '../types/concept';

interface RadialLayoutOptions {
  children: ConceptNode[];
  containerWidth: number;
  containerHeight: number;
  childNodeSize: { width: number; height: number };
  centerNodeSize: { width: number; height: number };
  edgePadding?: number;
  spacing?: number;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const TWO_PI = Math.PI * 2;

const getNodeRadius = ({ width, height }: { width: number; height: number }) => Math.hypot(width, height) / 2;

const getAngles = (count: number): number[] => {
  if (count <= 0) return [];
  if (count === 1) return [-Math.PI / 2];
  if (count === 2) return [0, Math.PI];
  if (count === 3) return [-Math.PI / 2, -Math.PI / 2 + (TWO_PI / 3), -Math.PI / 2 + ((2 * TWO_PI) / 3)];

  return Array.from({ length: count }, (_, index) => (TWO_PI * index) / count - Math.PI / 2);
};

const getRadiusRequiredForCount = (count: number, minDistanceBetweenChildren: number): number => {
  if (count <= 1) return 0;
  if (count === 2) return minDistanceBetweenChildren / 2;

  const halfStep = Math.PI / count;
  return minDistanceBetweenChildren / (2 * Math.sin(halfStep));
};

export const getRadialLayout = ({
  children,
  containerWidth,
  containerHeight,
  childNodeSize,
  centerNodeSize,
  edgePadding = 52,
  spacing = 28,
}: RadialLayoutOptions): PositionedNode[] => {
  if (children.length === 0 || containerWidth <= 0 || containerHeight <= 0) {
    return [];
  }

  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  const centerRadius = getNodeRadius(centerNodeSize);
  const childRadius = getNodeRadius(childNodeSize);

  const minimumSafeRadiusFromCenter = centerRadius + childRadius + spacing;
  const minimumDistanceBetweenChildren = childRadius * 2 + spacing;

  const countBasedRadius = getRadiusRequiredForCount(children.length, minimumDistanceBetweenChildren);
  const idealRadius = Math.max(minimumSafeRadiusFromCenter, countBasedRadius);

  const maxRadiusX = containerWidth / 2 - edgePadding - childRadius;
  const maxRadiusY = containerHeight / 2 - edgePadding - childRadius;
  const maxAllowedRadius = Math.max(0, Math.min(maxRadiusX, maxRadiusY));

  const finalRadius = clamp(idealRadius, minimumSafeRadiusFromCenter, maxAllowedRadius);
  const angles = getAngles(children.length);

  return children.map((node, index) => {
    const angle = angles[index] ?? -Math.PI / 2;

    return {
      node,
      x: centerX + Math.cos(angle) * finalRadius,
      y: centerY + Math.sin(angle) * finalRadius,
    };
  });
};
