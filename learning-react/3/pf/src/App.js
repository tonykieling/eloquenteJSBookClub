import React, { useState, useEffect } from 'react';

const getStateFromLocalStorage = key => {
  const storage = localStorage.getItem(key);
  return ((storage !== "null") ? storage : 0);
};


const storeStateInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};


const Counter = () => {
  const key = "count";
  const getValue = () => Number(getStateFromLocalStorage(key));

  const [count, setCount] = useState(getValue());

  // or this way to do the same as above
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("ONLY ONCE!!!!!!!!!!!!!!");
  //   setCount(getValue());
  // }, []);


  const [message, setMessage] = useState("-");

  
  const increment = () => {
    const newValue = getValue() + 1;
    setCount(newValue);
    storeStateInLocalStorage(key, newValue);
    setMessage("Higher");
  };
  

  const decrement = () => {
    const newValue = getValue() - 1;
    setCount(newValue);
    storeStateInLocalStorage(key, newValue)
    setMessage("Lower");
  }
  

  const reset = () => {
    setCount(0);
    setMessage("-");
  }
  

  useEffect(() => {
    document.title = `Counter: ${count} ${message === "Higher" ? " + Inc" : (message === "Lower" ? " - Dec" : "")}`;
  }, [count, message]);
  

  return (
    <div className="Counter">
      <p>{message}</p>
      <p className="count"><b>{ count }</b></p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};
export default Counter;