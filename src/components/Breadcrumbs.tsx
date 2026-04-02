import { ChevronRight } from 'lucide-react'
import type { ConceptNode } from '../types/concept'

interface BreadcrumbsProps {
  path: ConceptNode[]
  onNavigate: (id: string) => void
}

const Breadcrumbs = ({ path, onNavigate }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-3 py-2">
      {path.map((node, index) => {
        const isLast = index === path.length - 1
        return (
          <div key={node.id} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigate(node.id)}
              disabled={isLast}
              className="text-sm text-slate-300 transition hover:text-cyan-300 disabled:cursor-default disabled:text-white"
            >
              {node.title}
            </button>
            {!isLast && <ChevronRight className="h-4 w-4 text-slate-500" />}
          </div>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
