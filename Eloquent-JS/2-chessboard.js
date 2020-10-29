const
  line    = 8,
  column  = 8;

let chessboard = "";

for(outLoop = 1; outLoop <= line; outLoop++){
  const comparison = Number((outLoop % 2 === 0) ? 0 : 1);

  for(innerLoop = 1; innerLoop <= column; innerLoop++){
    if ((innerLoop % 2) === comparison)
      chessboard = chessboard + "#";
    else
      chessboard = chessboard + " ";
  }
  
  chessboard = chessboard + "\n";
}

console.log(chessboard);