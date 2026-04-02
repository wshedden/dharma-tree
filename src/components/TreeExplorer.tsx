import { useMemo, useState } from 'react';
import { conceptTree } from '../data/conceptTree';
import { searchTree } from '../lib/search';
import { findPathToNode, safeResolveNode } from '../lib/tree';
import { Breadcrumbs } from './Breadcrumbs';
import { DetailPanel } from './DetailPanel';
import { TopBar } from './TopBar';
import { TreeCanvas } from './TreeCanvas';

export const TreeExplorer = () => {
  const [currentNodeId, setCurrentNodeId] = useState<string>(conceptTree.id);
  const [query, setQuery] = useState('');

  const currentNode = useMemo(
    () => safeResolveNode(conceptTree, currentNodeId),
    [currentNodeId],
  );

  const path = useMemo(
    () => findPathToNode(conceptTree, currentNode.id) ?? [conceptTree],
    [currentNode.id],
  );

  const searchResults = useMemo(() => searchTree(conceptTree, query), [query]);

  const navigateToNode = (id: string) => {
    const resolved = safeResolveNode(conceptTree, id);
    setCurrentNodeId(resolved.id);
  };

  const goBack = () => {
    if (path.length > 1) {
      const parent = path[path.length - 2];
      if (parent) {
        setCurrentNodeId(parent.id);
      }
    }
  };

  const handleSelectSearchResult = (id: string) => {
    navigateToNode(id);
    setQuery('');
  };

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 p-4 md:p-6">
      <TopBar
        canGoBack={path.length > 1}
        onBack={goBack}
        onHome={() => navigateToNode(conceptTree.id)}
        query={query}
        onQueryChange={setQuery}
        searchResults={searchResults}
        onSelectResult={handleSelectSearchResult}
      />

      <div className="rounded-2xl border border-slate-800 bg-surface-900/60 px-4 py-3">
        <Breadcrumbs path={path} onSelect={navigateToNode} />
      </div>

      <main className="grid gap-4 xl:grid-cols-[1.35fr_0.85fr]">
        <TreeCanvas node={currentNode} onSelect={navigateToNode} />
        <DetailPanel node={currentNode} depth={path.length - 1} />
      </main>
    </div>
  );
};
