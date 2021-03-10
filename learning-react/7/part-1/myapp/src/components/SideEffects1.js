import React, { useState, useEffect } from "react";

export default function SideEffects1() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");
  // console.log("phrase=>", phrase)

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);

    return ( () => {
      console.log("#@ inside cleanup");
    });
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   console.log(`saved phrase: "${phrase}"`);
  // });

  // useEffect(() => {
  //   console.log(`either val (${val}) or phase (${phrase}) has been changing`);
  // }, [val, phrase]);

  useEffect(() => {
    console.log(`changes only in phrase (${phrase})`);
  }, [phrase]);

  return (
    <>
      <label>Favorite phrase:</label>
      <input
        autoFocus
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}