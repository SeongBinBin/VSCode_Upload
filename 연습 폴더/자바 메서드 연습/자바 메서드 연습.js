// const movies = [
//    {title: 'Harry Potter', release: '2003-02-22'}, 
//    {title: 'Indiana Jhones', release: '2009-01-09'}, 
//    {title: 'Jurassic Park', release: '2007-04-13'},
//    {title: 'Iron man', release: '2012-12-18'},
//    {title: 'Spider man', release: '2017-03-07'}
// ]

// function moiveTime(movie){
//    return (movie.release > '2005' && movie.release < '2010')   
// }
// const found = movies.find(moiveTime)
// console.log(found.title, '/' ,found.release)
// 2번 

// const movies = [
//    {title: 'Harry Potter', release: '2003-02-22'}, 
//    {title: 'Indiana Jhones', release: '2009-01-09'}, 
//    {title: 'Jurassic Park', release: '2007-04-13'},
//    {title: 'Iron man', release: '2012-12-18'},
//    {title: 'Spider man', release: '2017-03-07'}
// ]

// function movieName(movie){
//    if(movie.title.includes('man')){
//       return movie.title
//    }   
// }
// const found = movies.find(movieName)
// console.log(found.title, '/' ,found.release)
// 3번

// const movies = [
//    {title: 'Harry Potter', release: '2003-02-22'}, 
//    {title: 'Indiana Jhones', release: '2009-01-09'}, 
//    {title: 'Jurassic Park', release: '2007-04-13'},
//    {title: 'Iron man', release: '2012-12-18'},
//    {title: 'Spider man', release: '2017-03-07'}
// ]

// function movieName(movie){
//    return (movie.release < '2010' && movie.title.startsWith('J'))
// }
// const found = movies.find(movieName)
// console.log(found.title, '/' ,found.release)
// 4번

// const words = [
//    'abc',
//    'animal',
//    'fruit',
//    'abba',
//    'abcba',
//    'location',
//    'radar',
//    'madam',
//    'mario',
//    'level'
// ]
// const wordStr = []
// function findArray(word){
//    if(word.includes('a')){
//       wordStr.push(word)
//    }
// }
// const findA = words.forEach(findArray)
// console.log(wordStr)
// 5번

// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// fetch(API_URL)
// .then(function(res){
//    return res.json()
// })
// .then(function(products){
//    function test(itemTest){
//    return (itemTest.product_type === 'mascara' && parseInt(itemTest.price) < 10)
//    }   
   
//    const productFilter = products.filter(test)
//    console.log(productFilter)
// })
// 6번

// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// fetch(API_URL)
// .then(function(res){
//    return res.json()
// })
// .then(function(products){
//    function test(itemTest){
//    return (itemTest.product_type === 'lipstick' && (itemTest.rating >= 4 && itemTest.rating <= 5))
//    }   
   
//    const productFilter = products.filter(test)
//    console.log(productFilter)
// })
// 7번

// const friends = [
//    {name: 'victoria', age: 13, city: 'seoul'},
//    {name: 'sun', age: 34, city: 'busan'},
//    {name: 'johseb', age: 25, city: 'busan'},
//    {name: 'syleemomo', age: 9, city: 'seoul'},
//    {name: 'hannah', age: 41, city: 'daegu'},
//    {name: 'shara', age: 37, city: 'seoul'},
//    {name: 'martin', age: 28, city: 'daegu'},
//    {name: 'gorgia', age: 39, city: 'seoul'},
//    {name: 'nana', age: 24, city: 'busan'},
//    {name: 'dannel', age: 19, city: 'seoul'},
// ]

// function findFriends(friend){
//    return (friend.city === 'seoul' && friend.age < 30) 
// }
// const friendFilter = friends.filter(findFriends)
// console.log(friendFilter)
// 8번

// const friends = [
//    {name: 'victoria', age: 13, city: 'seoul'},
//    {name: 'sun', age: 34, city: 'busan'},
//    {name: 'johseb', age: 25, city: 'busan'},
//    {name: 'syleemomo', age: 9, city: 'seoul'},
//    {name: 'hannah', age: 41, city: 'daegu'},
//    {name: 'shara', age: 37, city: 'seoul'},
//    {name: 'martin', age: 28, city: 'daegu'},
//    {name: 'gorgia', age: 39, city: 'seoul'},
//    {name: 'nana', age: 24, city: 'busan'},
//    {name: 'dannel', age: 19, city: 'seoul'},
// ]
// function seoulCity(seoulElement){
//    if((seoulElement.city === 'seoul') === true){
//       return seoulElement
//    }
// }
// function busanCity(busanElement){
//    if((busanElement.city === 'busan') === true){
//       return busanElement
//    }
// }
// function daeguCity(daeguElement){
//    if((daeguElement.city === 'daegu') === true){
//       return daeguElement
//    }
// }

// const seoulSum = friends.filter(seoulCity)
// const busanSum = friends.filter(busanCity)
// const daeguSum = friends.filter(daeguCity)
// console.log('seoul :',seoulSum.length)
// console.log('busan :',busanSum.length)
// console.log('daegu :',daeguSum.length)
// 9번

// const friends = [
//    {name: 'victoria', age: 13, city: 'seoul'},
//    {name: 'sun', age: 34, city: 'busan'},
//    {name: 'johseb', age: 25, city: 'busan'},
//    {name: 'syleemomo', age: 9, city: 'seoul'},
//    {name: 'hannah', age: 41, city: 'daegu'},
//    {name: 'shara', age: 37, city: 'seoul'},
//    {name: 'martin', age: 28, city: 'daegu'},
//    {name: 'gorgia', age: 39, city: 'seoul'},
//    {name: 'nana', age: 24, city: 'busan'},
//    {name: 'dannel', age: 19, city: 'seoul'},
// ]

// function findAge(friend){
//    if(friend.age > 40){
//       return friend
//    }
// }
// const overAge = friends.some(findAge)
// console.log(overAge)
// 10번

// const users = [
//    {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//    {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//    {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'},
//    {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'},
//    {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'},
//    {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//    {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'},
//    {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//    {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//    {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
// ]

// function errorFind(user){
//    if(user.email.includes('com') && user.email.includes('@')
//    && !(user.age < 0 || user.age % 1 !== 0))

//    return user
// }
// const userFind = users.filter(errorFind)
// console.log(userFind)
// 11번

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
const rootDiv = document.getElementById('root')

// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// product 객체의 image_link, name, price, description 프로퍼티 사용하기
function buildElement(product){
   const div = document.createElement('div')
   div.className = 'product'
   
   const div_child =document.createElement('div')
   div_child.className = 'product-img'

   const img = document.createElement('img')
   img.className = 'img'
   img.src = product.image_link

   const name = document.createElement('h3')
   name.className = 'product-name'
   name.innerText = `${product.name} ($${product.price})`
   

   const description = document.createElement('p')
   description.className = 'product-description'
   description.innerText = product.description

   div.append(div_child, name, description)
   div_child.append(img)

   return div
}

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(product){
   console.log(product)
   rootDiv.appendChild(product)
}

fetch(API_URL)
.then(function(res){
   return res.json()
})
.then(function(products){
   console.log(products)

   // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
   const productsRefined = products.map(buildElement)
   
   // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
   productsRefined.forEach(displayProduct)
})
// 12번

