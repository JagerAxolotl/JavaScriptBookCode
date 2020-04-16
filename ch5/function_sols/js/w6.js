var movies = ["apple", "berry", "cherry", "date", "elderberry"];
var lines = [];

//use anonymous function as a callback
movies.forEach(function (element, index){
    lines[index] = "<p>The movie indexed by " + index + " is " + element + ".</p>";
});

var place = document.getElementById("movies");
place.innerHTML = lines[0] + lines[1] + lines[2] + lines[3] + lines[4];