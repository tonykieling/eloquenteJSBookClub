// simple but very specific and hard to scale
// const template = "hh:mm:ss tt";
// const clockTime = template
//   .replace("hh", "03")
//   .replace("mm", "33")
//   .replace("ss", "33")
//   .replace("tt", "PM");

// console.log(clockTime);

const compose = (...fns) => arg =>
  fns.reduce((composed, f) => f(composed), arg);

const both = compose(
  civilianHours,
  appendAMPM
);

both(new Date());

