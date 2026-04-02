import type { ConceptNode } from '../types/concept';

export const findNodeById = (root: ConceptNode, id: string): ConceptNode | null => {
  if (root.id === id) {
    return root;
  }

  for (const child of root.children) {
    const found = findNodeById(child, id);
    if (found) {
      return found;
    }
  }

  return null;
};

export const findPathToNode = (root: ConceptNode, targetId: string): ConceptNode[] | null => {
  if (root.id === targetId) {
    return [root];
  }

  for (const child of root.children) {
    const childPath = findPathToNode(child, targetId);
    if (childPath) {
      return [root, ...childPath];
    }
  }

  return null;
};

export const flattenTree = (root: ConceptNode): ConceptNode[] => {
  const nodes: ConceptNode[] = [root];
  for (const child of root.children) {
    nodes.push(...flattenTree(child));
  }
  return nodes;
};

export const getParentNode = (root: ConceptNode, id: string): ConceptNode | null => {
  const path = findPathToNode(root, id);
  if (!path || path.length < 2) {
    return null;
  }
  return path[path.length - 2] ?? null;
};

export const safeResolveNode = (root: ConceptNode, id: string | null | undefined): ConceptNode => {
  if (!id) {
    return root;
  }

  return findNodeById(root, id) ?? root;
};
