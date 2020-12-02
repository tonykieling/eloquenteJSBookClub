/*
const countdown = (numberOfTimes, fn) => {
  fn(numberOfTimes);
  return ((numberOfTimes > 1) ? countdown(--numberOfTimes, fn) : numberOfTimes);
};

countdown(5, console.log);

// from the book
// const countdown = (value, fn) => {
//   fn(value);
//   return value > 0 ? countdown(value - 1, fn) : value;
// };

// countdown(10, value => console.log(value));
*/



// recursion used for searching a specific field within an object
const deepPick = (fields, object = {}) => {
  console.log("fields:", fields, "object:", object);
  const [first, ...remaining] = fields.split(".");
  console.log("first:", first, "remaining:", remaining);
  return remaining.length
    ? deepPick(remaining.join("."), object[first])
    : object[first];
};

const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon"
      }
    }
  }
};

console.log(" =>", deepPick("type", dan), "\n\n"); // "person"
console.log(" =>", deepPick("data.info.fullname.first", dan)); // "Dan"

// ORRRRR
console.log(dan.data.info.fullname.first);
