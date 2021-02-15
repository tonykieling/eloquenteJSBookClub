console.log("222 - inside Item.js");

function Item({ id, name, contact }) {
  return (
    <div style = {{ border: "1px solid grey"}}>
      <h3 style = {{ color: "green", margin: "0.5rem" }}>Id: <span><b>{id}</b></span></h3>
      <h3 style = {{ color: "green", margin: "0.5rem" }}>Name: <span><b>{name}</b></span></h3>
      {(contact && (contact.length > 0)) 
        ? 
          contact.map((e, i) =>
            <h3 key = {i} style = {{ color: "green", margin: "0.5rem" }}>{ Object.keys(e) }: <span><b>{ Object.values(e) }</b></span></h3>)
        :
          <h3 style = {{ color: "red", margin: "0.5rem" }}> No contact info at all</h3>
      }
    </div>
  );
};