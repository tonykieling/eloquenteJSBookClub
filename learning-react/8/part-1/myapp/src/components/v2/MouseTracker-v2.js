import Mouse from "./Mouse.js";
// import Cat from "./Cat.js";
import Assistant from "./Assistant.js";

export default function MouseTracker() {

  return(
    <div
      style = {{height: "100vh", border: "1px solid green"}}
    >
      <h2>Move the mouse around</h2>
      <Mouse
        myrender = {
          // mouse => {
          //   console.log("inside mouse render");
          //   return <Assistant position = { mouse } />
          // }
          mousePosition => (
              // <Cat position = { mouse } />
              <Assistant position = { mousePosition } />
          )
        }
      />
    </div>
  )
}