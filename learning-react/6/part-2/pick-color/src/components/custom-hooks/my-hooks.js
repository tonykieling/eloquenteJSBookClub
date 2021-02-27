import { useState } from "react";

export const useInput = initialstate => {
  const [ value, setValue ] = useState(initialstate);
console.log("initialstate", initialstate)
  return [
    { 
      value,
      onChange: e => setValue(e.target.value)
    },
    () => setValue(initialstate)
  ];
};