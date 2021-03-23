import { FcAssistant } from "react-icons/fc";

export default function Assistant(props) {

  return(
    <>
      <FcAssistant
        style = {{
          position: "absolute", 
          left: (props.position.x + props.position.x * 0.05), 
          top: (props.position.y + props.position.y * 0.05)}}
      />
    </>
  )
}