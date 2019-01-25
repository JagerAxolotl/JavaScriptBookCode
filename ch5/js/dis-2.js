//The following three lines: identify all elements whose tag value is "h1", use array notation to get the first h1, access its style property to change its fontsize and color. The details are covered in the later chapters. You can play with fontsize and color. 

var headers = document.getElementsByTagName("h1");
headers[0].style.fontSize = "2em";
headers[0].style.color = "#fff";

//declare function printSlogan1
function printSlogan1(){
  var place = document.getElementById("fun");
  place.innerHTML = "<p>" + "Don't live in others lives" + "</p>";
}

//declare function printSlogan2
function printSlogan2(slogan){
  var place = document.getElementById("fun");
  place.innerHTML = "<p>" + slogan + "</p>";
}

//declare function printSlogan3
function printSlogan3(place, slogan){
  place.innerHTML = "<h2>" + slogan + "</h2>";
}

//test each function one after the other
//make a function call to printSlogan1
//make a function call to printSlogan2
//make a function call to printSlogan3

