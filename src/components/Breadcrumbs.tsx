import { ChevronRight } from 'lucide-react';
import type { ConceptNode } from '../types/concept';

interface BreadcrumbsProps {
  path: ConceptNode[];
  onSelect: (id: string) => void;
}

export const Breadcrumbs = ({ path, onSelect }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className="overflow-x-auto">
    <ol className="flex min-w-max items-center gap-1 text-sm text-slate-300">
      {path.map((node, index) => {
        const active = index === path.length - 1;
        return (
          <li key={node.id} className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onSelect(node.id)}
              className={`rounded-md px-2 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                active ? 'bg-cyan-400/20 text-cyan-100' : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              {node.title}
            </button>
            {index < path.length - 1 ? <ChevronRight className="h-3.5 w-3.5 text-slate-500" /> : null}
          </li>
        );
      })}
    </ol>
  </nav>
);
