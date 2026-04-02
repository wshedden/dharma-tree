import { TreeExplorer } from './components/TreeExplorer';

const App = () => (
  <div className="min-h-screen bg-surface-950 text-slate-100">
    <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.13),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(192,132,252,0.11),transparent_26%)]" />
    <TreeExplorer />
  </div>
);

export default App;
