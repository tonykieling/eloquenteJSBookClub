// I'm = I am
// You're = You are
// He's = he is
// She's = she is

// I'm   => I am
// It's  => It is

// Text: "'I'm the cook,' he said, 'it's my job.'"
// Output: "I'm the cook," he said, "it's my job."


const text = `"'I'm the cook,' he said, 'it's my job.'"`;
// const re = /'([^']*|'([s]*))'/g;
// const re = /(["']) | ([.'])/g;
// const re = /(["'])/g;
const re = /(\"\')/g;
console.log(re.exec(text));
// const output = text.replace(/(\"'), (\")/g, "$2 $1");
const output = text.replace(/(["'])/, "\"");
console.log(text);
console.log(output);
// console.log(`${text}\n${output}`);