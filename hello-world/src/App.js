import "./App.css";
import ClickedCounter from './Components/HigherOrderComponet/ClickedCounter'
import HoverCounter from './Components/HigherOrderComponet/HoverCounter'

function App() {
  return (
    <div className="App">
      <ClickedCounter />
      <HoverCounter name='Charles'/>
    </div>
  );
}

export default App;
