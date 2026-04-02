import { Search, X } from 'lucide-react'
import type { SearchResult } from '../types/concept'
import SearchResults from './SearchResults'

interface SearchBoxProps {
  query: string
  setQuery: (value: string) => void
  results: SearchResult[]
  onSelect: (id: string) => void
}

const SearchBox = ({ query, setQuery, results, onSelect }: SearchBoxProps) => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search concepts, subtitles, descriptions..."
        className="w-full rounded-xl border border-slate-700 bg-slate-900/85 py-2 pl-10 pr-10 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        aria-label="Search concept tree"
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition hover:bg-slate-800 hover:text-slate-100"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      <SearchResults results={results} query={query} onSelect={onSelect} />
    </div>
  )
}

export default SearchBox
