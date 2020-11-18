//1. Single digit random number
{
let randomNumber = Math.floor(Math.random() * 10);
console.log("Single digit number : "+randomNumber);
}
console.log("---------------");

//2. Dice Number
{
let randomNumber = (Math.floor(Math.random() * 10) % 6)+1;
console.log("Dice Number : "+randomNumber);
}
console.log("---------------");

//3.Sum of two numbers on dice
{
let number1 =  (Math.floor(Math.random() * 10) % 6)+1;
let number2 =  (Math.floor(Math.random() * 10) % 6)+1;
let sum = number1+number2;
console.log("First number : "+number1);
console.log("Second number : "+number2);
console.log("Sum : "+sum);
}
console.log("---------------");

//4.Find sum and average of five random numbers
{
let sum = 0;
for(i = 0;i < 5; i++)
{
    let number = Math.floor(Math.random() * 90) + 10;
    sum = sum + number;
}
let average = sum/5;
console.log("Sum : "+sum);
console.log("Average : "+average);
}
console.log("---------------");

//5.Unit Conversion
console.log("42 inches is "+ InchesToFeet(42)+" feet");

let length = 60; //feet
let breadth = 40; //feet
let area = FeetToMeter(length) * FeetToMeter(breadth); //meter
console.log("Area in meters : "+area);

let totalArea = 25 * area;
console.log("Ares in acres for 25 plots : "+ToAcres(area));

function InchesToFeet(x)
{
    return x/12;
}
function FeetToMeter(x)
{
    return x*0.3048;
}
function ToAcres(x)
{
    return x/4047;
}