const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false
};

const selfEducate = person => 
{ // NOT pure function
  person.canRead = true;
  person.canWrite = true;
  return person;
};
// pure function
// ({...person, canRead: "YEAH"}); // Option 1
// { // Option 2
//   let personCopy = JSON.parse(JSON.stringify(person));
//   personCopy.canRead = "MAYBE";
//   return(personCopy);
// }

console.log(selfEducate(frederick));
console.log(frederick);

/**
 * When an array or object are passed to a function, it does via reference.
 * It means all change in the reference will change the original variable.
 * PAY ATENTIOM!!!!
 * 
 * On the other hand, primitives are passed as values!
 * 
*/

