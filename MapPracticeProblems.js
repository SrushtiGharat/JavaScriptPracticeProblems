//1.Find Max and Min Die Roll
{
    let dieRollCountMap = new Map();
    dieRollCountMap.set(1,0);
    dieRollCountMap.set(2,0);
    dieRollCountMap.set(3,0);
    dieRollCountMap.set(4,0);
    dieRollCountMap.set(5,0);
    dieRollCountMap.set(6,0);

    while(Array.from(dieRollCountMap.values()).includes(10) != true)
    {
        let roll = (Math.floor(Math.random()*10)%6)+1;
        let value = dieRollCountMap.get(roll);
        dieRollCountMap.set(roll,value+1);
    }
    //console.log(dieRollCountMap);
    let minRollValue = Math.min(...dieRollCountMap.values());

    for(let[key,value] of dieRollCountMap)
    {
        if(value == 10)
        {
            console.log("Maximum rolled number :"+key);
        }
        if(value == minRollValue)
        {
            console.log("Minimum rolled number :"+key);
        }          
    }
}

//2.Individuals with birth in same month
{
    let individualToMonthMap = new Map();
    let monthToIndividualMap = new Map();
    
    for(i = 1;i<=50;i++)
    {
        let m = (Math.floor(Math.random()*100)%12)+1;
        individualToMonthMap.set(i,m);  
        console.log(i+"-"+GetMonthName(m));   
    }
    
    for(i = 1; i<=12;i++)
    {
        let people = new Array();
        for(let[key,value] of individualToMonthMap)
        {
            if(value == i)
                    people.push(key);
        }
        monthToIndividualMap.set(GetMonthName(i),people);
    }

    console.log("People born in January : "+monthToIndividualMap.get("January"));

    function GetMonthName(m)
    {
        switch(m)
        {
            case 1: return "January";
            break;
            case 2: return "February";
            break;
            case 3: return "March";
            break;
            case 4: return "April";
            break;
            case 5: return "May";
            break;
            case 6: return "June";
            break;
            case 7: return "July";
            break;
            case 8: return "August";
            break;
            case 9: return "September";
            break;
            case 10: return "October";
            break;
            case 11: return "November";
            break;
            case 12: return "December";
            break;
        }
    }
}