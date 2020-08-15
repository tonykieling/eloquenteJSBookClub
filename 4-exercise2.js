// this function performs a comparison only btw two arguments typed as js objects
const compareObjects = (e1, e2) => {
  console.log("e1:", e1, "e2:", typeof e2)
  const e1Keys = Object.keys(e1);
  const e2Keys = Object.keys(e2);

  // it goes in one way of the object-key-array
  // if there is difference, it returns false
  // otherwise, it checks the other way around
  for (let k of e1Keys)
    if (e1[k] !== e2[k]) return false;

  // it goes in the other way around of the object-key-array
  for (let k of e2Keys)
    if (e2[k] !== e1[k]) return false;

  // when no differences has found, it means the object is deeply equal
  return true;
};


// this is the main function, which compares two arguments
const deepEqual = (item1, item2) => {
  if (item1 === null && item2 === null) return true;

  if (typeof item1 === "object" && typeof item2 === "object")
    // after checking if both arguments are type object,
    // it checks if both objects are diff of null and also undefinied
    //  * for a null value, typeof = object
    // if so, it calls compareObjects and evaluate that, if not, the items are not the same
    return ((item1 && item2) ? compareObjects(item1, item2) : false);
    // return (compareObjects(item1, item2)); //* this is not enough because null is typeof object */

  return (item1 === item2);
};


// test zone
console.log(deepEqual({a: 10, b: 123}, {a: 10, b: 123}) === true);
console.log(deepEqual({a: 10, b: 123}, null) === false);
console.log(deepEqual({a: 10, b: 123}, {a: 10, b: 12345}) === false);
console.log(deepEqual([10, 123], [10, 1232]) == false);
console.log(deepEqual("a: 10, b: 123", "a: 10, b: 123") === true);
console.log(deepEqual("a: 10, b: 123", "a: 10, b: 123X") === false);
console.log(deepEqual("123", 123) === false);
console.log(deepEqual(123, 123) === true);
console.log(deepEqual(undefined, undefined) === true);
console.log(deepEqual(null, null) === true);