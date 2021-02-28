import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm.js";
import { v4 } from "uuid";

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
  };

  // add new color
  const onNewColor = ( title, color ) => {
    const newColors = [ 
      // ...colors, 
      {
        id    : v4(),
        rating: 0,
        title,
        color
      },
      ...colors
    ];
    setColors(newColors);
  };


  return (
    <>
      <AddColorForm 
        onNewColor = { onNewColor }
      />
      
      <ColorList 
          colors        = { colors } 
          onRemoveColor = { removeColor }
          // onRemoveColor = { id => {
          //   const newColors = colors.filter(color => id !== color.id);
          //   setColors(newColors);
          // }}
    
          onRateColor = { onRateColor }
      />
    </>
  ) 
}

// console.log("App", App.toString());