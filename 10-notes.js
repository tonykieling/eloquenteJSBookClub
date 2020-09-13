// const weekDay = function() {
//   const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   return {
//     name(number) { return names[number]; },
//     number(name) { return names.indexOf(name); }
//   };
//   }();
// console.log(weekDay.name(weekDay.number("Sunday"))); // → Sunday
// console.log(weekDay.number(weekDay.name(1))); // → Sunday
// console.log(weekDay.name(3)); // → Sunday

let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4));

let print = Function("n", "console.log(`You sent: \"${n}\"`);");
print("asd")

