// https://stackoverflow.com/questions/12593101/javascript-server-sided-dynamic-variable-names/64847491#64847491

// answer for slackoverflow
// One possible solution may be:  
// Using [REST parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), one can create an array and add each dynamic variable (REST parameter item) as an object to that array.

``` javascript
// function for handling a dynamic list of variables using REST parameters
const dynamicVars = (...theArgs) => {
  let tempDynamicVars = [];

  // as long as there are arguments, a new object is added to the array dynamicVars, creating a dynamic object list of variables
  for (let args = 0; args < theArgs.length; args++){
    const vName = `v${args}`;
    tempDynamicVars = [...tempDynamicVars, {[vName]: theArgs[args]}]; //using spread operator
    // dynamicVars.push({[vName]: theArgs[args]}); // or using push - same output
  }
  return tempDynamicVars;
}

// short version from above
// const dynamicVars = (...theArgs) => theArgs.map((e, i) => ({[`v${i}`]: e}));

// checking
const first = dynamicVars("F", 321);
console.log("Dynamic variable array:", first);
console.log(` - ${first.length} dynamic variables`);
console.log(" - second variable in the list is:", first[1], "\n");

console.log(dynamicVars("x, y, z"));
console.log(dynamicVars(1, 2, 3));
console.log(dynamicVars("a", "b", "c", "d"));
```