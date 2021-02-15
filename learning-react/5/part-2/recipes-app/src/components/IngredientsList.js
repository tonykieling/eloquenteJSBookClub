import React from "react";
import Ingredients from "./Ingredients.js";

export default IngredientsList = (({ list }) => (
  <ul className = "ingredients">
    { list.map((item, i) =>
      <Ingredients key = { i } {...item} />
    )}
  </ul>
  )
);