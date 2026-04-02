export interface Point {
  x: number
  y: number
}

/**
 * Radial layout centered on 0,0. Keeps spacing stable while gracefully reducing
 * spread when child count is high.
 */
export const computeChildPositions = (
  count: number,
  radius = 220,
  startAngle = -120,
  endAngle = 120,
): Point[] => {
  if (count <= 0) return []
  if (count === 1) return [{ x: 0, y: -radius }]

  const dynamicRadius = Math.min(radius + Math.max(count - 6, 0) * 8, 280)
  const angleSpan = endAngle - startAngle
  const step = angleSpan / (count - 1)

  return Array.from({ length: count }).map((_, index) => {
    const angle = (startAngle + step * index) * (Math.PI / 180)
    return {
      x: Math.cos(angle) * dynamicRadius,
      y: Math.sin(angle) * dynamicRadius,
    }
  })
}
