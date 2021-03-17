// first way
// import { useState } from "react";
// export default function Comp1() {
//   const [checked, setChecked] = useState(false);

//   return (
//     <>
//       <span>Is it checked? </span>
//       <input
//         type = "checkbox"
//         value = { checked }
//         onChange = { () => setChecked(checked => !checked) }
//       />
//       { checked ? "YES" : "NO"}
//     </>
//   );
// }


// second way
// import { useState } from "react";

// export default function Comp1() {
//   const [checked, setChecked] = useState(false);

//   const toggle = () => {
//     setChecked(checked => !checked)
//   };

//   return (
//     <>
//       <span>Is it checked? </span>
//       <input
//         type = "checkbox"
//         value = { checked }
//         onChange = { toggle }
//       />
//       { checked ? "YES" : "NO"}
//     </>
//   );
// }


// // third way
// // setChecked is defined in the useReducer, while checked is the second parameter of useReducer
// import { useReducer } from "react";

// export default function Comp1() {
//   const [checked, setChecked] = useReducer(checked => !checked, false);

//   return (
//     <>
//       <span>Is it checked? </span>
//       <input
//         type = "checkbox"
//         value = { checked }
//         onChange = { setChecked }
//       />
//       { checked ? "YES" : "NO"}
//     </>
//   );
// }


// fourth way
// another usage of useReducer
import { useReducer, useState } from "react";

export default function Comp1() {
  const [number, setNumber] = useReducer((newNumber, currentNumber) =>Number(newNumber) + Number(currentNumber), 0);

  const [toAdd, setToAdd] = useState(0);

  return (
    <div className = "box">
      <span>How much to add? </span>
      <input
        type = "number"
        value = { toAdd }
        onChange = { e => setToAdd(e.target.value) }
      />
      <button
        onClick = { () => setNumber(toAdd, number) }
      >
        Add
      </button>
        { ` ${number}` }
    </div>
  );
}