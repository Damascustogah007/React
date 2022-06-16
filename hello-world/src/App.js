import "./App.css";
import ClickCounter from "./Components/Render_Props/clickCounter";
import HoverCounter from "./Components/Render_Props/HoverCounter";
import Counter from "./Components/Render_Props/Counter";

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, incrementCounter) => (
          <ClickCounter count={count} incrementCounter={incrementCounter} />
        )}
      />
      <Counter
        render={(count, incrementCounter) => (
          <HoverCounter count={count} incrementCounter={incrementCounter} />
        )}
      />
    </div>
  );
}

export default App;
