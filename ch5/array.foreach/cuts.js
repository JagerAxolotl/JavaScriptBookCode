// The following function draws two color boxes on canvas.
var draw = function() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 70, 70);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 80, 80);
  }
}
//cutRect clears a rectangular area based on two passed values in element and index.
var cutRect = function(element,index) {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(element,element,10,10);//top,right,width,height
}

draw(); //draw two color rectangles
var cuts=[10,20,30,40,50,60,70,80,90,100,110]; //declare an array storing topleft position for three cuts
cuts.forEach(cutRect);//Iterate over every element in cuts,every time,pass both the current element value and index to the function cutRect. 
//That's why you see three little cuts starting from top left corner.

