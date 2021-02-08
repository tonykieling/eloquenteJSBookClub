function Menu(props) {
  // console.log("props from MainComponent:", props);
  return (
    <article>
      <h1 style = {{color: "red"}}>{props.title}</h1>
      <div className = "items">
        {props.items.map((item, i) => 
          (<Item key={i} {...item} />)
        )}
      </div>
    </article>
  );
};
