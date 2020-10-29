function findSolution(target) {
  console.log("target", target);

  function find(current, history) {
    console.log(" = current", current, "target", target);
    if (current == target) {
      // console.log("11111111");
      return history;
    } else if (current > target) {
      // console.log("22");
      return null;
    } else {
      // console.log("3333333333");
      // console.log(find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`));
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }

  }

  return find(1, "1");
}

console.log(findSolution(15));
