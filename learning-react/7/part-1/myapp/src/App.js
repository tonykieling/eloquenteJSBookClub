import './App.css';
import { useState, useEffect } from "react";
// import Checkbox from "./components/Checkbox.js";
// import SidecEffects1 from "./components/SideEffects1.js";
// import FetchData from "./components/FetchData.js";
import ForceRender from "./components/ForceRender.js";
// import CheckOrder from "./components/CheckOrder.js";

function App() {
  const [v, setV] = useState(false);
  
  useEffect(() => {
    console.log("v useEffect is running now!");
    return () => {
      console.log("vvvvv cleanup now!");
    }
  }, [v]);

  return (
    <div className="App">
      <h1 style = {{ paddingTop: "5rem"}}>Test</h1>
      <input
        type = "checkbox"
        value = { v }
        onChange = { () => setV(!v)}
      />
      { console.log(" --- v value is: ", v) }
      {/* <Checkbox /> */}
      {/* <SidecEffects1 /> */}
      {/* <FetchData /> */}
      { v && <ForceRender />
      }
      {/* <CheckOrder /> */}
    </div>
  );
}

export default App;
