var myString = "I am a string";
var myString = 'I am a "fun" string';
var myString = 'I\'m a "fun" string';

console.log(myString.length);
console.log(myString.toUpperCase);
console.log(myString.toLowerCase);
console.log(myString.indexOf("string"));
console.log(myString.indexOf("ninja"));

if (myString.indexOf("ninja") === -1) {
    console.log("the word ninja is not on the string");
} else {
    console.log("the word ninja starts at position " +
        myString.indexOf("ninja"));
}

9 === 8
9 == 8

var string1 = "abc";
var string2 = "bcd";
console.log(string1 === string2);

var string1 = "abc";
var string2 = "BCD";
console.log(string1.toLowerCase === string2.toLowerCase);

// true, why ???
var string1 = "abc";
var string2 = "bcd";
console.log(string1.toLowerCase === string2.toLowerCase);

// Because of order in alphabet // true
var string1 = "abc";
var string2 = "bcd";
console.log(string1 < string2);

// false
var string1 = "abc";
var string2 = "Bcd";
console.log(string1 < string2);