console.log("333 - inside Item.js");

function Item({ name, capital }) {
  return (
    <div style = {{ border: "1px solid grey"}}>
      <h3 style = {{ color: "green", margin: "0.5rem" }}>Name: <span><b>{name}</b></span></h3>
      <h3 style = {{ color: "green", margin: "0.5rem" }}>Capital: <span><b>{capital}</b></span></h3>
    </div>
  );
};