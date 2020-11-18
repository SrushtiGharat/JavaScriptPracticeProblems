//1.Powers of 2
{
    const process = require('process');
    let inputNumber = parseInt(process.argv[2]);

    console.log("Powers of 2 :");
    for(i = 0; i <= inputNumber; i++)
    {
        console.log(Math.pow(2,i)+"  ");
    }
}
//2.Print nth harmonic number of given form
{
    const process = require('process');
    let inputNumber = parseInt(process.argv[2]);
    let harmonicNumber = 0;

    for(i = 1;i <= inputNumber;i++)
    {
        harmonicNumber = harmonicNumber + (1/i);
    }
    console.log("Harmonic number : "+harmonicNumber);
}
//3,4.Check prime in range
{
    const process = require('process');
    let inputNumber1 = parseInt(process.argv[2]);
    let inputNumber2 = parseInt(process.argv[3]);
    
    console.log("Prime Numbers : ")
    for(j = inputNumber1;j <= inputNumber2; j++)
    {
        if(CheckPrime(j) == true)
            console.log(j);
    }

    function CheckPrime(x)
    {
        let factors = 0;
        for(i = 2;i < x ;i++)
        {
            if(x % i == 0)
                factors++;      
        }

        if(factors == 0)
        {
            return true;
        }
        return false;
    }   
}

//5.Compute Factorial
{
    const process = require('process');
    let inputNumber = parseInt(process.argv[2]);

    let factorial = 1;
    for(i = 1 ;i <= inputNumber; i++)
    {
        factorial = factorial*i;
    }
    console.log("Factorial : "+factorial);
}
//6.Factors of given number
{
    const process = require('process');
    let inputNumber = parseInt(process.argv[3]);

    for(n = 2;n <= inputNumber;n++)
    {
        if((inputNumber % n == 0) && CheckPrime(n) == true)
            console.log(n);      
    }    
}