//1. Find Maximum and Minimum of 5 randon 3 digit values
{
    let min = 999;
    let max = 0;

    console.log("Numbers : ");
    for(i=0;i<5;i++)
    {
        let number = Math.floor(Math.random() * 900)+100;
        console.log((i+1)+")"+number);
        if(number < min)
        {
            min = number;
        }
        if(number > max)
        {
            max = number;
        }
    }
    console.log("Min number : "+min);
    console.log("Max number : "+max);
}

//2. Check if day and month is between March,20 and June,20
{
    const process = require('process');
    let input  = process.argv;
    let date = new Date(input[2]);   
    
    if((date.getMonth() == 2 && date.getDate() > 20) || (date.getMonth() == 5 && date.getDate() < 20) || (date.getMonth() > 2 && date.getMonth()<5))
    {
        console.log("True");
    }
    else
    {
        console.log("False");
    }
} 

//3.Check if given year is leap year
{
    const process = require('process');
    let input  = process.argv;
    let year = input[3];

    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))   
    {
        console.log("Leap Year");
    }
    else
    {
        console.log("Not a leap year");
    }
}

//4.Coin Flip
{
    const HEAD = 1;
    let flip = Math.floor(Math.random() * 10) % 2;
    if(flip == HEAD)
    {
        console.log("HEADS");
    }
    else
    {
        console.log("TAILS");
    }
}