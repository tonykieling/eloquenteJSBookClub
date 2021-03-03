import { useState } from "react";

export const useInput = initialstate => {
  /**
   * this function will return an array which contains:
   *  1- the DOM properties for an HTML element
   *  2- the method which changes that particular element
   */
  const [ value, setValue ] = useState(initialstate);
  return [
    { 
      value,
      onChange: e => {
        setValue(e.target.value);
      },
      // onClick: _ => console.log("clicked") // as many as DOM elements needed
    },
    () => setValue(initialstate)
  ];
};