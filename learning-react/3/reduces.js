// const arr = [
//   {
//     id: 1,
//     name: "Bob",
//     city: "Van"
//   },
//   {
//     id: 2,
//     name: "Alice",
//     city: "Burnaby"
//   },
//   {
//     id: 33,
//     name: "Jef",
//     city: "Van"
//   }
// ];
// console.table(arr);
// console.log(arr, "\n\n");

// // this reduce the changes into an object
// // right way
// const hashPeople = arr.reduce(
//   (hash, {id, name, city}) => {
//     hash[id] = {name, city};
//     return hash;
//   }
//   , {}
// );

// // it does NOT work
// // that means, need to change hash and return hash
// ********* BECAUSE the next hash it is gonna be the return of the previous one, like diff binder 
// const hashPeople = arr.reduce(
//   (hash, {id, name, city}) => 
//   // hash[id] = { name, city } // it is gonna return only the last element
//   { return hash[id] = { name, city } }// it is gonna return only the last element
//   , {});

// console.log("hashPeople", hashPeople);



// reduce used to squish arrays
const arr = [11, 22, 11, 55, 78, 11, 78];
// const arrayOfUniques = arr.reduce((unique, number) => {
//   console.log("unique", unique, "number", number);
//   // return (unique.indexOf(number) !== -1) ? unique : [...unique, number];  // it need to return something to be the next unique value
//   return;
// }, []);

// const arrayOfUniques = arr.reduce((unique, number) => 
//   // (unique.indexOf(number) !== -1) ? unique : [...unique, number]
//   {
//     if (unique.indexOf(number) === -1)
//       unique.push(number);
//     return unique;
//   }
//   , []);

//shortest way
const arrayOfUniques = arr.reduce((unique, number) => 
  (unique.indexOf(number) !== -1) ? unique : [...unique, number], []);
console.log("arrayOfUniques", arrayOfUniques);