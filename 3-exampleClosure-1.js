function wrapValue(local) {
  console.log("---local:", local);
  // let local = n;
  // return local;
  // return () => local;
  return () => {
    console.log("within wrapValue return statement.");
    return local;
  }
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log("'wrap1()' is equal to", wrap1());
// console.log("'wrap1' is equal to", wrap1);
// console.log(wrap2());