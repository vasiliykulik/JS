var myCar2 = {
    masSpeed: 70,
    driver: "Net Ninja",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver)
    }
};

myCar2.logDriver();
console.log(myCar2.masSpeed);
myCar2.drive(50,3);
