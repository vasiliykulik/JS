
var colourChanger = document.getElementById("colour-changer");
var colours = ["red", "green", "blue", "pink"];
var counter = 0;

function changeColour() {
    if (counter >= colours.length) {
        counter = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}

var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function () {
    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped";
}


// var myMessage = document.getElementById("message");

// function showMessage(){
//     myMessage.className = "show";

// }

// setTimeout(showMessage, 3000); // once

var num = 2;
function func(num) {
    var num;
    console.log(num);
    num = 5;
}
func(10);
console.log(num);

(function () {
    console.log(1);
    setTimeout(function () {console.log(2);}, 1000);
    setTimeout(function () {console.log(3);}, 0);
    console.log(4);
})();


console.log(+"1"+"1"+"2");
console.log("A"-"B"+"2");
console.log("A"-"B"+2);


function func(x){
    console.log(typeof x);
    console.log(arguments.length);
}

func();
func('1','2','3');

const b = {}
console.log(b == b);
console.log(typeof null == 'object');

const a = NaN
console.log(a == a);

console.log(!![] == true);