const { FORMERR } = require('dns');

//1 & 2
{
    let numArray =  new Array();
    console.log("Numbers : ")
    for(i=0; i<10;i++)
    {
        let number = Math.floor(Math.random() * 900)+100;
        numArray.push(number);
        console.log(number);
    }
    
    //1.Find SecondLargest and SecondSmallest(without sort)
    let max = Math.max(...numArray);
    let min = Math.min(...numArray);
    let secondMax = 100;
    let secondMin = 999;

    for(j = 0; j<numArray.length ;j++)
    {
        if(numArray[j] > secondMax && numArray[j] < max)
        {
            secondMax = numArray[j];
        }
        if(numArray[j] < secondMin && numArray[j] > min)
        {
            secondMin = numArray[j];
        }
    }
    console.log("Without Sort : ")
    console.log("Second Max : "+secondMax);
    console.log("Second Min : "+secondMin);

    //2.Find SecondLargest and SecondSmallest(without sort)
    let sortedArray = numArray.slice(0).sort();
    console.log("With Sort : ")
    console.log("Second Max : "+sortedArray[sortedArray.length-2]);
    console.log("Second Min : "+sortedArray[1]);
}

//3.Prime Factors Count
{
    const process = require('process');
    let inputNumber = parseInt(process.argv[2]);
    let primeFactorArray = new Array();

    for(n = 2;n <= inputNumber;n++)
    {
        if((inputNumber % n == 0) && CheckPrime(n) == true)
                  primeFactorArray.push(n);
    } 
     
    console.log("Total prime factors : "+primeFactorArray.length);

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

//4.Sum of three numbers to zero
{
    let numbers = [1,-2,3,-1,1];
    console.log("Triplets with sum ZERO :")
    for (i = 0; i < numbers.length-2; i++) 
    { 
        for (j = i+1; j < numbers.length-1; j++) 
        { 
            for (k = j+1; k < numbers.length; k++) 
            { 
                if (numbers[i] + numbers[j] + numbers[k] == 0) 
                { 
                    console.log(numbers[i],numbers[j],numbers[k]);
                } 
            } 
        } 
    }
}

//5.Numbers from 0-100 with same digits
{
    let doubleDigitNumbers = new Array();
    for(i = 1;i < 100;i++)
    {
        if(i%11 == 0)
            doubleDigitNumbers.push(i);
    }
    console.log("Double digit numbers : "+doubleDigitNumbers.toString());
}

