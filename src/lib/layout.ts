export interface Point {
  x: number;
  y: number;
}

interface RadialLayoutOptions {
  childCount: number;
  containerWidth: number;
  containerHeight: number;
  nodeSize: number;
  centerNodeSize: number;
  edgePadding?: number;
  spacing?: number;
}

const TAU = Math.PI * 2;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const getAngles = (count: number): number[] => {
  if (count <= 0) {
    return [];
  }

  if (count === 1) {
    return [-Math.PI / 2];
  }

  if (count === 2) {
    return [0, Math.PI];
  }

  if (count === 3) {
    return [-Math.PI / 2, -Math.PI / 2 + TAU / 3, -Math.PI / 2 + (2 * TAU) / 3];
  }

  return Array.from({ length: count }, (_, index) => (TAU * index) / count - Math.PI / 2);
};

const buildRings = (
  childCount: number,
  minRadius: number,
  maxRadius: number,
  nodeSize: number,
  spacing: number,
): Array<{ radius: number; count: number }> => {
  if (childCount <= 0 || maxRadius <= 0) {
    return [];
  }

  const rings: Array<{ radius: number; count: number }> = [];
  let remaining = childCount;

  if (childCount <= 3) {
    return [{ radius: clamp(minRadius, 0, maxRadius), count: childCount }];
  }

  const ringStep = nodeSize + spacing;
  let radius = minRadius;

  while (remaining > 0 && radius <= maxRadius + 0.001) {
    const maxOnRing = Math.max(4, Math.floor((TAU * radius) / (nodeSize + spacing)));
    const count = Math.min(remaining, maxOnRing);
    rings.push({ radius, count });
    remaining -= count;
    radius += ringStep;
  }

  if (remaining > 0) {
    const fallbackRadius = maxRadius;
    rings.push({ radius: fallbackRadius, count: remaining });
  }

  return rings;
};

export const getRadialLayout = ({
  childCount,
  containerWidth,
  containerHeight,
  nodeSize,
  centerNodeSize,
  edgePadding = 56,
  spacing = 30,
}: RadialLayoutOptions): Point[] => {
  if (childCount === 0 || containerWidth <= 0 || containerHeight <= 0) {
    return [];
  }

  const centerNodeRadius = centerNodeSize / 2;
  const childNodeRadius = nodeSize / 2;
  const minimumSafeRadius = centerNodeRadius + childNodeRadius + spacing;

  const maxRadiusX = containerWidth / 2 - edgePadding - childNodeRadius;
  const maxRadiusY = containerHeight / 2 - edgePadding - childNodeRadius;
  const maxAllowedRadius = Math.max(0, Math.min(maxRadiusX, maxRadiusY));

  const rings = buildRings(childCount, minimumSafeRadius, maxAllowedRadius, nodeSize, spacing);

  return rings.flatMap(({ radius, count }) => {
    const angles = getAngles(count);
    return angles.map((angle) => ({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }));
  });
};
