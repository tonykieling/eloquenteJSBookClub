import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor }) {
  if(!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {
        colors.map(color => <Color 
          key={color.id} 
          {...color} 
          onRemove = { id => onRemoveColor(id) } 
          onRate = { (id, rate) => onRateColor(id, rate) }
        />)
      }
    </div>
  );
}
