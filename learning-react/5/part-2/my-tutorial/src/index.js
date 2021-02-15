import React from "react";
import { render } from "react-dom";
import Menu from "./components/Menu.js";
import data from "./data/recipes.json";

console.log("inside index.js ##########################");

render(<Menu recipes = { data } />, document.getElementById("root"));