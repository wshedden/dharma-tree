export type DifficultyLevel = 'intro' | 'intermediate' | 'advanced'

export interface ConceptNode {
  id: string
  title: string
  subtitle: string
  description: string
  children: ConceptNode[]
  tags?: string[]
  relatedIds?: string[]
  difficulty?: DifficultyLevel
}

export interface SearchResult {
  node: ConceptNode
  path: ConceptNode[]
}
