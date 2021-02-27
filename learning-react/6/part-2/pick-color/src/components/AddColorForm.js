// import { useState } from "react";
import { useInput } from "./custom-hooks/my-hooks.js";

/**
 * IT is an CONTROLLED COMPONENT 
 * because it is controlled by React instead of DOM
 */

export default function AddColorFormUC({ onNewColor = f => f }) {
  // const [title, setTitle] = useState("");
  // const [color, setColor] = useState("#000000");
  const [ titlePros, resetTitle ] = useInput("");
  // const [ colorPros, resetColor ] = useInput("#222222");
  const [ colorPros, resetColor ] = useInput("#ffffff");

  const submit = e => {
    e.preventDefault();
    if (colorPros.value !== "#222222") {
      console.log("title", titlePros);
      console.log("color", colorPros);
      // onNewColor(titlePros.value, colorPros.value);  // this is a method received from the component parent used to pass data to it
      console.log("color ", titlePros, colorPros, "was added");
      // setTitle("");
      // setColor("#888888");
      resetTitle();
      resetColor();
    }
    else console.log("try again");
  }

  
  return (
    <form onSubmit = { submit }>
      <input 

        { ...titlePros }
        type        ="text" 
        placeholder ="color title..." required 

        // // this is the difference: why an element is controlled.
        // // value is the variable and this variable will be changed by a react hook function, called by onChange DOM event
        // value       = { title }
        // onChange    = { event => setTitle(event.target.value) }
      />

      <input 
        { ...colorPros }
        type      = "color" 
        // value     = { color }
        // onChange  = { event => setColor(event.target.value)}
        required 
      />

      <button>ADD</button>
    </form>
  );
}

