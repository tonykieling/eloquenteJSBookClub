import React from "react";
import Ingredients from "./Ingredients.js";

console.log( "333- inside IngredientsList");

export default function IngredientsList({ list }) {
  return (
    <ul className = "ingredients">
      { list.map((item, i) =>
        <Ingredients key = { i } {...item} />
      )}
    </ul>
  );
};