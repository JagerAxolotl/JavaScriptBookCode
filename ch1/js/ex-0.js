//Search HTML elements whose tag name is 'li' and store their references in 'items'
var items = document.getElementsByTagName('li');
//Prompt the user for an integer between 1 and 3
var input = window.prompt('There are 3 boxes on the page. To open a box, enter a number (1, 2, 3): ');
//Repeat prompting until the user has entered a valid value 
while ( Number.isNaN(parseInt(input)) || (parseInt(input) > 3 || parseInt(input) < 1) ) 
{
  input = window.prompt('Invalid input. You must enter a number (1, 2, 3). Try again: ');
}
//Read user input into 'select'
var select = parseInt(input) - 1;
//Locate the target element
items[select].innerHTML = 'Open...';
//Use JavaScript function, String.concat, to join 'b' and the value in select
var name = 'b'.concat(select);
//Apply the class selector, depending on the value of name: b0 or b1 or b2
items[select].setAttribute('class', name);