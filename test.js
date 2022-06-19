var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";

console.log(myCar.driver);

myCar.drive = function () {
    console.log("now driving");
};

myCar.drive();

var myCar2 = {
    masSpeed: 70,
    driver: "Net Ninja",
    drive: function () {
        console.log("now driving");
    }
};

console.log(myCar2.masSpeed);
myCar2.drive();

var myCar2 = {
    masSpeed: 70,
    driver: "Net Ninja",
    drive: function (speed, time) {
        console.log(speed * time);
    }
};

myCar2.drive(50,3);