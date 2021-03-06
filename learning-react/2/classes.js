// this is what it is behand the scenes about classes in javascript

// function Test(x, y){
//   this.x = x;
//   this.y = y
// }

// Test.prototype.print = function() { // => here, prototype adds a the 'print' method to Test
//   console.log(`x = ${this.x}\ny = ${this.y}`);
// }

/**
 * "Functions are objects, and inheritance is handled through the prototype. 
 * Classes provide a syntactic sugar on top of that gnarly prototype syntax:"
 */



// ES2015 brings a 'syntac sugar' for classes declarations on JS
class Test {
  #pv = "private field";
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this._test = "this is a private binder OLD SCHOOL";
    this.#pv = "PV field";
  }
  print(n = 0) {
    console.log(`x = ${this.x}\ny = ${this.y} - received parameter is: ${n} - _test = ${this._test} - private = ${this.#pv}`);
  }

  newValue(x, y, tpv) {
    this.x = x;
    this.y = y;
    this._test = tpv;
  }
}

const xy = new Test(1, 2);
console.log(xy);
console.log(xy.x, xy._test); // this is okay
// console.log(xy.#pv); // error
xy.print(3);
xy.newValue(10, 20, 30);
xy.print();

/*
// extending a class - inheritance
class ExtendedTest extends Test {
  constructor(x, y, extra) {
    super(x, y);
    this.extra = extra;
  }
  print() {
    console.log(`\nExtendedTest subclass print method\nx = ${this.x}\ny = ${this.y}\nextra = ${this.extra}`);
    // super.print(); // in case to use the superclass method
  }
}

const extraTest = new ExtendedTest(10, 20, 88.88);
extraTest.print();
*/