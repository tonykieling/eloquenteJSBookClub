import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import colors from "./data/color-data.json";
import { ColorProvider } from "./components/custom-hooks/color-hooks.js";

// export const ColorContext = createContext();

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);

// render(
//   <ColorContext.Provider value = {{ colors }} >
//     <App />
//   </ColorContext.Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
