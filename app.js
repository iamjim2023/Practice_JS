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

 const employee = {
    name: "jimuel",
    sayHello: function (otherPersonsName) 
    {
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
};
console.log(employee.name);
employee.sayHello("regie");

const toBuy = ["potato","tomato","pizza"];

console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);

const manager = {
    name: "Jim",
    age: 98,
};
console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy = "soon";
console.log(player);

function minusFive(potato){
    console.log(potato - 5);
}
plus(5, 10, 5, 3, 5, 2, 1, 6, 1);

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function (a, b){
        return a - b;
    },
    times: function (a, b){
        return a * b;
    },
    divide: function (a, b){
        return a / b;
    },
    power: function (a, b){ 
        return a ** b;
    },
};
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timeResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timeResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

const age1= parseInt(prompt("How old are you?"));

if(isNaN(age1)){
    console.log("Please write a number.");
}else{
    console.log("Thankyou for writing your age.");
}

