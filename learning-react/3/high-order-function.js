// const ifExecution = (condition, ifIsTrue, ifIsFalse) => {
//   // console.log(condition.toString());
//   console.log(ifIsTrue.toString());
//   console.log(ifIsFalse.toString());
//   condition ? ifIsTrue() : ifIsFalse();
// };

// ifExecution((1 === 1), () => console.log("this is a callback for TRUE"), () => {
//   const dt1 = new Date();
//   const dt2 = new Date();
//   console.log(dt1.getTime() + dt2.getTime());
// });



const getFakeMembers = () => Promise.reject("1");

// const userLogs = userName => message => console.log(`${userName} -> ${message}`);
const userLogs = userName => (message = "asd") => {
  console.log(`${userName} -> ${message}`);
  (message === "asd") && console.log("message got a default value = ", message);
};

const log = userLogs("grandpa23");

log();
// log("attempted to load 20 fake members");

getFakeMembers(20).then(
  members => log(`successfully loaded ${members.length} members`),
  error => log("encountered an error loading members")
);