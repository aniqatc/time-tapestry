import { Header, Sidebar, Content } from './components';

function App(): JSX.Element {
  return (
    <main className="h-svh">
      <Header />
      <div className="flex h-full gap-2">
        <Sidebar />
        <Content />
      </div>
    </main>
  );
}

export default App;
