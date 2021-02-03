// it needs to be running on a server (live)

// const API1 = "local-file.txt";
const API2 = "https://jsonplaceholder.typicode.com/todos/1";
// const API3 = "https://loripsum.net/api/5/short/headers/prude/decorate";

// const listOfLibAndFrameworks = ['React.js', 'Angular', 'Vue.js', 'Node.js', 'underscore.js'];

function ajaxQuery(){
  const ajaxConnection = new XMLHttpRequest();
  ajaxConnection.open("GET", API2, true);

  // ajaxConnection.mode = "no-cors";
  // ajaxConnection.withCredentials = true
  // ajaxConnection.setRequestHeader('Content-Type', 'application/json')
  
  ajaxConnection.onload = function() {
    // onload function will run when .status property is equal to 4 - ready status.
    console.log("ajaxConnection.readyState:", ajaxConnection.readyState, ajaxConnection.status);
    console.log("ajaxConnection.responseText", this.responseText);
    if (ajaxConnection.status == 200) {
      console.log("this.responseText.title", JSON.parse(this.response).title);
      const result = JSON.parse(this.response);

      const destiny = document.querySelector("#main-div");

      // using React
      const newElement = React.createElement("p", {}, result.title);
      ReactDOM.render(newElement, destiny);


      // NO react
      // const newElement = document.createElement("p");
      // newElement.innerText = result.title;
      // destiny.appendChild(newElement);
    }
  }
  ajaxConnection.send();
}

const mainAJAXReactElement = React.createElement(
    "section",
    { className: "js-section" },
    React.createElement( "h1" , null, "AJAX practicing" ),
    React.createElement( "button", {style: {backgroundColor: "blue"}, onClick: () => ajaxQuery()}, "Test"),
    // React.createElement( "div", {id: "main-div", style: { border: "solid 1px red"}}, [])
    React.createElement( "div", {id: "main-div"}, [])
);
  
console.log( "what is the react element 'mainReactElement':", mainAJAXReactElement );
  
ReactDOM.render(mainAJAXReactElement, document.querySelector( '#root' ));