import StarRating from "./StarRating.js";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./custom-hooks/color-hooks.js";

export default function Color({ title, color, rating, id, onRemove, onRate }) {

  const { rateColor, removeColor } = useColors();

  return (
    <section style = {{border: "1px gray solid"}}>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating 
        selectedStars = { rating } 
        onRate = { rate => rateColor(id, rate) } 
      />
    </section>
  );
}
