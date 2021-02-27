import StarRating from "./StarRating.js";
import { FaTrash } from "react-icons/fa";

export default function Color({ title, color, rating, id, onRemove, onRate }) {
  // console.log(`color ${color} - rating ${rating}`);
  return (
    <section style = {{border: "1px gray solid"}}>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
      {/* <button onClick={() => console.log("id")}> */}
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars = { rating } onRate = { rate => onRate(id, rate) } />
      {/* <StarRating selectedStars = { rating } onRate = { rate => onRate(id, rate) } totalStars = { 10 } /> */}
      {/* <StarRating selectedStars={rating} onDoubleClick={e => alert("double click")} /> */}
    </section>
  );
}
