const listOfLibAndFrameworks = ['React.js', 'Angular', 'Vue.js', 'Node.js', 'underscore.js'];

const mainReactElement = React.createElement(
    "section",
    { className: "js-section" },
    React.createElement( "h1", null, "JavaScript Libraries and Frameworks" ),
    React.createElement(
        "ul",
        { className: 'list-lib-frameworks' },
        listOfLibAndFrameworks.map((element, index) => React.createElement('li', { key: index }, element))
    )
);
  
console.log( "what is the react element 'mainReactElement':", mainReactElement );
  
ReactDOM.render(mainReactElement, document.querySelector( '#root' ));