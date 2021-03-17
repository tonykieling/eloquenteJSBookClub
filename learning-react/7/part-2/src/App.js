import './App.css';
import Comp1 from "./components/comp1.js";
import Comp2 from "./components/comp2.js";
import Cat from "./components/cat.js";
import MyUseReducer from "./components/useReducer.js";

function App() {
  return (
    <div className="App">
      <Comp1 />
      <Comp2 />
      <Cat />
      <MyUseReducer />
    </div>
  );
}

export default App;
