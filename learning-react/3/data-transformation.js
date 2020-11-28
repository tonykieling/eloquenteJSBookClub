const letters = ["A", "b", "C", "d", "bees", "abc"];
console.log("### letters", letters);
const stringOfLetters = letters.join("X").split("X");
console.log("stringOfLetter", stringOfLetters);
const onlyAs = letters.filter(e => e[0].toLowerCase() === "a");
console.log("onlyAs", onlyAs);

const functionToCutStartingB = arr => arr.filter(e => e[0].toLowerCase() !== "b");
const cutBs = functionToCutStartingB(letters);
console.log("cutBs:", ("\n\t").trim(), cutBs.join("\n\t"));

const functionAddLetter = arr => arr.map(e => ({name: `letter ${e}`}));
const addLetter = functionAddLetter(letters);
console.log("addLetter", addLetter);

const changeBees = arr => arr.map(e => e === "bees" ? ({name: "honey"}) : ({name: `letter ${e}`}));
const cB = changeBees(letters);
console.log("cB", cB);

console.log("### letters", letters);
