  //page 33 exercise 19 fibonachi ===================================
// hard task = 15 mins
function fibonachi(array,n){
    temp1 = 0;
    temp2 = 1;
    for(i = 0;i < array.length-1;i++){
        if(array[temp1] + array[temp2] > n){
            return console.log('the array at index of ' + temp1 + ' and the array at index ' + temp2 + ' is bigger then the number ' + n + ' you have enterd. so the indexs are equal ' + (array[temp1] + array[temp2]));
        } 
        temp1++;
        temp2++;
    }
console.log();
}
fibonachi([3,4,5,6,7,8],12);
  //End of exercise 19 =================================================