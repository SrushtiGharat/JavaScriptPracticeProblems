//1. Read single digit number and write in words using switch case
{
    const process = require('process');
    let inputNumber = parseInt(process.argv[2]);

    switch(inputNumber)
    {
        case 1 : console.log("One");
            break;
        case 2:console.log("Two");
            break;
        case 3:console.log("Three");
            break;
        case 4:console.log("Four");
            break;
        case 5:console.log("Five");
            break;
        case 6:console.log("Six");
            break;
        case 7:console.log("Seven");
            break;
        case 8:console.log("Eight");
            break;
        case 9:console.log("Nine");
            break;
        default:console.log("Invalid number");
            break;
    }
}

//2. Read number and display weekday using switch case
{
    const process = require('process');
    let inputNumber = parseInt(process.argv[2]);

    switch(inputNumber)
    {
        case 1 : console.log("Monday");
            break;
        case 2:console.log("Tuesday");
            break;
        case 3:console.log("Wednesday");
            break;
        case 4:console.log("Thursday");
            break;
        case 5:console.log("Friday");
            break;
        case 6:console.log("Saturday");
            break;
        case 7:console.log("Sunday");
            break;
        default:console.log("Invalid number");
            break;
    }
}

//3.Unit Conversion
{
    const process = require('process');
    let inputNumber = parseInt(process.argv[3]);
    let conversionNumber = parseInt(process.argv[2]);

    switch(conversionNumber)
    {
        case 1 : console.log(inputNumber + "Feet :"+ inputNumber * 12 +" Inches");
            break;
        case 2 : console.log(inputNumber + "Inches :"+ inputNumber / 12 +" Feet");
            break;
        case 3 : console.log(inputNumber + "Feet :"+ inputNumber * 0.3048 +" Meter");
            break;
        case 4 : console.log(inputNumber + "Meter :"+ inputNumber * 3.28 +" Feet");
            break;
        default: console.log("Wrong input");
            break;
    }
}

