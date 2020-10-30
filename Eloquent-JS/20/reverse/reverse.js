const reverse = string => {
  console.log("string in reverse.js = ", string);
  return Array.from(string).reverse().join("");
};

module.exports = reverse;