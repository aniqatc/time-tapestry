// Purpose: Composes the page and initializes authentication and birthday data.
import { Header, Sidebar, Content } from './components';
import { useEffect } from 'react';
import { useAuthStore, useBirthdayStore } from './contexts';
import SignInDialog from './components/Header/SignInDialog';

function App(): JSX.Element {
  const initializeAuth = useAuthStore(state => state.initialize);
  const userId = useAuthStore(state => state.session?.user.id ?? null);
  const authInitialized = useAuthStore(state => state.initialized);
  const loadBirthdays = useBirthdayStore(state => state.loadBirthdays);

  useEffect(() => initializeAuth(), [initializeAuth]);
  useEffect(() => {
    if (authInitialized) void loadBirthdays(userId);
  }, [authInitialized, loadBirthdays, userId]);

  return (
    <>
      <Header />
      <SignInDialog />
      <main className="mt-2 flex h-full gap-2">
        <hr className="xs:sticky pointer-events-none min-w-[50px] opacity-0 sm:min-w-[315px] lg:hidden" />
        <Sidebar />
        <Content />
      </main>
    </>
  );
}

export default App;
