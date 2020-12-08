var doThings = function(stuff) {
  let result = { arrayOfStuff: [] };
  // if (stuff.length) {
    for (var i = 0; i < stuff.length; i++) {
      const thing = stuff[i];
      result.arrayOfStuff.push(thing);
    }
    // console.log("result", result)
    // console.log("result.", result.arrayOfStuff)
    return result.arrayOfStuff;
  // } else return ("nothing to proceed");

};

console.log(doThings({a: 1}));
// console.log(doThings([
//   {a: "1"},
//   "string",
//   10
//   ])
// );
// This piece of code declares a function to a binder called doThings. In order to run that function, for instance, one needs to invoke it by `doThings('parameters')`.
// About the function: when the argument passed to it is an Array or a String, it will loop through all its items and add them individually to a new array called arrayOfStuff, which is a property of an object called result - declared in the second line.
// After all, it will return only the array part (arrayOfStuff) of that object (result).
// Right now, in case of only calling the function whithout parameters will throw an error because the argument would not have the property 'length'. A possible way to solve it would be checking if 'stuff' variable is valid (meets the condition) and handle this answer accordingly with the system requirements.
// If the parameter is something other than an array or a string, the function will return an empty array.
// Another thing to point in this code is that the loop works in a linear time complexity, which means that it will run the loop for every item and it will scale the time proportionally to the size of the stuff length.
