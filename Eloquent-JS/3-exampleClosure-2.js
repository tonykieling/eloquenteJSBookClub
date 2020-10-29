function multiplier(factor) {
  console.log("---factor:", factor);
  // return number => number * factor;
  return number => {
    console.log("===number:", number);
    return number * factor;
  }
}

const twice = multiplier(2);
console.log(twice(5));