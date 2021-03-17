import { 
  // useState
  // , 
  useReducer 
} from "react";

  const firstUser = {
    id: "0391-3233-3201",
    firstName: "Bill",
    lastName: "Wilson",
    city: "Missoula",
    state: "Montana",
    email: "bwilson@mtnwilsons.com",
    admin: false
  };

export default function Comp2(){
  // using useState to manage state
  // const [user, setUser] = useState(firstUser);

  // using useReducer to manage state
  // by default, useReducer receives two parameters and the FIRST ONE is the current state of that particular object
  // that means, when calling 'setUser', only the attribute to be changed can be passed
  const [user, setUser] = useReducer((user, newData) => ({...user, ...newData}), firstUser);

  return (
    <div className = "box">
      <h2>
        { user.firstName } { user.lastName }
      </h2>

      <button
        onClick = { () => setUser({firstName: "Bob"})}
      >
        Update
      </button>
      {/* { console.log("user", user)} */}
    </div>
  );
}
