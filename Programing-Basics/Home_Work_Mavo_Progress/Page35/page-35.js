  //page 35 exercise 1  ===================================
// hard task = 
function findSort(array){
    temp = 0;
    flag = 0;

    for(i = 0;i < array.length;i++){
        
        flag++;
        for(j = 0;j < array.length;j++){
            console.log(array[flag]);
            
            if(array[i] > array[flag]){
                return console.log('its not sorted!');
            }
            
        }
    }
    return console.log('its sorted');
        
}
findSort([3,4,5,6,1]);
  //End of exercise 1 =================================================

    //page 35 exercise 5  ===================================
  function check(array){
    let sum1,sum2;
    array1k = [];
    array2k = [];
    arrayDiffrent = [];
    for(i = 0;i < array.length;i++){
        console.log(array[i]);
        if(array[i] < 1000){
            array1k.push( array[i])
        }else if((array[i] >= 1000) && (array[i] < 2000)){
          array2k.push( array[i])
        }
        if(array[i]> 2000)
        arrayDiffrent.push(array[i]);
    }
    console.log(array1k);
    console.log(array2k);
    console.log(arrayDiffrent);
}
check([1,444,22222,33,1555,2322]);
//End of exercise 5 =================================================