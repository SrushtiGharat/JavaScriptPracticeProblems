//1.Powers of 2 till 256
{
    console.log("Powers of 2 :");
    let i =0;

    while(i <= 8)
    {
        console.log(Math.pow(2,i)+"  ");
        i++;
    }
}

//2.Flip coin
{
    const HEAD = 1;
    let headWins = 0;
    let tailWins = 0;

    while(headWins < 11 && tailWins < 11)
    {
        let flip = Math.floor(Math.random() * 10) % 2;
        if(flip == HEAD)
            headWins++;
        else
            tailWins++;
    }
    console.log("Head counts : "+headWins+" "+"Tail Counts : "+tailWins);
}

//3.Gambling Problem
{
    let amount = 100;
    const WIN = 1;
    let betCount = 0;

    while(amount < 200 && amount > 0)
    {
        let result = Math.floor(Math.random() * 10) % 2;
        betCount++;
        if(result == WIN)
            amount = amount+1;
        else
            amount = amount-1;
    }
    console.log("Final Amount : "+amount);
    console.log("No of bets : "+betCount);
}