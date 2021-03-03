// do not need this one
// const startingPersist = data => {
//   console.log("starting persist", data);
//   // localStorage.setItem("colors", JSON.stringify(data));
//   // console.log("colorssssss::", localStorage.getItem("colors"));
// };


const getLSData = () => {
  const data = localStorage.getItem("colors") === "undefined" ? "" : JSON.parse(localStorage.getItem("colors"));
  console.log("dataaaaa", data);
  return data || "";
}

const addColorLS = data => {
  localStorage.setItem("colors", JSON.stringify(data));
  console.log("Added color", data);
}


const removeColorLS = data => {
  localStorage.clear();
  localStorage.setItem("colors", JSON.stringify(data))
  console.log("remove Color");
}


const rateColorLS = data => {
  console.log("rate Color");
  localStorage.clear();
  localStorage.setItem("colors", JSON.stringify(data));
}


export {
  getLSData,
  addColorLS,
  removeColorLS,
  rateColorLS
}