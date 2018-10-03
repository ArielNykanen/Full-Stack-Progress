  // page 15 exercise 1===================================================
  function showAvrh(x,c,v){
    numsAvrg = (x+c+v)/arguments.length;
    for(i = 0;i < arguments.length-1;i++){
        temp += arguments[i];
    }
    temp = temp/arguments.length;
    console.log('the avrg of' + x + ' '+ c + ' '+ v + '  is = ' +  temp);
}
let three = showAvrh(2,2,2);
    // page 15 exercise 1----------------------------------------------------



    // page 15 exercise 4===================================================
    function durationMovie(movie, name) {
        let hour = Math.floor(movie/60);
        let minute = movie%60;
        return console.log(name + ' is ' + hour + ' hours and ' + minute + ' minutes long');
    }

    let theMovie = durationMovie(200, 'movie123');
    // page 15 exercise 4--------------------------------------------------- 

    // page 15 exercise 5===================================================
    function get4DigitNum(num) {
        let result = 0;
        if((num < 1000) || (num > 9999) || (typeof(num) === isNaN)){
            return console.log("enter 4 digit number and only numbers");
  
          }else if(num > 1000 && num < 9999){
              result = num%10;
              return console.log('the first digit on the right is ' + result);
          }
    }
    get4DigitNum();
    // page 15 exercise 5--------------------------------------------------- 
  
    // page 15 exercise 6===================================================
    function get4DigitNum(num) {
        let result = 0;
        if((num < 1000) || (num > 9999) || (typeof(num) === isNaN)){
            return console.log("enter 4 digit number and only numbers");
  
          }else if(num > 1000 && num < 9999){
              result = num%100;
              return console.log('the first digit on the right is ' + Math.floor(result/10));
          }
    }
    get4DigitNum(8454);
    // page 15 exercise 6--------------------------------------------------- 
  
    // page 15 exercise 7===================================================
    function get3DigitNum(num) {
        let result = 0;
        if((num < 0) || (num > 999) || (typeof(num) === isNaN)){
            return console.log("enter 3 digit number and only numbers");
  
          }else if(num > 0 && num < 999){
              result = Math.floor(num/100);
              console.log(result)
              if(result <= 0){
                  return console.log('the number you enterd is lower then 100');
              }else{
                  return console.log('the number of hundreds you have is ' + Math.floor(result));
              }
          }
    }
    get3DigitNum(222);
    // page 15 exercise 7--------------------------------------------------- 

      // page 15 exercise 8===================================================
  function get2DigitNum(num) {
    let result = 0;
    if((num < 0) || (num > 99) || (typeof(num) === isNaN)){
        return console.log("enter 2 digit number");

      }else if(num > 0 && num < 99){
          digit1Result = Math.floor(num/10);
          digit2Result = Math.floor(num%10);
          console.log(digit1Result)
          console.log(digit2Result)
          if(digit1Result <= 0 && digit2Result <=0){
              return console.log('you enterd 0 :(');
          }else{
              return console.log('the first digit of your number is ' + digit1Result + ' and the secound digit number is ' + digit2Result );
          }
      }
}
get2DigitNum(25);
// page 15 exercise 8--------------------------------------------------- 

  // page 15 exercise 9===================================================
  function get2DigitNum(num) {
    let result = 0;
    if((num < 0) || (num > 99) || (typeof(num) === isNaN)){
        return console.log("enter 2 digit number");

      }else if(num > 0 && num < 99){
          theReverse1 = Math.floor(num%10);
          theReverse2 = Math.floor(num/10);
          console.log(theReverse1)
          console.log(theReverse2)
          if(digit1Result <= 0 && digit2Result <=0){
              return console.log('you enterd 0 :(');
          }else{                                              // if i would like to add them together ill put them inside of 'string' + (theReverse1 + theReverse2)
              return console.log('the number you enterd is ' + theReverse1 + theReverse2);
          }
      }
}
get2DigitNum(25);
// page 15 exercise 9--------------------------------------------------- 

  // page 15 exercise 10===================================================
  function getCloseEven(num){
    numChanger = num;
    if(numChanger%2 > 0){
        numChanger++;
    }
    if(numChanger%2 > 0){
        numChanger++;
    }
  
    result = Math.floor(numChanger)
    console.log(result);
}
getCloseEven(122.1);
  // page 15 exercise 10--------------------------------------------------- 






  
  
  
  
  
  

