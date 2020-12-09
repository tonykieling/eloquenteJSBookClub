
const oneSecond = () => 1000; // this function defines one second as 1000 (which will be miliseconds)


const getCurrentTime = () => new Date(); // get a new date, which will be extract only the time to be shown


const clear = () => console.clear(); // it cleans the screen
// const clear = () => 1; // it cleans the screen


const log = message => console.log(message); // it prints the time


// it receives date and returns time
const serializeClockTime = date => ({
  hours   : date.getHours(),
  minutes : date.getMinutes(),
  seconds : date.getSeconds()
});


// it receives time, checks whether it is AM or PM and added this info to return a new object
const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: (clockTime.hours >= 12) ? "PM" : "AM"
});


// it formats for a 0 - 12 hours clock
const civilianHours = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
});


const display = target => time => target(time);


const formatClock = format => time =>
  format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);


const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key]
  });


const compose = (...fns) => arg =>
  fns.reduce((composed, f) => f(composed), arg);


const convertToCivilianTime = clockTime =>
  compose(
    appendAMPM,
    civilianHours
  )(clockTime);


const doubleDigits = civilianTime =>
 compose(
  prependZero("hours"),
  prependZero("minutes"),
  prependZero("seconds")
)(civilianTime);


// main functions, which sets setInterval and calls compose with all functions
const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  );


startTicking();