// simple but very specific and hard to scale
const template = "hh:mm:ss tt";
const clockTime = template
  .replace("hh", "03")
  .replace("mm", "33")
  .replace("ss", "33")
  .replace("tt", "PM");

console.log(clockTime);




// /**
//  * an example of composition
//  * it can make no sense, but it is a way to demonstrate how composition works
//  */

// // 1st function
// // this is the first function to run in this present situation
// // it only puts the received argument in a object format
// // date: is the name of the object and its content is the value of that variable
// // it would be possible to run this demonstration without formating to an object shape, 
// //  maybe author only add one more function to have more functions chained
// const createClockTime = date => ({date});
// // const createClockTime = date => date;


// // 2nd function
// // it checks whether the given date is AM or PM
// // it receives a date object, checks its local time (.getHours())
// // and returns an object with the original date, plus AM or PM accordingly
// // **** all functions are pure, because it retuns a new object whithout changing the original received
// const appendAMPM = ({date}) => 
// {
// console.log("date", date);
// console.log("date", date.getHours());
//     return ({
//         date,
//         ampm: (date.getHours() >= 12) ? "PM" : "AM"
//     });
// }
//   // ({
//   //   date,
//   //   ampm: (date.getHours() >= 12) ? "PM" : "AM"
//   // });


// // 3rd function
// // it receives an object called clockTime with contains date and ampm fields
// // this function adds a new field called hours, which is the hours received converted for ampm format,
// // and returns it
// const civilianHours = clockTime => {
//   // console.log("clockTime", clockTime);
//   const hours = clockTime.date.getHours()
//   return {
//     ...clockTime,
//     hours: (hours > 12) ?
//       hours - 12 :
//       hours
//   }
// }


// // 4th function
// // it removes the 'extra' info date
// // after adding ampm and the civilian hour, it is time to clean the extra (and the original) info
// // the delete method get ride of the field date of a new object
// const removeDate = clockTime => {
//   console.log("clockTime::", clockTime);
//   let newTime = {...clockTime}
//   delete newTime.date
//   return newTime
// }


// // Not the best way to compose all of these into one function
// const oneFunction = date =>
//     removeDate(
//         civilianHours(
//             appendAMPM(
//                 createClockTime(date)
//             )
//         )
//     )

// // console.log(oneFunction(new Date()));
// const newInfoAboutDate = oneFunction(new Date("2020-12-03T17:46:31.767Z"));
// console.log("newInfoAboutDate:", newInfoAboutDate);