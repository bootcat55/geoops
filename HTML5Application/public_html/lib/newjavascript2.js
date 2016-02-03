/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//import js library


//creating a variable that is an object with multiple properties
var Obama = {
    age: 54,
    eyes: "black",
    likes: ["Politics", "Golf"],
    isCool: true,
    university: {
        state: "Columbia",
        graduate: "Harvard Law"
    }
};
// while loop
while(Obama.age <= 75){
  console.log(Obama.age);
    Obama.age++;
}
//creating an object that is a function
var State = function(name, electoral, lean){
  this.name = name;
  this.electoral = electoral;
  this.lean = lean;
};

var stateTexas = new State("Texas", 38, "republican");
var stateCalifornia = new State("California", 55, "democrat");
var stateNewyork = new State("New York", 29, "democrat");
var stateFlorida = new State("Florida", 29, "tossup");
//testing
console.log(Obama);

//Almost every array will have a loop
	// Array:
var arrStext = [stateTexas, stateCalifornia, stateNewyork, stateFlorida];
	//Loop attached to array:
var stextNum = 0;
while(stextNum < arrStext.length){console.log(arrStext[stextNum]);
	stextNum++;
};

//interactivity
window.displayState = function() {
   console.log(stateTexas);
};
