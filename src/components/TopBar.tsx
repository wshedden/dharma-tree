import { ArrowLeft, Home } from 'lucide-react';
import type { SearchResult } from '../types/concept';
import { SearchBox } from './SearchBox';

interface TopBarProps {
  canGoBack: boolean;
  onBack: () => void;
  onHome: () => void;
  query: string;
  onQueryChange: (value: string) => void;
  searchResults: SearchResult[];
  onSelectResult: (id: string) => void;
}

export const TopBar = ({
  canGoBack,
  onBack,
  onHome,
  query,
  onQueryChange,
  searchResults,
  onSelectResult,
}: TopBarProps) => (
  <header className="rounded-2xl border border-slate-800 bg-surface-900/80 p-4 shadow-xl backdrop-blur">
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Concept Explorer</p>
        <h1 className="text-xl font-semibold text-slate-100">Dharma Tree Prototype</h1>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-300/70 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <button
          type="button"
          onClick={onHome}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-300/70 hover:bg-slate-800"
        >
          <Home className="h-4 w-4" />
          Root
        </button>
      </div>
    </div>

    <div className="mt-3">
      <SearchBox query={query} onQueryChange={onQueryChange} results={searchResults} onSelectResult={onSelectResult} />
    </div>
  </header>
);
