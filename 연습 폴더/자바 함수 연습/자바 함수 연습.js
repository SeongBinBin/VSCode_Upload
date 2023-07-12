// function findMaxValue(...args){
//    // parseFloat(args)
//    for(let i = 0; i < args.length; i++){
//       if(typeof args[i] === 'object' || args[i] === 'zip'){
//          args.splice(i, 1)
//          i--
//       }
//    }
//    return Math.max(...args) 
// }
// console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
// console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [], "2045.8", 'zip', 54, "1024"))
// 1번

// function Movie(title, author, release){
//     this.title = title
//     this.author = author
//     this.release = release

//     this.printMovieInfo = () => {
//         function getInfo(){
//             return `${this.title}-${this.author}는 ${this.release}에 발매되었다.`
//         }
//         console.log(getInfo.call(this)) 
//     }
// }

// const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")
// movie.printMovieInfo()
// 2번

// function countDuplication(keyword, ...args) {
//    let count = 0;
//    for (let i = 0; i < args.length; i++) {
//      if (args[i] === keyword) {
//        count++;
//      }
//    }
//    return count;
// }
 
// console.log(countDuplication('cat', 'apple', 'cat', 'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat'));
// 4번

// function add(...args) {
//    let sum = 0;
   
//    for (let i = 0; i < args.length; i++) {
//      const notNaNValue = parseFloat(args[i]);
//      if (isNaN(notNaNValue) === false) {
//        sum += notNaNValue;
//      }
//    }
   
//    return sum;
//  }
 
//  console.log(add(3, null, 19, false, '9', [], 7, {}, '', 34, 'earth', '3.9'));
// 5번

// function divider(flag, ...args){
//    if(flag === 0){
//       return args
//    }
//    else{
//       const result =[]
//       for(let i = 0; i < args.length; i++){
//          result.push(args[i] / flag)
//       }
//       return result
//    }
// }

// console.log(divider(2, 39, 4, 7, 28, 62, 28))
// console.log(divider(0, 39, 4, 7, 28, 62, 28))
// 6번

const numbers = [121, 23, 345, 43, 59]
const temp = 0

function pickIndex(len){
   return Math.floor(Math.random() * len)
}
function shuffle(arr){
   for(let i = 0; i < numbers.length; i++){
      temp = numbers[i]
      arr = pickIndex
      pickIndex = temp
      return shuffle
   }   
}

console.log(shuffle(numbers))