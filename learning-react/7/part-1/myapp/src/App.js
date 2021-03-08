import './App.css';
// import Checkbox from "./components/Checkbox.js";
import SidecEffects1 from "./components/SideEffects1.js";
// import FetchData from "./components/FetchData.js";
import ForceRender from "./components/ForceRender.js";

function App() {

  return (
    <div className="App">
      <h1 style = {{ paddingTop: "5rem"}}>Test</h1>
      {/* <Checkbox /> */}
      <SidecEffects1 />
      {/* <FetchData /> */}
      <ForceRender />
    </div>
  );
}

export default App;
