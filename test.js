var a = "5";
var b = 5;
console.log(a * b);

var a = "apple";
var b = 5;
console.log(a * b);

var a = "apple";
var b = 5;

if (isNaN(a)) {
    console.log("that int even a number, thickie");
} else {

    console.log("meaning of life is " + (a * b));
}

var a = 6;
var b = 5;

if (isNaN(a)) {
    console.log("that int even a number, thickie");
} else {

    console.log("meaning of life is " + (a * b));
}

// "double negative"
if (!isNaN(a)) {
    console.log("meaning of life is " + (a * b));
}