console.log("inside Item.js");

function Item(props) {
  console.log("props from Item:", props);
  return (
    <div>
      <h3>Id: <span><b>{props.id}</b></span></h3>
      <h3>Text: <span><b>{props.text}</b></span></h3>
    </div>
  );
};