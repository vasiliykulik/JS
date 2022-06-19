var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2);
var myFutureDate = new Date(2515, 0, 31);

console.log(myPastDate, 10, 30, 15);
console.log(myFutureDate, 10, 30, 15);

var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
// get the number of milliseconds since 1st Jan 1970
// used to compare two dates
console.log(birthday.getTime());

if(birthday == birthday2){
    console.log("birthdays are equal");
} else {
    console.log("birthdays are not equal");
}
// false we compare links on objects

if(birthday.getTime == birthday2.getTime){
    console.log("birthdays are equal");
} else {
    console.log("birthdays are not equal");
}