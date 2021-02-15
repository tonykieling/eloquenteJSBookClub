console.log("111 - inside data.js");

let data = [];

(async() => {

  data = await (await fetch("https://restcountries.eu/rest/v2/region/europe")).json();
  console.log("dataXXX", data)
})();