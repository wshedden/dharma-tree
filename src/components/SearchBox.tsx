import { Search, X } from 'lucide-react';
import type { SearchResult } from '../types/concept';
import { SearchResults } from './SearchResults';

interface SearchBoxProps {
  query: string;
  onQueryChange: (value: string) => void;
  results: SearchResult[];
  onSelectResult: (id: string) => void;
}

export const SearchBox = ({ query, onQueryChange, results, onSelectResult }: SearchBoxProps) => (
  <div className="relative w-full max-w-md">
    <label className="sr-only" htmlFor="concept-search">
      Search concepts
    </label>
    <div className="flex items-center rounded-xl border border-slate-700 bg-surface-900/85 px-3 py-2 focus-within:border-cyan-300/70">
      <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
      <input
        id="concept-search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search title, subtitle, or description"
        className="ml-2 w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
      />
      {query ? (
        <button
          type="button"
          onClick={() => onQueryChange('')}
          className="rounded p-1 text-slate-400 hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}
    </div>
    <SearchResults query={query} results={results} onSelect={onSelectResult} />
  </div>
);
