import { Header, Sidebar, Content } from './components';

function App(): JSX.Element {
  return (
    <div className="max-h-screen overflow-y-auto">
      <Header />
      <main className="mt-2 flex h-full gap-2">
        <hr className="xs:sticky pointer-events-none min-w-[50px] opacity-0 sm:min-w-[315px] lg:hidden" />
        <Sidebar />
        <Content />
      </main>
    </div>
  );
}

export default App;
