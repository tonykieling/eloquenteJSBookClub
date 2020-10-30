const reverse = require("./reverse.js");

const input = (process.argv[2]) || null;
if (!input) console.log("please, type something to reverse");
else {
  const reverseWorld = reverse(input);
  console.log("reverseWorld = ", reverseWorld);
}