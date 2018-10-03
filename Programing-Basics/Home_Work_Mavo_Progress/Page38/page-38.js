  //page 38 exercise 8  ============================================
  function metrix(num1, num2){
    array;
    for(i = 0;i <= num1;i++){
        array [i] = [];
        for(j = 0;j <= num2;j++){
            array[i].push('d');
        }
    }
    console.log(array);
}
metrix(3,7);
  //End of exercise 8 ------------------------------------------------


  //page 38 exercise 10  ===============================================
  function multyTable(num){
    let multyArray = [];
    for(i = 0;i <= num;i++){
        multyArray[i];
        for(j = 0;j <= 10;j++){
            multyArray.push(i + ' * ' +  j + ' = ' + i*j) 
        }
    }
    console.log(multyArray);
}
multyTable(10);

//End of exercise 10 --------------------------------------------------