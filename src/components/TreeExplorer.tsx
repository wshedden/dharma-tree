import { useMemo, useState } from 'react'
import { conceptTree } from '../data/conceptTree'
import { searchTree } from '../lib/search'
import { findPathToNode, getParentNode, safeResolveNode } from '../lib/tree'
import Breadcrumbs from './Breadcrumbs'
import DetailPanel from './DetailPanel'
import TopBar from './TopBar'
import TreeCanvas from './TreeCanvas'

const TreeExplorer = () => {
  const [currentId, setCurrentId] = useState(conceptTree.id)
  const [searchQuery, setSearchQuery] = useState('')

  const currentNode = useMemo(
    () => safeResolveNode(conceptTree, currentId),
    [currentId],
  )

  const path = useMemo(
    () => findPathToNode(conceptTree, currentNode.id) ?? [conceptTree],
    [currentNode.id],
  )

  const searchResults = useMemo(
    () => searchTree(conceptTree, searchQuery),
    [searchQuery],
  )

  const parent = getParentNode(conceptTree, currentNode.id)

  const navigateTo = (id: string) => {
    setCurrentId(id)
    setSearchQuery('')
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-4 px-4 py-6 lg:px-6">
      <TopBar
        canGoBack={Boolean(parent)}
        onBack={() => parent && navigateTo(parent.id)}
        onHome={() => navigateTo(conceptTree.id)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        onSelectSearch={navigateTo}
      />

      <Breadcrumbs path={path} onNavigate={navigateTo} />

      <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <TreeCanvas currentNode={currentNode} onSelectChild={navigateTo} />
        <DetailPanel node={currentNode} depth={path.length - 1} />
      </section>
    </main>
  )
}

export default TreeExplorer
