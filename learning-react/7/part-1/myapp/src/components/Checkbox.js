import React, { useState, useEffect } from "react";

export default function Checkbox(){
  const [checked, setChecked] = useState(false);

  // eslint-disable-next-line
  useEffect(() => {
    alert (`checked: ${checked.toString()}`);
    return () => console.log("BYEEEE!!");
  }, [checked]);

  return(
    <>
      <span style = {{ paddingRight: "1rem"}}>Checked:</span>
      <input
        type = "checkbox"
        value = { checked }
        onChange = { () => setChecked(checked => !checked)}
        // onChange = { () => setChecked(checked => !checked)}
        // onChange = { () => setChecked(checked => !checked)}
      />
      <span style = {{ paddingLeft: "1rem"}}>
        {checked ? "checked!!" : "not checked still"}
      </span>
    </>
  )
};