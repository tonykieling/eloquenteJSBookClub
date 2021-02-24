import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, scoreStar = null}) =>
  <FaStar 
    color = { selected ? "lightgreen" : "gray"} 
    onClick = { () => scoreStar() }
  />
;

export default Star;