//page 17 exercise 1-----------------------------------------------
function logGrowing(num1, num2){//Checking if num 2 is bigger(if true return "Growing")
    if(num1 < num2){
        return console.log('Growing'); 
    }else{
        return false;
    }

}     //End of num Checking function
  //Sending 2 numbers as parameters to logGrowing(num1, num2)
logGrowing(Math.round(Math.random() *10/*this method is creating random number and sending it as a parameter*/), 4);
//End of page 17 exercise 1---------------------------------------

//page 17 exercise 2----------------------------------------------
function checkVlue(num1, num2) {
    if(num1 > 100)
        return alert('you cant go over 100');
    if (num1 > num2)
     return console.log(num1 + " = num1 & its bigger");
    else
    return console.log(num2 + " = num2 & its bigger");
}
checkVlue(Number(prompt('add number between 1-100')), Math.ceil(Math.random()*100));
//End of page 17 exercise 2---------------------------------------

//page 17 exercise 3----------------------------------------------
function checkNum(num){
    let text;
    if(num%2 === 0){
        return text = 'the number is even! the num is ' + num ;
    }else{
        return text = 'the number is odd! the num is ' + num ;
    }
}
console.log(checkNum(Math.round(Math.random()*10)));
//End of page 17 exercise 3 --------------------------------------

//page 17 exercise 4----------------------------------------------
function noRemaindersAllowed(num1,num2){
    if(num1%num2 === 0 && num2%num1 === 0)
        return console.log('who hoo no Remainders ');
    else
        return console.log('you have remainders here..')
}
noRemaindersAllowed(23, 23);
//End of page 17 exercise 4---------------------------------------

//page 17 exercise 5----------------------------------------------
function showEvenOr(num1, num2) {
    
    if(num1 === num2)
        return console.log('num1 = ' + num1 + ' and num2 = ' + num2);
    else if (num1 < num2){
           alert('num2 = ' + num2 + ' and its bigger');
    return alert('num1 = ' + num1);
    }
        else{
        return alert( 'num1 = ' + num1 + ' and its bigger')
        return alert('num2 = ' + num2);
        }
}
showEvenOr(23, 23);
//End of page 17 exercise 5---------------------------------------


//final practice for this page..
    //make worker with sallary and and give him raise of 10%,
        // but if hes sallary is more then 6000> then give him 5% raise.
    //
//
//page 17 exercise 6----------------------------------------------
let worker1 = {
    name: 'dan',
    sallary: 33000
};
function checkForRaise(worker) {
    if(worker.sallary > 6000){
        worker.sallary += worker.sallary*0.05;
        return console.log(worker.sallary);
    }else
        worker.sallary += worker.sallary*0.1;
        return console.log(worker.sallary);

}
checkForRaise(worker1);
//End of page 17 exercise 6---------------------------------------
