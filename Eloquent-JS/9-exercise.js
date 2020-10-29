// Text: "'I'm the cook,' he said, 'it's my job.'"
// Output: "I'm the cook," he said, "it's my job."


const input = `"'I'm the cook,' he said, 'it's my job.'"
"'He's the janitor,' she said, 'it's his job.'"
"'They're the doctor,' he said, 'it's their job.'"`;

const output = input.replace(/"'/g, "\"").replace(/.'"/g, "\.\"").replace(/\,\'/g, "\,\"").replace(/ \'/g, " \"");

console.log(`--- ORIGINAL TEXT:\n${input}\n\n--- CHANGED:\n${output}\n\n`);


/*
* book's solution
*/
console.log("Book's solution:");
let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/A/g, "B")); // → "I'm the cook," he said, "it's my job."