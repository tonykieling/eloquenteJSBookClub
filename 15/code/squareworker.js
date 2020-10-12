addEventListener("message", event => {
  console.log("inside squareworker!!!!!!!");
  postMessage(event.data * event.data);
});