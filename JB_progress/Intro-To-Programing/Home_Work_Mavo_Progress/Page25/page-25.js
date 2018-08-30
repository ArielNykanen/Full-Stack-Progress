//Page 25 exersize 1------------------------------------------------
function postFromZero(num) {
  for (i = 0; i <= num; i++) {
    console.log(i);
  }
}
postFromZero(10);
//End of exercise 1=================================================

//Page 25 exersize 2------------------------------------------------
function postFromZero(num1, num2, num3, num4, num5, num6) {
  for (i = 0; i <= arguments.length - 1; i++) {
    for (j = 0; j <= arguments[i]; j++) {
      if (j <= arguments[i]) console.log(j);
      if (j === arguments[i])
        console.log(
          "end of printing the number " + arguments[i] + " from 0 to max",
        );
    }
  }
}
postFromZero(29, 2, 1, 3, 6, 23);
//End of exercise 2=================================================

// //Page 25 exersize 3------------------------------------------------
function getEqualNumber(number) {
  for (i = 0; i <= number; i++) {
    if (i % 2 === 0 && i) {
      console.log(i);
    } else {
      console.log(i);
    }
  }
}

//   //End of exercise 3================================================

//Page 25 exersize 4------------------------------------------------
function twoNums(max, den) {
  for (i = 0; i < max; i++) {
    console.log("max = " + i);
    if (i % den === 0 && i !== 0)
      console.log("max = " + i + " is devided with den" + den);
  }
}
twoNums(10, 3);
//End of exercise 4=================================================

//Page 25 exersize 5------------------------------------------------
function recivePositive(array) {
  positiveNumArr = [];
  for (i = array.length - 1; i > 0; i--) {
    if (array[i] >= 0) {
      positiveNumArr.push(array[i]);
    } else {
      //just for prove.
      console.log(
        "the index of the array at " + i + " is a negative number " + array[i],
      );
    }
  }
  return positiveNumArr;
}
function makeArr() {
  numberOfCellsToCreate = 100;
  let newArr = [];
  for (j = 0; j < numberOfCellsToCreate; j++) {
    newArr.push(Number(Math.floor(Math.random() * 100 + Math.random() * -50)));
  }
  let get = recivePositive(newArr);
  console.log(get);
}
makeArr();
//End of exercise  5================================================

//Page 25 exersize 6------------------------------------------------
//start of getting avrage function//
function calculateAvrg(array) {
  let totalAvrg = 0;

  for (i = 0; i < array.length; i++) {
    totalAvrg += array[i];
    console.log(array[i]);
  }
  totalAvrg = totalAvrg / array.length;
  return totalAvrg.toFixed(2);
}
//END of getting avrage function
function makeArr() {
  numberOfCellsToCreate = 100;
  let newArr = [];
  for (j = 0; j < numberOfCellsToCreate; j++) {
    newArr.push(Number(Math.floor(Math.random() * 100)));
  }
  newArr.push(Number(0));
  let get = calculateAvrg(newArr);
  console.log(get);
}
makeArr();
//End of exercise  6================================================

//Page 25 exersize 7------------------------------------------------
function highestValue(array) {//getting the highest value in the array(the simple way)
    let temp = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > temp) temp = array[i];
  }
  return temp;
}
function makeArr2() {// making default array for testing.
  numberOfCellsToCreate = 10;
  let newArr = [];
  for (j = 0; j < numberOfCellsToCreate; j++) {
    newArr.push(Number(Math.floor(Math.random() * 100)));
}
console.log(newArr);
  let get = highestValue(newArr);
  console.log(get);
}
makeArr2();
//End of exercise  7=================================================
    
//Page 25 exersize 8------------------------------------------------
function lowestValue(array) {//getting the lowest value in the array(the simple way)
    let temp = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] < temp) temp = array[i];
  }
  return temp;
}
function makeArr3() {// making default array for testing.
  numberOfCellsToCreate = 10;
  let newArr = [];
  for (j = 0; j < numberOfCellsToCreate; j++) {
    newArr.push(Number(Math.floor(Math.random() * 100 + -40)));
}
console.log(newArr);
  let get = lowestValue(newArr);
  console.log(get);
}
makeArr3();
//End of exercise 8=================================================

//Page 25 exersize 9------------------------------------------------

function highestDigitNum(array) {//getting the lowest value in the array(the simple way)
    let temp = 0;
    let digits = 0;
    let numHolder;
    for (i = 0; i < array.length; i++) {
        if (array[i] > temp) temp = array[i];
    }
    while(temp > 0){
        
        let s = temp%10;
        temp = Math.floor(temp/10);
        digits++;
    }
    
    console.log(digits);
}
function makeArr4() {// making default array for testing.
    numberOfCellsToCreate = 10;
    let newArr = [];
    for (j = 0; j < numberOfCellsToCreate; j++) {
        newArr.push(Number(Math.floor(Math.random() * 1000000)));
    }
    console.log(newArr);
    let get = highestDigitNum(newArr);
    console.log(get);
}
makeArr4();
//End of exercise  9=================================================

//Page 25 exersize 10------------------------------------------------
function leftDigit(num) {
    temp = num%10;
    console.log(temp);
    
}
leftDigit(2323);
//End of exercise 10 =================================================

//Page 25 exersize 11------------------------------------------------
function digits(num) {
    var temp = 0;
    if (num >= 1) ++temp;
  
    while (num / 10 >= 1) {
      num /= 10;
      ++temp;
}
    return temp;
  }
  
  console.log(digits(2323));
//End of exercise 11 =================================================

//Page 25 exersize 12------------------------------------------------


//End of exercise 12 =================================================

//Page 25 exersize 10------------------------------------------------

//End of exercise 10 =================================================
//Page 25 exersize 10------------------------------------------------

//End of exercise 10 =================================================
//Page 25 exersize 10------------------------------------------------

//End of exercise 10 =================================================
//Page 25 exersize 10------------------------------------------------

//End of exercise 10 =================================================

//Page 25 exersize 12------------------------------------------------
function seperate(num) {
  total = 0;
  while (num) {
    total += num % 10;
    console.log(total);
    num = Math.floor(num / 10);
  }
  console.log(total);
}
seperate(123);
//End of exercise 12=================================================

//Page 25 exersize 15------------------------------------------------
function polindomic(num) {
  reversedNum = 0;
  orgNum = num;
  remainder = 0;
  while (num) {
    remainder = num % 10;
    reversedNum = reversedNum * 10 + remainder;
    num = Math.floor(num / 10);
  }
  if (reversedNum === orgNum) {
    console.log("yes it is");
  } else {
    console.log("no it isnt");
  }
}

//End of exercise 15=================================================
