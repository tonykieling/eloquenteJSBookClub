import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, scoreStar = null}) =>
  <FaStar 
    color = { selected ? "lightgreen" : "gray"} 
    onClick = { () => scoreStar() }
  />;


const createArray = length => [...Array(length)];


export default function StarRating({ totalStars = 5 }) { // it receives totalStars from index.js, the default is 5

  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((e, i) =>
        <Star 
          key       = { i } 
          selected  = { selectedStars > i}
          scoreStar = { () => setSelectedStars(i + 1)}
        />
      )}

      <p style = {{color: "green"}}>{ selectedStars } of { totalStars } Stars</p>
    </>
  );
}