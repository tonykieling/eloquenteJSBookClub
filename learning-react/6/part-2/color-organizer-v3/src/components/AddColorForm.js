import { useInput } from "./custom-hooks/my-hooks.js";
import { useColors } from "./custom-hooks/color-hooks.js";

/**
 * IT is a CONTROLLED COMPONENT 
 * because it is controlled by React instead of DOM
 */

export default function AddColorFormUC({ onNewColor = f => f }) {
  const [ titlePros, resetTitle ] = useInput("");
  const [ colorPros, resetColor ] = useInput("#ffffff");

  const { addColor } = useColors();

  const submit = e => {
    e.preventDefault();
    if (colorPros.value !== "#ffffff") {
      addColor(titlePros.value, colorPros.value);  // this is a method received from the component parent used to pass back data to it
      resetTitle();
      resetColor();
    }
    else console.log("try again");
  }

  
  return (
    <form onSubmit = { submit }>
      <input 

        { ...titlePros }  // the first item of the array returned by useInput is a set of DOM properties
        type        = "text" 
        placeholder = "color title..." required 

        // // this is the difference: why an element is controlled.
        // // value is the variable and this variable will be changed by a react hook function, called by onChange DOM event
        // value       = { title }
        // onChange    = { event => setTitle(event.target.value) }
      />

      <input 
        { ...colorPros }
        type      = "color"
        required 
      />

      <button>ADD</button>
    </form>
  );
}

