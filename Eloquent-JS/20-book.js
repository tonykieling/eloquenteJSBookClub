/////////// NODE
const allTypedLine = process.argv;
console.log("you typed:")
allTypedLine.forEach((e, i) => {
  if (i === 0){
    console.log(`${i + 1}- this is the program to be ran (${e})`);
    return;
  } else if (i === 1){
    console.log(`${i}- this is the file to be read/executed (${e})`);
    return
  }
  console.log(`${i + 1}- ${e}, index = ${i}`);
});


