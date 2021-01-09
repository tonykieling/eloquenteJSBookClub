// module.exports = function f(){
//   console.log("this is function f");
//   return "function f";
// }

// module.exports = asd = () => {
//   console.log("asd function");
//   return "ASD"; 
// }

function f(){
  console.log("this is function f");
  return "function f";
}

const asd = () => {
  console.log("asd function");
  return "ASD"; 
}

module.exports = asd;
// module.exports = {
//   f,
//   asd
// };
