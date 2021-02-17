import React from "react";
// it is intersting... why should I have React declared in here??
// I thought only react-dom would be necessary at this very point..
// because I am import a file, which has React in there

import { render } from "react-dom";

import FirstComponent from "./components/FirstComponent.js";
console.log ("inside index.js");

render(<FirstComponent />, document.getElementById("root"));
