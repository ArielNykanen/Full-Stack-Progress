//--------Start of exercise 1 (get 3 numbers and return the highest one)--------//
function order(num1, num2, num3){
    let temp = 0;
    for(let i = 0;i < arguments.length;i++){
            if(temp < arguments[i]){
                temp = arguments[i];
        }
    }
    return temp;
}
console.log(order(3, 777, 4));
//--------END Of exercise 1--------//


//page 20 exercise 2 students score-----------------------------------------------
function studentScore(professionsName, profession){
    let notGood = 55, enough = 65, allMostGood = 75,
    good = 85, veryGood = 95, perfect = 95,maxScore = 100;
    if(profession < notGood)
    return console.log(professionsName +' not enough');
    else if(profession > notGood && profession < enough)
    return console.log(professionsName +' enough');
    else if(profession > enough && profession < allMostGood)
    return console.log(professionsName +' All Most Good');
    else if(profession > allMostGood && profession < good)
    return console.log(professionsName +' good');
    else if(profession > good && profession < veryGood)
    return console.log(professionsName +' very good');
    else if(profession >= veryGood && profession <= maxScore) 
    return console.log(professionsName +' perfect');
    else
    return console.log('some thing is wrong here');
}

studentScore("math", 99.99999999999999999999999999999999999999999999);

//page 20 exercise 2 students score-----------------------------------------------

//page 20 exercise 3 special year-----------------------------------------------
function findSpecialYear(year){
    if((year%4 === 0) && (year%100 > 0)){
        console.log("its a special year!!!");
    }else if((year%4 === 0) && (year%100 === 0) && (year%400 === 0)){
        console.log('the year is devided by 4, 100, 400 its a special year');
    }else{
        console.log('its not a special year :( ');
    }
}

findSpecialYear(2018);
//End of exercise 3 special year=================================================

//page 20 exercise 4 special month-----------------------------------------------
function findSpecialMonth(year){
    specialMonth = 29;
    notSpecial = 28;
    if((year%4 === 0) && (year%100 > 0)){
        console.log("In year " + year + " february is " + specialMonth + ' days!');
    }else if((year%4 === 0) && (year%100 === 0) && (year%400 === 0)){
        console.log("In year " + year + " february is " + specialMonth + ' days!');
    }else{
        console.log(year + ' its a regular year and february is ' + notSpecial + 'days!!' );
    }
}

findSpecialMonth(2018);
//End of exercise 4 special month=================================================
