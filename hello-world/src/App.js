import "./App.css";
import ComponentC from "./Components/Context folder/ComponentC";
import { UserProvider } from "./Components/Context folder/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Charles">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

//In this file we are nesting the ComponentC inside UserProvider and providing a value that can be used by any component
export default App;
