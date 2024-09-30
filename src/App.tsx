import './App.css';
import UseBeforeUnloadDemo from './hooks/useBeforeUnload/useBeforeUnloadDemo';
import UseClickOutsideDemo from './hooks/useClickOutside/useClickOutsideDemo';
import UseDebounceDemo from './hooks/useDebounce/useDebounceDemo';
import UseFetchDemo from './hooks/useFetch/useFetchDemo';
import UseLocalStorageDemo from './hooks/useLocalStorage/useLocalStorageDemo';

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Custom React Hooks</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="hooks-grid">
            <section className="hook-demo">
              <h2>useClickOutside</h2>
              <UseClickOutsideDemo />
            </section>
            <section className="hook-demo">
              <h2>useDebounce</h2>
              <UseDebounceDemo />
            </section>
            <section className="hook-demo">
              <h2>useFetch</h2>
              <UseFetchDemo />
            </section>
            <section className="hook-demo">
              <h2>useLocalStorage</h2>
              <UseLocalStorageDemo />
            </section>
            <section className="hook-demo">
              <h2>useBeforeUnload</h2>
              <UseBeforeUnloadDemo />
            </section>
            <section className="hook-demo">
              <h2>useClipboard</h2>
              <span>Coming Soon...</span>
            </section>
            <section className="hook-demo">
              <h2>useDarkMode</h2>
              <span>Coming Soon...</span>
            </section>
            <section className="hook-demo">
              <h2>useDeviceMotion</h2>
              <span>Coming Soon...</span>
            </section>
            <section className="hook-demo">
              <h2>useGeolocation</h2>
              <span>Coming Soon...</span>
            </section>
            <section className="hook-demo">
              <h2>useIdle</h2>
              <span>Coming Soon...</span>
            </section>
            <section className="hook-demo">
              <h2>useIntersectionObserver</h2>
              <span>Coming Soon...</span>
            </section>
            <section className="hook-demo">
              <h2>useResizeObserver</h2>
              <span>Coming Soon...</span>
            </section>
            <section className="hook-demo">
              <h2>useSessionStorage</h2>
              <span>Coming Soon...</span>
            </section>
            <section className="hook-demo">
              <h2>useStore</h2>
              <span>Coming Soon...</span>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
