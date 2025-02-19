import { Header, Sidebar, Content } from './components';

function App(): JSX.Element {
  return (
    <div className="h-svh">
      <Header />
      <main className="flex h-full gap-2">
        <Sidebar />
        <Content />
      </main>
    </div>
  );
}

export default App;
