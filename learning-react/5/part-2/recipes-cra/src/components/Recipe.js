import React from "react";
import Instructions from "./Instructions.js";
import IngredientsList from "./IngredientsList.js";

console.log( "222- inside Recipe");


export default function Recipe({ name, ingredients, steps}) {
  console.log("----- ingredients", ingredients, "steps", steps);
  return (
    <section id = { name.toLowerCase().split(" ").join("-") }>
      <h1> { name } </h1>
      <IngredientsList list = { ingredients } />
      <Instructions title = "Cookie Instructtions" steps = { steps } />
    </section>
  );
};