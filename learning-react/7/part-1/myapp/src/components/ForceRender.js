import { useState, useEffect } from "react";

export default function ForceRender() {
  const useAnyKeyToRender = () => {
    const [, forceRender] = useState();

    useEffect(() => {
      console.log("running useEffect");
      window.addEventListener("keydown", forceRender);
      return () => {
        console.log("removing useEffect");
        window.removeEventListener("keydown", forceRender);
      }
    }, []);
  };

  useEffect(() => console.log("fresh render"));

  useAnyKeyToRender();

  return <h1> Use any key </h1>
}