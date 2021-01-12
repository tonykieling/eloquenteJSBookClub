if (1) {
  console.log("1")
  const aux = require("./commonJS-aux.js");
  console.log("aux:", aux.fx());
} else
  console.log("!1");

const aux2 = require("./commonJS-aux.js");
console.log(aux2.fy())