const triangleHeight = 7;

for(mainLoop = 1; mainLoop <= triangleHeight; mainLoop++){
  let triangleContent = "";

  for(internalLoop = 1; internalLoop <= mainLoop; internalLoop++)
    triangleContent = triangleContent + "#";

  console.log(triangleContent);
}
