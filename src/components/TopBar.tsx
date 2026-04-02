import { ArrowLeft, Home } from 'lucide-react'
import type { SearchResult } from '../types/concept'
import SearchBox from './SearchBox'

interface TopBarProps {
  canGoBack: boolean
  onBack: () => void
  onHome: () => void
  searchQuery: string
  setSearchQuery: (value: string) => void
  searchResults: SearchResult[]
  onSelectSearch: (id: string) => void
}

const TopBar = ({
  canGoBack,
  onBack,
  onHome,
  searchQuery,
  setSearchQuery,
  searchResults,
  onSelectSearch,
}: TopBarProps) => {
  return (
    <header className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/55 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-slate-100">Concept Tree Explorer</h1>
        <p className="text-sm text-slate-400">Prototype UI for future Buddhism-learning pathways</p>
      </div>

      <div className="flex w-full flex-col items-stretch gap-3 md:w-auto md:flex-row md:items-center">
        <SearchBox
          query={searchQuery}
          setQuery={setSearchQuery}
          results={searchResults}
          onSelect={onSelectSearch}
        />

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            disabled={!canGoBack}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <button
            type="button"
            onClick={onHome}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 transition hover:border-fuchsia-300/50 hover:text-fuchsia-200"
          >
            <Home className="h-4 w-4" /> Root
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopBar
