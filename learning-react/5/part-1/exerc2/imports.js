console.log("222 - inside imports.js");


// import { useEffect } from 'https://unpkg.com/htm/preact/standalone.module.js';
// import { useEffect } from "https://unpkg.com/preact/hooks/dist/hooks.module.js?module";
import { useEffect } from 'https://cdn.skypack.dev/preact/hooks';

useEffect(() => {
  console.log("inside useeffect");
  console.log("data=>", data);
}, [data])

