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