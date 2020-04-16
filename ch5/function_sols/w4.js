var unitCosts = [0.99,2.99, 1.99, 3.49, 9.99];
	
function listPrice(index) {
    var str = 'The unit price at position ' + index + ' is $' + unitCosts[index] +".";
    return str;
}

//1. Array.forEach with callback
unitCosts.forEach(function (element, index){
    console.log(listPrice(index));
});

//2. OR generate each line and join them afterwards
var lines= [];
lines[0] = listPrice(0);
lines[1] = listPrice(1);
lines[2] = listPrice(2);
lines[3] = listPrice(3);

var newline = "\n";

var mylog = lines[0] + newline + lines[1] + newline + lines[2] + newline + lines[3];
console.log(mylog)
