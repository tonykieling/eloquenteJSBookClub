// // the code below rerenders completely, each cat item every time a new one is added
// import { useState } from "react";

// const Cat = ({ name }) => {
//   console.log("cat:", name);
//   return <p>Cat's name is: { name }</p>
// }

// export default function Cats(){
//   const [cat, setCat] = useState(["itch", "prego", "big"]);

//   return(
//     <div className = "box">
//       {cat.map((e, index) => 
//         <Cat 
//           key = { index }
//           name = { e } />)}
//       <button
//         onClick = { () => setCat([...cat, prompt("New cat's name?")])}
//       >
//         Add Cat
//       </button>
//     </div>
//   )
// }


// the code below renders only the new cat when it is added
import { useState, memo } from "react";

const Cat = ({ name }) => {
  console.log("cat:", name);
  return <p>Cat's name is: { name }</p>
}

const CatPureComponent = memo(Cat);

export default function Cats(){
  const [cat, setCat] = useState(["itch", "prego", "big"]);

  return(
    <div className = "box">
      {cat.map((e, index) => 
        <CatPureComponent 
          key = { index }
          name = { e } />)}
      <button
        onClick = { () => setCat([...cat, prompt("New cat's name?")])}
      >
        Add Cat
      </button>
    </div>
  )
}