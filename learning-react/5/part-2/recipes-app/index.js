import React from "react";
import { render } from "react-dom";
import Menu from "./src/components/Menu.js";
import data from "./src/data/recipes.json";

console.log("inside index.js ##########################");

render(<Menu recipes = { data } />, document.getElementById("root"));