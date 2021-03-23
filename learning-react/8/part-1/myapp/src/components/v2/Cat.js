import { FaCat } from "react-icons/fa";

export default function Cat(props) {
  
  return(
    <>
      <FaCat
        style = {{
          position: "absolute", 
          left: (props.position.x + props.position.x * 0.05), 
          top: (props.position.y + props.position.y * 0.05)}}
      />
    </>
  )
}