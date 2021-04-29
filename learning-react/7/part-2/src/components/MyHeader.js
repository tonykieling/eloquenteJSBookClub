import { Link } from "react-router-dom";

export default function MyHeader() {
  return(
    <div style = {{border : "red 2px solid"}}>
      <Link to="/comp1" style = {{margin: "2rem"}}>Comp1</Link>
      <Link to="/comp2" style = {{margin: "2rem"}}>Comp2</Link>
      <Link to="/cat" style = {{margin: "2rem"}}>Cat</Link>
      <Link to="/mur" style = {{margin: "2rem"}}>MyUserReducer</Link>
    </div>
  );
};