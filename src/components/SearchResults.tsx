import type { SearchResult } from '../types/concept'

interface SearchResultsProps {
  results: SearchResult[]
  query: string
  onSelect: (id: string) => void
}

const SearchResults = ({ results, query, onSelect }: SearchResultsProps) => {
  if (!query.trim()) return null

  return (
    <div className="absolute top-full z-30 mt-2 max-h-80 w-full overflow-auto rounded-2xl border border-slate-700 bg-slate-900/95 p-2 shadow-2xl shadow-black/40 backdrop-blur">
      {results.length === 0 ? (
        <p className="px-3 py-4 text-sm text-slate-400">No matching concepts found.</p>
      ) : (
        <ul className="space-y-1">
          {results.map((result) => (
            <li key={result.node.id}>
              <button
                type="button"
                className="w-full rounded-xl px-3 py-2 text-left transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                onClick={() => onSelect(result.node.id)}
              >
                <p className="text-sm font-semibold text-slate-100">{result.node.title}</p>
                <p className="line-clamp-1 text-xs text-slate-400">{result.node.subtitle}</p>
                <p className="line-clamp-1 text-xs text-violet-300/80">
                  {result.path.map((n) => n.title).join(' › ')}
                </p>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchResults
