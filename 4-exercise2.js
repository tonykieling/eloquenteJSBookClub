const compareObjects = (e1, e2) => {
  const e1Keys = Object.keys(e1);
  const e2Keys = Object.keys(e2);

  for (let k of e1Keys)
    if (e1[k] !== e2[k]) return false;

  for (let k of e2Keys)
    if (e2[k] !== e1[k]) return false;

  return true;
};

const deepEqual = (item1, item2) => {
  if (item1 === null && item2 === null) return true;

  if (typeof item1 === "object" && typeof item2 === "object")
    return ((item1 && item2) ? compareObjects(item1, item2) : false);

  return (item1 === item2);
};


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


