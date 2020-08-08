/**
 * Range method
 */
// function range(firstNumber, lastNumber, step = 1) {
// const range = function(firstNumber, lastNumber, step = 1) {
const range = (firstNumber, lastNumber, step = 1) => {
  let result = [];
  for( let count = firstNumber; count <= lastNumber; count += step)
    result.push(count);

  return result;
};


/**
 * Sum method
 */
function sum(arrayOfNumbers){
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

console.log(sum(range(1, 10, 3)));
