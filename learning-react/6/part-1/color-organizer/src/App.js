import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./components/ColorList.js";

export default function App() {
  const [ colors, setColors ] = useState(colorData);
  
  // remove color item
  const removeColor = id => {
    const newColors = colors.filter(color => id !== color.id);
    setColors(newColors);
  };

  // rate color
  const onRateColor = (id, rating) => {
    const newColors = colors.map(color => (id === color.id) ? {...color, rating} : color);
    setColors(newColors);    
  }

  return <ColorList 
      colors        = { colors } 
      onRemoveColor = { removeColor }
      // onRemoveColor = { id => {
      //   const newColors = colors.filter(color => id !== color.id);
      //   setColors(newColors);
      // }}

      onRateColor = { onRateColor }
      // onRateColor = { (id, rate) => {
      //   console.log("onRateColor:", id, rate);
      //   const newColors = colors.map(color => (id === color.id) ? {...color, rating: rate} : color);
      //   console.log("newColors===>", newColors)
      //   setColors(newColors);
      // }}
  />;
}

