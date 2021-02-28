import { useState } from "react";


/**
 * IT is a CONTROLLED COMPONENT 
 * because it is controlled by React instead of DOM
 */

export default function AddColorFormUC({ onNewColor = f => f }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");


  const submit = e => {
    e.preventDefault();
    if (color !== "#000000") {
      console.log("title", title);
      console.log("color", color);
      // onNewColor(title, color);  // this is a method received from the component parent used to pass data to it
      alert(`color "${ title } - ${ color }\nwas added`);
      // setTitle("");
      // setColor("#888888");
    }
  }

  
  return (
    <form onSubmit = { submit }>
      <input 
        type        ="text" 
        placeholder ="color title..." required 

        // this is the difference: why an element is controlled.
        // value is the variable and this variable will be changed by a react hook function, called by onChange DOM event
        value       = { title }
        onChange    = { event => setTitle(event.target.value) }
      />

      <input 
        type      = "color" required 

        value     = { color }
        onChange  = { event => setColor(event.target.value)}
      />

      <button>ADD</button>
    </form>
  );
}

