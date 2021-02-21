import React from "react";
import { FaStar } from "react-icons/fa";

const Star = (props) => {
  // need to understand better why key, which is a property of Star, is not received or how to access it
  console.log("props", props)
  return <FaStar 
    color = { props.selected ? "yellow" : "grey"} 
    onClick = { () => console.log("clicks", props.n) }
  />
};


export default function StarRating({ totalStars = 5 }) { // it receives totalStars from index.js, the default is 5

  const createArray = length => [...Array(length)];
  // it creates an array with length, which in turn is the totalStars received from index.js or the default value

  return createArray(totalStars).map((e, i) => 
    <Star 
      key = { i } 
      selected = { !(i % 2) }
      n = { i }
      // onClick = { () => console.log("clicks") }    // onClick does NOT work in here
    />);
}