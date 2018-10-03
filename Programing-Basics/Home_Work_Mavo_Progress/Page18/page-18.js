//page 18 exercise number 1----------------------------------------------------------------
function Show_NE_PO_ZE(num) {
    if(num < 0)
    return console.log('Negative');
    else if(num === 0 || num == null)
    return console.log("Zero");
    else if(num > 0)
    return console.log("Positive");
}
Show_NE_PO_ZE();
//End of exercise number 1----------------------------------------------------------------

//page 18 exercise number 2----------------------------------------------------------------
function IncreasingOnly(num1, num2, num3) {
    if((num1 < num2) && (num2 < num3)){
    return console.log('its increasing');
    }else
    return console.log('Not increasing');
}
IncreasingOnly(1, 2, 3);
//End of exercise number 2----------------------------------------------------------------

//page 18 exercise number 3----------------------------------------------------------------
function showBigerOrSame(num1, num2) {
    if((num1 > num2) || (num1 === num2)){
        return console.log(num1);
    }else
    return console.log(num2);
}
showBigerOrSame(23,23);
//End of exercise number 3----------------------------------------------------------------

//page 18 exercise number 4----------------------------------------------------------------
function showNumOfDigits(num){//if statement practices (cant use loops or anything else)
    if(num > 9999 || num < 0)
    return alert('4 digit number is the max (and negative numbers not accepted)');
    if (num >= 1000){
        console.log("number has 4 digits")
    }else if( num <= 999 && num > 100){
    return console.log("number is 3 digits long")
}   else if(num < 100 && num > 10){
    return console.log("number is 2 digits long");
}else return console.log("number is 1 digit long");

}
showNumOfDigits(987);
//End of exercise number 4----------------------------------------------------------------

//page 18 exercise number 5----------------------------------------------------------------
let user1 ={//new object that defines a persons name and income
    name:'uriel', 
    income:Math.round(Math.random()*500000)//makes a random rounded income between 0 to 500000
}
        //start of checking taxes for avalue of income
function checkTaxLevels(userIncome){
    let taxesToPay = 0, firstLevel = 23000,// all the tax and over taxes values
    secoundLevel = 46000, thirdLevel = 100000,
    forthLevel = 200000, overThirdLevel = 23100
    overForthLevel = 63100;
                //if statements on top of eachother to search for the tax procentage range depends on income
    if(userIncome > forthLevel){
        taxesToPay = (userIncome - overForthLevel)*0.5;
        return taxesToPay;
    }else if((userIncome > thirdLevel) && (userIncome < forthLevel)){
        taxesToPay = (userIncome - thirdLevel)*0.40 + overThirdLevel;
        return taxesToPay;

    }else if((userIncome < thirdLevel) && (userIncome > secoundLevel)){
        taxesToPay = userIncome%secoundLevel*0.3 + 6900;
        return taxesToPay.toFixed(2);
    }else if((userIncome < secoundLevel) && (userIncome > firstLevel)){
        taxesToPay = (userIncome%secoundLevel)*0.2 + 2300;
        return taxesToPay;
    }else if (userIncome < firstLevel){
        taxesToPay = userIncome*0.1;
    }
        //End of over stacked if statement
    return null; //if the income is not anumber or equals to nothing then bring nothing
} //End of checking taxes

console.log(checkTaxLevels(user1.income));

//End of exercise number 5--------------------------------------------------------- 