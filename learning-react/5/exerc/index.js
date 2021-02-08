import {data} from "./data.js";
import Menu from "./Menu.js";
// import {Item} from "./Item.js";

console.log("inside index.js and data is equal to:", data);

const doe = React.createElement("h1", {style:{color:"green"}}, "TEST X!");

ReactDOM.render(
  // <MainComponent items = {data} title = "Test title" />,
  doe,
  document.querySelector("#root")
);