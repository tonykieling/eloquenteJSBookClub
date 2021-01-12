// install babel in order to run import and export in node
// play with it

// tag: nvm, npm
// https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/

// import { expVar } from "./es6-modules-aux.mjs";
// console.log("expVar => ", expVar);

/*
ES6 Modules in Node:
1- both files that contain "import" and "expor" must have .mjs extension
2- node version >= 13
3- "import" seems not accept to be placed inside an if condition, while require does
*/

// importing a default value will take that in any name's receiver
// and the others export will be available, as well, calling by its own names
import x from "./es6-modules-aux.mjs";
console.log("dfVar", x);

// import { myFunction as mf } from "./es6-modules-aux.mjs";

if (1) {
  console.log("1");
  // import { myFunction as mf } from "./es6-modules-aux.mjs";  // this line will cause error
  // console.log(mf());
} else
  console.log("!1");

import { expVar } from "./es6-modules-aux.mjs";
console.log("expVar => ", expVar);

// console.log(myFunction());
// console.log(mf());