import { useState } from "react";

export default function MouseTracker(props) {
  const [position, setPosition] = useState({x: 0, y: 0});

  return(
    <div
      style = {{height: "100vh", border: "1px solid red"}}
      onMouseMove = { event => setPosition({x: event.clientX, y: event.clientY})}
    >
      { props.myrender(position) }
    </div>
  )
}