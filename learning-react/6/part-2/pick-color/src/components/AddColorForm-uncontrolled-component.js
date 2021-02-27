import { useRef } from "react";


/**
 * IT is an   UNCONTROLLED COMPONENT because it is controlled by the DOM instead of React
 */

export default function AddColorFormUC({ onNewColor = f => f }) {
  const txtTitle = useRef();
  const hexColor = useRef();


  const submit = e => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    console.log("title", title);
    console.log("color", color);
    onNewColor(title, color);
    txtTitle.current.value = "";
    hexColor.current.value = "#f9f6f6";
   }

  
  return (
    <form onSubmit = { submit }>
      <input ref = { txtTitle } type="text" placeholder="color title..." required />
      <input ref = { hexColor } type="color" required />
      <button>ADD</button>
    </form>
  );
}

