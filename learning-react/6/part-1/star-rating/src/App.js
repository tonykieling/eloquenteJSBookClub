import React from "react";
import StarRating from "./components/StarRating.js"

const Anything = () => {
  return (
    // <StarRating totalStars = { 8 } />
    // <StarRating />
    // <StarRating style = {{ backgroundColor: "yellow" }}/>
    <StarRating 
      style = {{ backgroundColor: "yellow" }}
      message = "messageeee test"
      onDoubleClick = { e => alert("double click") }
    />
  );
};

export default Anything;