/**
 * Range method
 */
// function range(firstNumber, lastNumber, step = 1) {
// const range = function(firstNumber, lastNumber, step = 1) {
const range = (firstNumber, lastNumber, step = 1) => {
  if (firstNumber === lastNumber)
    return({error: "Error: Numbers are the same! Try again with diff numbers."});

  if (firstNumber > lastNumber) {
    const tempFirstNumber = firstNumber;
    firstNumber           = lastNumber;
    lastNumber            = tempFirstNumber;
    step                  = Math.abs(step);
  }

  let result = [];
  for( let count = firstNumber; count <= lastNumber; count += step)
    result.push(count);

  return result;
};


/**
 * Sum method
 * It supposed to receive an array as argument and return the sum of all items of the array
 */
function sum(arrayOfNumbers){
  //it's going to check if there was error in the range function
  if ("error" in arrayOfNumbers)
    return(arrayOfNumbers);

  if (arrayOfNumbers.lenght < 1)
    return("Array is not valid! Try new parameters!");

/** both ways below will throw error "Cannot access 'sum' before initialization" when calling the function before its declaration
 * That means, when using the way above, it will move the function definition to the top of the main program.
*/
// let sum = function(arrayOfNumbers){
// const sum = arrayOfNumbers => {
  let result = 0;
  for (let number of arrayOfNumbers)
    result += number;

  return result;
};

// console.log(sum(range(10, 1, -1)));
// console.log(sum(range(1, 10, 3)));
console.log(sum(range(10, 10, 3)));
