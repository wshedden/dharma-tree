export interface NodeDimensions {
  width: number;
  height: number;
}

export interface RadialLayoutOptions {
  childCount: number;
  containerWidth: number;
  containerHeight: number;
  nodeSize: NodeDimensions;
  centerNodeSize: NodeDimensions;
  edgePadding?: number;
  spacing?: number;
}

export interface Point {
  x: number;
  y: number;
}

const DEFAULT_EDGE_PADDING = 56;
const DEFAULT_SPACING = 28;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const getAngles = (count: number): number[] => {
  if (count === 1) {
    return [-Math.PI / 2];
  }

  if (count === 2) {
    return [0, Math.PI];
  }

  if (count === 3) {
    return [-Math.PI / 2, -Math.PI / 2 + (2 * Math.PI) / 3, -Math.PI / 2 + (4 * Math.PI) / 3];
  }

  return Array.from({ length: count }, (_, index) => -Math.PI / 2 + (2 * Math.PI * index) / count);
};

const getSafeRadii = ({
  childCount,
  containerWidth,
  containerHeight,
  nodeSize,
  centerNodeSize,
  spacing,
  edgePadding,
}: Required<RadialLayoutOptions>): { minSafeRadius: number; maxAllowedRadius: number; targetRadius: number } => {
  const centerRadius = Math.hypot(centerNodeSize.width, centerNodeSize.height) / 2;
  const childRadius = Math.hypot(nodeSize.width, nodeSize.height) / 2;

  const minSafeRadius = centerRadius + childRadius + spacing;
  const maxRadiusX = containerWidth / 2 - edgePadding - nodeSize.width / 2;
  const maxRadiusY = containerHeight / 2 - edgePadding - nodeSize.height / 2;
  const maxAllowedRadius = Math.max(0, Math.min(maxRadiusX, maxRadiusY));

  const minChordLength = nodeSize.width + spacing;
  const radiusForSpacing =
    childCount > 2 ? minChordLength / (2 * Math.sin(Math.PI / childCount)) : minSafeRadius;

  const targetRadius = Math.max(minSafeRadius, radiusForSpacing, minSafeRadius + (childCount - 1) * 10);

  return { minSafeRadius, maxAllowedRadius, targetRadius };
};

export const getRadialLayout = ({
  childCount,
  containerWidth,
  containerHeight,
  nodeSize,
  centerNodeSize,
  edgePadding = DEFAULT_EDGE_PADDING,
  spacing = DEFAULT_SPACING,
}: RadialLayoutOptions): Point[] => {
  if (childCount === 0 || containerWidth <= 0 || containerHeight <= 0) {
    return [];
  }

  const options: Required<RadialLayoutOptions> = {
    childCount,
    containerWidth,
    containerHeight,
    nodeSize,
    centerNodeSize,
    edgePadding,
    spacing,
  };

  const { minSafeRadius, maxAllowedRadius, targetRadius } = getSafeRadii(options);
  const radius = clamp(targetRadius, minSafeRadius, Math.max(minSafeRadius, maxAllowedRadius));

  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const angles = getAngles(childCount);

  return angles.map((angle) => {
    const localX = Math.cos(angle) * radius;
    const localY = Math.sin(angle) * radius;

    return {
      x: centerX + localX,
      y: centerY + localY,
    };
  });
};
