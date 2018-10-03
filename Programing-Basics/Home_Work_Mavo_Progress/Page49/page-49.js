  // page 49 ecercise 1=========================================================
  function incresingMet(){
    array = [];
    let num = 0;
    for(i = 0;i < 10;i++){
        array[i] = []
      for(j = 0;j < 10;j++){
          num++
          if(num < 10){
             toString( array[i][j] = '00' + num);
             console.log(array[j]);
          }else if((num >= 10) && (num < 100)){
              toString( array[i][j] = '0' + num);
          }else
          toString(array[i][j] = "" + num);
      }
  }
  console.log(array);
 
}
incresingMet();
// End of ecercise 1-----------------------------------------------------------

   // page 49 ecercise 2=========================================================
   function met(){
    let array = [];
    let temp = -1;
    let temp2 = 11;
    for(i = 0;i <= 10;i++){
        array[i] = [];
         temp++;
         temp2--;
        console.log(temp)
     for(j = 0;j <= 10;j++){
         array[i][j] = j + '';
         array[i][temp] = '*'
         array[i][temp2] = '*'
     }
    }
    console.log(array);
   }
   met()
   // End of ecercise 2----------------------------------------------------------

  // page 49 ecercise 3=========================================================
  function randomMet(){
    let array = [];
    let array2 = [];
    for(i = 0;i < 10;i++){
        array[i] = [];
        for(j = 0;j <= 10;j++){
            array[i][j] = Number(Math.ceil(Math.random()*5));
              if(array[i] > array2){
                  array2 = array[i];
                  l = i;
                }    
          }
      }
      console.log(array);
      console.log('row  '  + l + ' is the gratest');
  }
  
  randomMet();
  // for checiking porpes only
  let reducer = (a,b) => (a + b);
  // End of ecercise 3---------------------------------------------------------

  // page 49 ecercise 4=========================================================
  function  findDevision(){
    array1 = [];
    for(i = 0;i < 10;i++){
        array1[i] = [];
        for(j = 0;j < 10;j++){
            array1[i][j] = Math.floor(Math.random()*20);
            if((array1[i][j]%7 === 0) && (array1[i][j] > 0)){
                console.log(array1[i][j]);
                array1[i][j] = "was %7=0";
            }else if((array1[i][j]%5 === 0) && (array1[i][j] > 0)){   
                console.log(array1[i][j]);
                array1[i][j] = 'was %5=0'
            }
        }
    }
   console.log(array1);
}
    findDevision();
//   // End of ecercise 4---------------------------------------------------------

// page 49 ecercise 5=========================================================
function  buildArray(){
    array1 = [];
    for(i = 0;i < 10;i++){
        temp = 0;
        array1[i] = [];
        for(j = 0;j < 10;j++){
            array1[i][j] = 1;
            if(array1[i] > array1[j]){
                return console.log(i + ' not magic');
                }
            }       
        }
        return console.log('its magic');
    }

    buildArray()
// End of ecercise 5---------------------------------------------------------

