console.log("sucess")
// puts h1 in a variable
var h1 = document.getElementById("h1element");
// targets the inner tet of the h1
h1.innerText = "hello";
// gets the input from the search bar and stores it in showText
var showText = document.getElementById("showText");
// this function is linked to the button element
function displayH3() {
  // changes h1 inner text to the users typing
  h1.innerText = showText.value;
  // logs everything h1 has been changed to
  console.log(h1.innerText);
};
// this greats an array with 5 strings
var array1 = ["rob","robert","bob","bobby","robby"];
// this loops through the array logging each item in the array1
for(var i = 0; i < array1.length; i++){
  console.log(array1[i]);
};
// this creates an object
var fruit = {
  color: "green",
  size:"large",
  taste: "sweet"
};
// logging each item on the console
console.log(fruit.color);
console.log(fruit.size);
console.log(fruit.taste);

// this imports each fruits content in a heading variable
var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");
var heading3 = document.getElementById("heading3");

// this displays it in each corresponding heading1

heading1.innerText = fruit.color;
heading2.innerText = fruit.size;
heading3.innerText = fruit.taste;

// this is a varibale with an array and 3 objects inside the array1
var game = [
  {
    name:"Destiny",
    type: "Shooter",
    genre:"Sci-fi"
  },
  {
    name:"GTA",
    type:"Open World",
    genre:"Violence"
  },
  {
    name:"Final Fantasy",
    type:"Role Playing",
    genre:"Fantasy"
  }
]
// this will loop through the array and console log
for(var i=0; i < game.length; i++){
  console.log(game[i].name + " " + game[i].type + " " + game[i].genre + " " );
};
// changes all text insidd body to red
document.body.style.color = "red";
