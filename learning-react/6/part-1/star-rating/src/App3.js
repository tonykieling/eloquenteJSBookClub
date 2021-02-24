import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// here is the definition of Star component
// it receives props:
//  - selected: if it is true, color is lightgreen
//  - scoreStar: is a function defined in the component invocation which changes the counter of stars (selectedStars)
const Star = props => {
  console.log("props on Star:=", props);
  console.log("scoreStar:::", props.scoreStar.toString());

  return <FaStar 
    color = { props.selected ? "lightgreen" : "gray"} 
    onClick = { () => props.scoreStar() }
  />;
}


const createArray = length => [...Array(length)];
// it creates an array with length, which in turn is the totalStars received from index.js or the default value


export default function StarRating({ totalStars = 5 }) { // it receives totalStars from index.js, the default is 5

  const [selectedStars, setSelectedStars] = useState(0);

  return (
      <div>
        {createArray(totalStars).map((e, i) => {
          // each time onClick in the Star component is fired, that will run scoreStar (below), which in turn executes setSelectedStars
          // when it happnes, change hooks selectedStars and re-runs createArray map function, which rerenders the screen
          console.log("inside loop")
          return <Star 
            key       = { i } 
            selected  = { selectedStars > i}
            scoreStar = { () => setSelectedStars(i + 1)}
          />
        })}

        <p style = {{color: "green"}}>{ selectedStars } of { totalStars } Stars</p>
      </div>
  );
}