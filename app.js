const a = 5;
const b = 10;
let myName = "Jim";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("Hello" + " Jim");

myName = "Jimuel";
console.log("You're name is " + myName);

const amIFat = null;
let something;
console.log(something, amIFat);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// get item from array
const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];
console.log(daysOfWeek);

// add one more day to the aray
daysOfWeek.push("sun");
console.log(daysOfWeek);

const playerName = "Jim";
const playerPoints = "151515";
const playerHandsome = "true";
const playerFat = "False";

const player = {
    name: "jimuel",
    points: 10,
    fat: true,
};
console.log(player);
player.lastname = "Potato";
player.points = player.points + 69,
console.log(player.points);

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHello("Jimuel", 23);
sayHello("Regie", 22);
sayHello("Rj", 29);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
function divide(a, b){
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player = {
    name: "jimuel",
    sayHello: function (otherPersonsName) 
    {
        console.log("helo! " + otherPersonsName + " nice to meet you!");
    },
};
console.sayHello(player.name);
player.sayHello("jimuel");
