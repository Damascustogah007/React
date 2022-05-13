import Hello from './Components/Hello';
import Welcome from './Components/Welcome'
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello name = "Charles" heroName = "Batman"><p>This is a children props</p></Hello>
      <Hello name = "Damascus" heroName = "Spiderman"> <button>Action</button></Hello>
      <Hello name = "Togah" heroName = "Avatar"/>

      <Welcome name = "Charles" heroName = "Avatar"/>
      <Welcome name = "Damascus" heroName = "Avatar"/>
      <Welcome name = "Togah" heroName = "Avatar"/>

    
    </div>
  );
}

export default App;
