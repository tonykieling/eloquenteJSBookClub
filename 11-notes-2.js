const x = (v = new Date().getTime()) => (resolve, reject) => {
  // console.log("resolve: ", resolve.toString());
  console.time(v);
  setTimeout(() => {
    process.stdout.write("\t- ");
    console.timeEnd(v);
    resolve('foo + ' + v);
  }, 300);
}

const promise1 = p => new Promise(x(p));

// promise1()
//   .then(value => {
//     console.log("\tthen:" + value); // expected output: "foo"
//   });

// console.log("1:", promise1(x()));


(async() => {
    // const r = [1, 2, 3].map(async e => {
    //   console.log("- number: " + e);
    //   const v = await promise1(e);
    //   return v;
    // });
    // const y = await Promise.all(r);
    // console.log("result: " + y);
    
    
    [ ...Array(10).keys() ].forEach(e => console.log(e));
    setTimeout(() =>
    console.log("timeout")
    , 0);
    // console.log(await promise1(789));
    console.time();
    [ ...Array(10000000).keys() ].forEach(e => (e % 500000 === 0) && console.log("-" + e));
    console.timeEnd();

})();