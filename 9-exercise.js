// Text: "'I'm the cook,' he said, 'it's my job.'"
// Output: "I'm the cook," he said, "it's my job."


const text = `"'I'm the cook,' he said, 'it's my job.'"
"'He's the janitor,' she said, 'it's his job.'"
"'They're the doctor,' he said, 'it's their job.'"`;

const output = text.replace(/"'/g, "\"").replace(/.'"/g, "\.\"").replace(/\,\'/g, "\,\"").replace(/ \'/g, " \"");

console.log(`--- ORIGINAL TEXT:\n${text}\n\n--- CHANGED:\n${output}`);
