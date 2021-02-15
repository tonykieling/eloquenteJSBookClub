import React from "react";
import Recipe from "./Recipe.js";

console.log( "111- inside Menu");

const Menu = ({ recipes }) => (
  <article>
    <header>
      <h1>Yammy Recipes!</h1>
    </header>
    <div className = "recipes">
      { recipes.map((recipe, i) => (
        <Recipe key = { i } { ...recipe } />
      ))}
    </div>
  </article>
);

export default Menu;