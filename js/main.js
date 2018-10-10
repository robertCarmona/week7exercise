console.log("sucess")
var h1 = document.getElementById("h1element");
h1.innerText = "hello";

var showText = document.getElementById("showText");
function displayH3() {
  h1.innerText = showText.value;
  console.log(h1.innerText)
}
