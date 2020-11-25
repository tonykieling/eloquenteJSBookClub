// https://medium.com/javascript-in-plain-english/what-do-you-really-know-about-variables-data-types-and-immutability-in-javascript-1730835a9e87
// exercises from medium article

let number  = 78;
let string  = "string test";
let boolean = true;
let undef   = undefined;
let bigInt  = 8n;
let symbol  = Symbol("asd");
let nil     = null;

let arr = [100, 200];
let obj = {a: 1, b: 2};
let func = () => "this is a function";

// (() => {
//   console.log("number:", number, typeof number);
//   console.log("string:", string, typeof string);
//   console.log("boolean:", boolean, typeof boolean);
//   console.log("undef:", undef, typeof undef);
//   console.log("bigInt:", bigInt, typeof bigInt);
//   console.log("symbol:", symbol, typeof symbol);
//   console.log("nil:", nil, typeof nil);
//   console.log("arr:", arr, typeof arr);
//   console.log("obj:", obj, typeof obj);
//   console.log("func:", func.toString(), typeof func);
// })();

const logType = binder => {
  const LOG = console.log;
  if ((typeof binder === "number")
      || (typeof binder === "string")
      || (typeof binder === "boolean")
      || (typeof binder === "symbol")
      || (typeof binder === "bigint")
      && (typeof binder !== "object")
      && (typeof binder !== "null")
      && (typeof binder !== "undefined")
  ) LOG("-", binder,` is a primitive, typeof = ${typeof binder}`);
  else if (Array.isArray(binder)) LOG("- it is an array")& console.table(binder);
  else if (binder !== null && typeof binder === "object") LOG(`type: ${typeof binder},
        frozen: ${Object.isFrozen(binder)},
        sealed: ${Object.isSealed(binder)},
        data: ${JSON.stringify(binder)}
      `)
  else if (typeof binder === "function") LOG(`type: ${typeof binder}
        frozen: ${Object.isFrozen(binder)},
        sealed: ${Object.isSealed(binder)},
        font: ${binder.toString()}
      `)
  else if (binder === null) LOG("- ", binder, "must be NULL")
  else LOG("- ", binder, "must be undefined")

}

logType(number);
logType(string);
logType(boolean);
logType(undef);
logType(bigInt);
logType(symbol);
logType(nil);
logType(arr);
logType(obj);
logType(func);