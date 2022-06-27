import "./App.css";
import ComponentA from "./Components/Contextss/ComponentA";
import { UserProvider } from "./Components/Contextss/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Charles">
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
