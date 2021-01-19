const 
  startingAt  = 1,
  endingAt    = 5;

console.log("### imperative way");
let array1 = [];
// creating the array
for (let iterations = startingAt; iterations <= endingAt; iterations++) {
  array1.push(iterations);
}
console.log("array1: ", array1);

// doubling each array's item
let tempArray = [];
for (let i = 0; i < array1.length; i++) {
  tempArray.push(array1[i] * 2);
}

array1 = tempArray;
console.log("array1 after changing:", array1);



console.log("\n### declarative fashion");
// creating the array
let array2 = [ ...(Array((endingAt - startingAt) + 1)).keys()].map(e => e + 1);
console.log("array2:", array2);

// doubling each array's item
array2 = array2.map(e => e * 2);
console.log("array2 after changing:", array2);
