const 
  intial  = 1,
  final   = 100;

for(let count = intial; count <= final; count++){

  if ((count % 3 === 0) && (count % 5 === 0)) {
    console.log(`FizzBuzz (${count})`);
  } else if (count % 3 === 0)
    console.log(`Fizz (${count})`);
  else if (count % 5 === 0)
    console.log(`Buzz (${count})`);
  else
    console.log(`- ${count}`);

}