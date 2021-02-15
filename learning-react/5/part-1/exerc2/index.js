// console.log("React", React);
// console.log("inside index.js and data is equal to:", data);
// console.log("Menu", Menu);
// console.log("Item", Item);


console.log("555 - inside index.js");
console.log("data in index.js", data)

ReactDOM.render(
  <Menu items = { data } title = "# Europe Countries #" />,
  document.querySelector("#root")
);
