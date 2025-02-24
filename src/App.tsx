import { Header, Sidebar, Content } from './components';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className="mt-2 flex h-full gap-2">
        <hr className="xs:sticky pointer-events-none min-w-[50px] opacity-0 sm:min-w-[315px] lg:hidden" />
        <Sidebar />
        <Content />
      </main>
    </>
  );
}

export default App;
