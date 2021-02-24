import React, { useState } from "react";
import Star from "./Star.js";

const createArray = length => [...Array(length)];


export default function StarRating({ style = {}, totalStars = 5, ...props}) {
  console.log("props on StarRating:", props)
  // it receives totalStars from App.js, the default is 5
  // it also may receive as props a CSS style to be applied in some part of the component - below, it has been used in the outer div

  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div 
      style = {{ padding: "5px", ...style }}
      { ...props } 
      // by doing the above line plus receiving '...props' in the parameteres, 
      // this component is gonna be able to receive any property passed down to it
      // check the component caller, in this case, 'App.js'
    >
      {createArray(totalStars).map((e, i) =>
        <Star 
          key       = { i } 
          selected  = { selectedStars > i}
          scoreStar = { () => setSelectedStars(i + 1)}
        />
      )}

      <div style = {{ color: "red" }}>{ selectedStars } of { totalStars } Stars</div>
    </div>
  );
}
