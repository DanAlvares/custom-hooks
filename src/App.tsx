import LocalStorageDemo from './hooks/useLocalStorage/useLocalStorageDemo';
import './App.css';

// Import other custom hook demos here
// import UseClickOutsideDemo from './hooks/useClickOutside/useClickOutsideDemo';
// import UseDataDemo from './hooks/useData/useDataDemo';
// ... import other demos

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

            <section className="hook-demo">{/* <UseClickOutsideDemo /> */}</section>
            <section className="hook-demo">{/* <UseDataDemo /> */}</section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
