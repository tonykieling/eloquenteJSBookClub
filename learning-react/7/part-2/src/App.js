import './App.css';
import Comp1 from "./components/comp1.js";
import Comp2 from "./components/comp2.js";
import Cat from "./components/cat.js";
import MyUseReducer from "./components/useReducer.js";

/*
install react-router-dom
*/
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import { useEffect } from "react";
import { getEmail } from "./helper/log.js";

function App() {

  // const [count, setCount] = useState(0); //**** setState inside render method DOES NOT work properly */
  let browsing = 0; // workaround to handle a variable inside render

  useEffect(() => {
    console.log("load page!!!");

    const tempEmail = getEmail();
    console.log("email::", tempEmail);

  }, []);


  return (
    <Router className="App">
      <MyHeader />
      <Switch>
        <Route exact path = "/comp1"
          render = {() => {
            // setCount(count + 1);  ?? NOPEEEE
            browsing++;
            console.log("browsing::", browsing);
            return <Comp1 />
          }}
        />

        <Route exact path = "/comp2"
          render = {() => {
            // setCount(count + 1);
            browsing++;
            console.log("browsing::", browsing);
            return <Comp2 />
          }}
        />

        <Route path = "/cat">
          <Cat />
        </Route>
        <Route path = "/mur">
          <MyUseReducer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
