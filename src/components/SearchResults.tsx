import { motion } from 'motion/react';
import { CornerDownRight } from 'lucide-react';
import type { SearchResult } from '../types/concept';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  onSelect: (id: string) => void;
}

export const SearchResults = ({ results, query, onSelect }: SearchResultsProps) => {
  if (!query.trim()) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-full z-30 mt-2 w-full overflow-hidden rounded-xl border border-slate-700 bg-surface-900 shadow-2xl"
    >
      {results.length === 0 ? (
        <p className="p-3 text-sm text-slate-400">No matching concepts found.</p>
      ) : (
        <ul className="max-h-72 overflow-y-auto py-1">
          {results.map(({ node, path }) => (
            <li key={node.id}>
              <button
                type="button"
                className="flex w-full items-start gap-2 px-3 py-2 text-left hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                onClick={() => onSelect(node.id)}
              >
                <CornerDownRight className="mt-1 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-medium text-slate-100">{node.title}</span>
                  <span className="block text-xs text-slate-400">{path.map((item) => item.title).join(' / ')}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};
