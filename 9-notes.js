// let re1 = new RegExp("abc/");
// let re2 = /abc\+\//;
// console.log(re1, re2, typeof re1);


// console.log(/abc/.test("abcde")); // → true
// console.log(/abc/.test("abxde")); // = false

// console.log(/[0123456789]/.test("in 1992")); // → true
// console.log(/[0-9]/.test("in 1992")); // → true
// console.log(/\d\d+\d*\d?/.test("in 1992")); // → true

/*
    \d Any digit character
    \w An alphanumeric character (“word character”)
    \s Any whitespace character (space, tab, newline, and similar)
    \D A character that is not a digit
    \W A nonalphanumeric character
    \S A nonwhitespace character
    .
*/

// const notBinary = /[^01]/;
// console.log(notBinary.test("1100100010100110")); // → false
// console.log(notBinary.test("1100100010200110")); // → true

// console.log(/'\d+'/.test("'123'")); // → true
// console.log(/'\d+'/.test("''")); // → false
// console.log(/'\d*'/.test("'123'")); // → true
// console.log(/'\d*'/.test("''")); // → true

// let neighbor = /neighbou?r/;
// console.log(neighbor.test("neighbour")); // → true
// console.log(neighbor.test("neighbor")); // → true

// let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateTime.test("1-30-2003 8:45")); // → true

// let cartoonCrying = /boo+(hOo+)+/i;
// console.log(cartoonCrying.test("Boohoooohoohooo")); // → true

// let match = /\d+/.exec("one two 100");
// console.log(match); // → ["100"]
// console.log(match.index); // → 8
// console.log("one two 100".match(/\d+/)); // → ["100"]

// const quotedText = /'([^']+)'/;
// const t = (quotedText.exec("she said 'hello'")); // → ["'hello'", "hello"]
// console.log(t[1]); // → ["'hello'", "hello"]

const names = "Liskov, Barbara\nMcCarthy, John\nWadler, Philip";
console.log(`${names}\n`);
console.log(names.replace(/(\w+), (\w+)/g, "$2 $1"));