// function biggerThanThree(numbers){
//    let results = []
//    for(let i = 0; i < numbers.length; i++){
//       if(numbers[i] > 3){
//          // 새로운 배열에 조건을 만족하는 값을 복사 
//          results.push(numbers[i]);
//       }
//    }
//    return results;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(biggerThanThree(numbers));



// inputvalue = prompt('100 이상의 숫자를 입력해주세요')
// console.log(Number(inputvalue))

  
let inputvalue = 0;
while(true){
   inputvalue = prompt('100 이상의 숫자를 입력해주세요.')   
   
   // if(inputvalue < 99) {
   //    continue;
   // }
   if(inputvalue === null){
      break;
   }
   else if(inputvalue === '' || inputvalue === ' ' || inputvalue === '  '){
      console.log('숫자를 입력해주세요.')
      break;
   }
   else if(inputvalue > 99){
      console.log(inputvalue)
      break;
   }
   else if(inputvalue < 99){
      continue;
   }
   else if(Number(inputvalue) !== NaN){
      console.log('숫자를 입력해주세요.')
      break; 
   }
}