import UseFetchDemo from './hooks/useFetch/useFetchDemo';
import UseDebounceDemo from './hooks/useDebounce/useDebounceDemo';
import LocalStorageDemo from './hooks/useLocalStorage/useLocalStorageDemo';
import UseClickOutsideDemo from './hooks/useClickOutside/useClickOutsideDemo';
import './App.css';

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
              <LocalStorageDemo />
            </section>
            <section className="hook-demo">
              <UseClickOutsideDemo />
            </section>
            <section className="hook-demo">
              <UseDebounceDemo />
            </section>
            <section className="hook-demo">
              <UseFetchDemo />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
// useIdle
// useClipboard
// useBeforeUnload
// useDeviceMotion
// useResizeObserver
// useIntersectionObserver
