console.log("444 - inside Menu.js");
function Menu(props) {
  console.log("Menu props:", props)
  return (
    <article>
      <h1 style = {{color: "blue"}}>{props.title}</h1>
      <div className = "items">
        {props.items.map((item, i) => 
          (<Item key={i} {...item} />)
        )}
      </div>
    </article>
  );
};
