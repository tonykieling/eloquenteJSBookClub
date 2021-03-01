import React from "react";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm.js";

export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  ) 
}

// console.log("App", App.toString());