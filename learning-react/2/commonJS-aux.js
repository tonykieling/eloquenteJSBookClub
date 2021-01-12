
// ways to export using CommonJS (Node's default method)

// variables/binders
// 1
// exports.x = 10;

// 2
// module.exports = x = 10;

// 3
// const x = 10;
// module.exports = {
//   x
// };

// functions
//1
// module.exports = x => 10;

function fx() {
  return "returning from fx";
}
const fy = () => "returning from FY";

// 2
// module.exports = fx, fy;

// 3
module.exports = {
  fx,
  fy
};