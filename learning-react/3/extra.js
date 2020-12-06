
// trying to test the difference btw math methods
// *in hackerrank, sometimes it may be relevant
// for (let c = 0; c < 10; c++) {
//   console.log("### num * num");
//   console.time("a");
//   console.log([...Array(10000000).keys()].reduce((a, b) => b * b));
//   console.timeEnd("a");
// }

// for (let c = 0; c < 10; c++) {
  // console.log("### num ** 2");
  // console.time("a");
  // console.log([...Array(10000000).keys()].reduce((a, b) => b ** 2));
  // console.timeEnd("a");
// }

// for (let c = 0; c < 10; c++) {
//   console.log("### Math.pow(num, 2");
//   console.time("a");
//   console.log([...Array(10000000).keys()].reduce((a, b) => Math.pow(b, 2)));
//   console.timeEnd("a");
// }


// const v = "something to be checked."
// const v1 = v.split(" ");
// console.log(v1[v1.length - 1])
// console.log(v.slice(1));

// const obj = { bs: 12 };
// function w() {
//   const { bs } = obj;
//   console.log("ah...........", bs);
//   const obj = "something here";
// }
// w();
// // GOTCHA:
// // first, in the creation step, the program list all binders.
// // in the w function context, it declares all variables: bs and obj, initializing each as undefined, 
// //  even though there is the same binder one level above (obj).
// // That means, in the first stage, it does not assign any value for the binder.
// // Because that, it will get an error


var doThings = function(stuff) {
  let result = { arrayOfStuff: [] };
  if (stuff.length) {
    for (var i = 0; i < stuff.length; i++) {
      const thing = stuff[i];
      result.arrayOfStuff.push(thing);
    }
    // console.log("result", result)
    // console.log("result.", result.arrayOfStuff)
    return result.arrayOfStuff;
  } else return ("nothing to proceed");

};

// console.log(doThings({a: 1}));
console.log(doThings([
  {a: "1"},
  "string",
  10
  ])
);
// This piece of code declares a function to a binder called doThings. In order to run that function, one needs to invoke it by doThings('parameters'), for instance.
// About the function: when the argument passed to it is an array or a String, it will loop through all its items and add them individually into a new array, which is a property of an object called arrayOfStuff (declared in the second line).
// After that, it will return only the array part of that object (second line).
// Right now, if in case of only calling the function whithout parameters will throw an error because the argument would not have the property 'length'. A possible way to solve it would be checking if 'stuff' variable is valid and handle the answer accordingly with the system requirements.