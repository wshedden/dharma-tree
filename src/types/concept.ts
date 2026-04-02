export interface ConceptNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  children: ConceptNode[];
  tags?: string[];
  relatedIds?: string[];
  difficulty?: 'intro' | 'intermediate' | 'advanced';
}

export interface SearchResult {
  node: ConceptNode;
  path: ConceptNode[];
}

export interface PositionedNode {
  node: ConceptNode;
  x: number;
  y: number;
}
