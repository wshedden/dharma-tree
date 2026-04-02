import type { ConceptNode, SearchResult } from '../types/concept';
import { findPathToNode, flattenTree } from './tree';

const normalize = (value: string) => value.trim().toLowerCase();

export const searchTree = (root: ConceptNode, query: string, maxResults = 8): SearchResult[] => {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) {
    return [];
  }

  const nodes = flattenTree(root);
  const results: SearchResult[] = [];

  for (const node of nodes) {
    const haystack = `${node.title} ${node.subtitle} ${node.description}`.toLowerCase();
    if (haystack.includes(normalizedQuery)) {
      const path = findPathToNode(root, node.id);
      if (path) {
        results.push({ node, path });
      }
    }

    if (results.length >= maxResults) {
      break;
    }
  }

  return results;
};
