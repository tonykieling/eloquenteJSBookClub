import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

import { getLSData, addColorLS, removeColorLS, rateColorLS } from "../../data/persist.js";

const ColorContext = createContext();


export const useColors = () => useContext(ColorContext);


export const ColorProvider = ({ children }) => {

  const [colors, setColors] = useState(getLSData);
  
  const addColor = (title, color) => {
    const newColor = ([ ...colors, { id: v4(), rating: 0, title, color }]);
    setColors(newColor);
    addColorLS(newColor);
  }

  const rateColor = (id, rating) => {
    const updatedColor = colors.map(color => (color.id === id ? { ...color, rating } : color));
    setColors(updatedColor);
    rateColorLS(updatedColor);
  }

  const removeColor = id => {
    const rmColor = colors.filter(color => color.id !== id);
    setColors(rmColor);
    removeColorLS(rmColor);
  } 
    
  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      { children }
    </ColorContext.Provider>
  );
};
