export const getEmail = () => {
  console.log("@inside getInfo");
  const email = localStorage.getItem("email");
  return ( email || "no user now" );
};


export const setTime = () => {

};
