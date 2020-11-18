//1. Read single digit number and write in words
{
    const process = require('process');
    let inputNumber = process.argv[2];

    if(inputNumber == 1)
    {
        console.log("One");
    }
    else if(inputNumber == 2)
    {
        console.log("Two");
    }
    else if(inputNumber == 3)
    {
        console.log("Three");
    }
    else if(inputNumber == 4)
    {
        console.log("Four");
    }
    else if(inputNumber == 5)
    {
        console.log("Five");
    }
    else if(inputNumber == 6)
    {
        console.log("Six");
    }
    else if(inputNumber == 7)
    {
        console.log("Seven");
    }
    else if(inputNumber == 8)
    {
        console.log("Eight");
    }
    else if(inputNumber == 9)
    {
        console.log("Nine");
    }
    else
    {
        console.log("Invalid Number");
    }
}

//2. Read number and display weekday
{
    const process = require('process');
    let inputNumber = process.argv[3];

    if(inputNumber == 1)
    {
        console.log("Monday");
    }
    else if(inputNumber == 2)
    {
        console.log("Tuesdat");
    }
    else if(inputNumber == 3)
    {
        console.log("Wednesday");
    }
    else if(inputNumber == 4)
    {
        console.log("Thursday");
    }
    else if(inputNumber == 5)
    {
        console.log("Friday");
    }
    else if(inputNumber == 6)
    {
        console.log("Saturday");
    }
    else if(inputNumber == 7)
    {
        console.log("Sunday");
    }
    else
    {
        console.log("Invalid Number");
    }
}

//3. Perform Arithmatic Operations and find minimum and maximum
{
    const process = require('process');
    let a = parseInt(process.argv[4]);
    let b = parseInt(process.argv[5]);
    let c = parseInt(process.argv[6]);

    let operation1 = a + b * c;
    let operation2 = a % b + c;
    let operation3 = c + a / b;
    let operation4 = a * b + c;

    let maximum = Math.max(operation1,operation2,operation3,operation4);
    
    if(maximum == operation1)
    {
        console.log("Maximum : Operation 1" + " Value : "+operation1);
    }
    else if(maximum == operation2)
    {
        console.log("Maximum : Operation 2" + " Value : "+operation2);
    }
    else if(maximum == operation3)
    {
        console.log("Maximum : Operation 3" + " Value : "+operation3);
    }
    else 
    {
        console.log("Maximum : Operation 4" + " Value : "+operation4);
    }

    let minimum = Math.min(operation1,operation2,operation3,operation4);

    if(minimum == operation1)
    {
        console.log("Minimum : Operation 1" + " Value : "+operation1);
    }
    else if(minimum == operation2)
    {
        console.log("Minimum  : Operation 2" + " Value : "+operation2);
    }
    else if(minimum == operation3)
    {
        console.log("Minimum  : Operation 3" + " Value : "+operation3);
    }
    else 
    {
        console.log("Minimum : Operation 4" + " Value : "+operation4);
    }

}
