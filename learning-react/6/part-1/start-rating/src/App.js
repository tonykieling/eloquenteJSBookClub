import React from "react";
import StarRating from "./components/StarRating.js"

const Anything = () => {
  return (
    // <StarRating totalStars = { 8 } />
    // <StarRating />
    // <StarRating style = {{ backgroundColor: "yellow" }}/>
    <StarRating 
      style = {{ backgroundColor: "yellow" }}
      dc = { e => alert("double click") }
      message = "messageeee"
    />
  );
};

export default Anything;