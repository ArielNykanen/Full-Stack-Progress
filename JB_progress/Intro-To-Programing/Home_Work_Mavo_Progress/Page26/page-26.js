//Page 26 exersize 17------------------------------------------------
  function multiply(num1, num2){
    let result = 0;
    let counter = num1;
  for(counter = num1;counter > 0;counter--){
      result += num2;
      console.log(result);
  }
}
multiply(10,100);
//End of exercise 17=================================================


//Page 26 exersize 24----------------------------------------------
  function gcd(num1, num2){//here we are getting 2 numbers to calculate the gcd that is equals to greater common devisor.
    let GreaterNumber,smallerNumber,remainder = 1; //we made 3 variables to help us to get to the result.. and we added a remainder holder
    if (num1 > num2){//here we are setting the grater number that we are getting from the user to be our helper graterNumber if the condition is true
      GreaterNumber = num1;
      smallerNumber = num2;
    }else{//here we are setting the grater number that we are getting from the user to be our helper graterNumber if the condition is true
      GreaterNumber = num2;
      smallerNumber = num1;
    }
    for(;remainder > 0;){ //here we are running a loop till the condition is false and we ask if remainder is bigger then 0
        remainder = GreaterNumber%smallerNumber;
        GreaterNumber = smallerNumber;
        smallerNumber = remainder;
    }
    console.log(GreaterNumber);

}
gcd(10,100);
//how to calculate the grater common divisor https://www.youtube.com/watch?v=JUzYl1TYMcU
//End of exercise 24=================================================