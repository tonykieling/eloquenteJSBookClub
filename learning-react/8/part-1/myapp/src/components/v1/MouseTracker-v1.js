import { useState } from "react";
import { FaCat } from "react-icons/fa";

export default function MouseTracker() {
  const [position, setPosition] = useState({x: 0, y: 0});

  return(
    <div
      style = {{height: "100vh", border: "1px solid green"}}
      onMouseMove = { event => setPosition({x: event.clientX, y: event.clientY})}
    >
      <FaCat
        style = {{position: "absolute", left: (position.x + position.x * 0.05), top: (position.y + position.y * 0.05)}}
      />
    </div>
  )
}