/**
 * READFILE node's method
 */
// // first case of reading file fs
// const { readFile } = require("fs");
// // readFile("test.txt", "utf8", (error, buffer) => {
// readFile("test.txt", (error, buffer) => {
//   if (error) {
//     console.log(error.message);
//   }
//   else {
//     console.log(`TEXT:\n${buffer}`);
//     console.log("TEXT:\n", buffer);
//     console.log("***** when UTF8 is not passed, realise the diff btw \"\" and \`\` outputs!!! *****\n");
//   } 
// });
const { readFileSync } = require("fs");

// another way to readfile
const x = readFileSync("test.txt", "utf8");
console.log(x)


// const { readFile } = require("fs");
// try{
//   readFile("test.txt", (error, buffer) => {
//     if (error) throw (error.message);
//     else {
//       // console.log("The file contained", buffer.length, "bytes.",
//       // "The first byte is:", buffer[0]);
//       console.log("buffer is:," buffer");
//     }
//   });
// }catch(er){
//   console.log("ERROR MESSAGE:", er);
// }


/**
 * WRITEFILE node's method
 */
// const { writeFile } = require("fs");
// try{
//   writeFile("test.txt", "Node was here! ;)", (error, success) => {
//     if (error) throw(error.message);
//     else{
//       console.log("success", success);
//       const readNewFile = require("fs").readFile;
//       readNewFile("test.txt", (e, t) => {
//         if(e) console.log("EEEE", e);
//         else {
//           console.log("NEW FILE was updated");
//           console.log(t);
//         }
//       })
//     }
//   });
// }catch(error){
//   console.error("ERROR::", error);
// }
