// console.log(Object.keys({x: 0, y: 0, z: 2}));

// const objectA = {a: 1, b: 2};
// console.log(objectA);
// Object.assign(objectA, {b: 3, c: 4});
// console.log(objectA);

// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};
// console.log(object1 == object2);
// console.log(object1 == object3);
// object1.value = 15;
// console.log(object2.value);
// console.log(object3.value);

//array
// function remove(array, index) {
//   return array.slice(0, index)
//   .concat(array.slice(index + 1));
// }
// console.log(remove(["a", "b", "c", "d", "e"], 2));

//string
// console.log("coconuts".slice(4, 7));
// console.log("coconut".indexOf("ut"));
// console.log("   okay \n    ");
// console.log("   okay \n    ".trim());
// console.log(String(6).padStart(3, "0"));
// console.log("LA".repeat(3));

// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join(". "));

// Rest parameters
// function max(...numbers) {
// console.log("numbers", numbers, typeof numbers)
//   let result = -Infinity;
// console.log("result", result, typeof result)
//   for (let number of numbers)
//     (number > result) && (result = number);
//   return result;
// }
// console.log(max(4, 1, 9, -2));

// const numbers = [5, 1, 7];
// console.log("numbers:", numbers, "...numbers:", ...numbers)
// console.log(max(...numbers));

/*The Math object is used as a container to group a bunch of related function-
ality. There is only one Math object, and it is almost never useful as a value.
Rather, it provides a namespace so that all these functions and values do not
have to be global bindings.*/
// console.log(Math.PI)
// const number = - Math.random();
// console.log("initial number is", number)
// console.log("Math.floor for number:", Math.floor(number));
// console.log("Math.floor for number * 10:", Math.floor(number * 10));
// console.log("Math.ceil for number * 10:", Math.ceil(number * 10));
// console.log("Math.round for number * 10:", Math.round(number * 10));
// console.log("Math.abs for number * 10:", Math.abs(number * 10));

/** Destructuring */
// let { name } = {name: "Faraji", age: 23};
// console.log(name);
// let myArray = ["One1", "Two22", "Three333"];
// const [firstItem, b, c] = myArray
// console.log("firstItem:", firstItem)

/** JSON */
const myObj = {
  squirrel: false,
  events: ["weekend"]
};
const string = JSON.stringify(myObj);
console.log(string);
console.log(JSON.parse(string).events);
console.log(JSON.parse(string));


