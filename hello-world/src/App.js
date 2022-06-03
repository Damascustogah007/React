import "./App.css";
import Hero from "./Components/ErrorBoundary/Hero";
import Error from "./Components/ErrorBoundary/errorBoundary";

function App() {
  return (
    <div className="App">
      <Error>
        <Hero heroName="Batman" />
      </Error>
      <Error>
        <Hero heroName="Superman" />
      </Error>
      <Error>
        <Hero heroName="Joker" />
      </Error>
    </div>
  );
}

export default App;
