// import Hello from './Components/Hello';
// import Welcome from './Components/Welcome'
import "./App.css";
import ParentComponent from "./Components/parentComponent";
// import Message from './Components/Message';
// import Counter from "./Components/Counter";
// import Greetings from './Components/destructuring';
// import Handler from './Components/Handler'
// import Bind from "./Components/eventBinding";



function App() {
  return (
    <div className="App">
    <ParentComponent />
      {/* <Greetings name = "Clark Kent" heroName = "Superman"/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Hello name = "Charles" heroName = "Batman"><p>This is a children props</p></Hello>
      <Hello name = "Damascus" heroName  = "Spiderman"> <button>Action</button></Hello>
      <Hello name = "Togah" heroName = "Avatar"/>

      <Welcome name = "Charles" heroName = "Batman"/>
      <Welcome name = "Damascus" heroName = "Superman"/>
      <Welcome name = "Togah" heroName = "Avatar"/> */}
      
    </div>
  );
}

export default App;
