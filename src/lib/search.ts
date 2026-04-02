import type { ConceptNode, SearchResult } from '../types/concept'
import { flattenTree, findPathToNode } from './tree'

const normalize = (value: string): string => value.trim().toLowerCase()

export const searchTree = (
  root: ConceptNode,
  query: string,
  limit = 8,
): SearchResult[] => {
  const normalized = normalize(query)
  if (!normalized) return []

  return flattenTree(root)
    .filter((node) => {
      const haystack = `${node.title} ${node.subtitle} ${node.description}`.toLowerCase()
      return haystack.includes(normalized)
    })
    .map((node) => ({
      node,
      path: findPathToNode(root, node.id) ?? [root],
    }))
    .slice(0, limit)
}
