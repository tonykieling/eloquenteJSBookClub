// const fs = require("fs");

// ### CALLBACK
/**
 * both ways below are valid, using callback directly or handling error by a try/catch
 * 
 * also, it is possible to have it by promises
 */

// fs.rename("test.json", "new.json", (error, success) => {
//   console.log("error:::", error);
//   console.log("success:::", success, "no arguments upon success for fs.rename");
// });


// try{
//   // fs.rename("test.json", "new.json");  
//   fs.renameSync("test.json", "new.json");  //Sync way  
//   console.log("success:::", success, "no arguments upon success for fs.rename");
// } catch(error){
//   console.log("Oooops, no file found");
// }



// ### PROMISES
const fsPromise = require("fs").promises;

//Sync way using promise async/await
const f = async () => {
  try{
    await fsPromise.rename("test.json", "new.json");
  }catch(error) {
      console.log(` :( ERROR:`, error.message);
  }
}

f();
