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