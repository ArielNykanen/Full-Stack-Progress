  // page 48 ecercise 1=========================================================
  function checkArray(array){
    let totalSum = 0, avrage = 0, biggerThenAvrg = [];
    for(i = 0;i < array.length;i++){
        totalSum += array[i];

    }
    avrage = parseInt((totalSum/array.length));
    console.log(avrage);
    for(j = 0;j < array.length;j++){
        if(array[j] > avrage){
            biggerThenAvrg.push(array[j]);
        }
        
    }
   alert('the avrage is ' + avrage + ' and the bigger numbers in the array are ' + biggerThenAvrg )
}

function buildArray(){
let array1 = [];
for(i = 0;i <= 5;i++){
    array1.push(Math.ceil(Math.random()*500));
}
let check = checkArray(array1);
}
buildArray();
// End of ecercise 1-----------------------------------------------------------