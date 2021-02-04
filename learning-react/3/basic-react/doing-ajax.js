// it needs to be running on a server (VSCode live)

// const API = "local-file.txt";
const API = "https://jsonplaceholder.typicode.com/todos/1";
// const API = "https://loripsum.net/api/5/short/headers/prude/decorate";


function ajaxQuery(){
  const ajaxConnection = new XMLHttpRequest();
  ajaxConnection.open("GET", API, true);
  
  ajaxConnection.onload = function() {
    // onload function will run when .status property is equal to 4 - ready status.

    if (ajaxConnection.status == 200) {
      // console.log("this.responseText.title", JSON.parse(this.response));
      console.log("this.responseText.title", this.response);
      // const result = JSON.parse(this.response);
      const result = this.response;

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



const test = () => {
  
  // const myRequest = new XMLHttpRequest()
  // myRequest.open("GET", "https://loripsum.net/api/5/short/headers/prude/decorate");
  
  // myRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
  
  // myRequest.onload = () => console.log("myRequest.response ===>", myRequest.response);
  
  // myRequest.send();
  

  // const myHeaders = new Headers();
  // myHeaders.append("Access-Control-Allow-Origin", "*");
  // myHeaders.append("Access-Control-Request-Headers", "Content-Type, Accept");
  // myHeaders.append("Content-Type", "application/json");
  
  const myRequest = new Request(API, {
    method: 'GET',
    // headers: myHeaders,
    mode: 'no-cors'
  });
  
  fetch(myRequest)
    // .then(r => r.json())
    .then(response => console.log("response::", response))



  // fetch(myRequest)
  //   .then(response => response.json())
  //   // .then(data => console.log(data));

}

test();

  
ReactDOM.render(mainAJAXReactElement, document.querySelector( '#root' ));