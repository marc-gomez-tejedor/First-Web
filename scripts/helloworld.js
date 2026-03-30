"use strict"

alert("hello");
alert("world");

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

// ask for age, defaults 18
let title = "hi visitor leave your age here";
let result = prompt(title, 18);
alert(`your age is ${result} years old`);

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

let apples = "2";
let oranges = "3";

alert(apples + oranges ); // "23", the binary plus concatenates strings
alert( +apples + +oranges ); // "5" unary + converts to num then binary + adds 

alert("2" > 12);
alert("2" > "12");