// const area = document.getElementById('area')
// const randomBtn = document.querySelectorAll('.rnd')


// const change_r = Math.floor(Math.random()*256)
// const change_g = Math.floor(Math.random()*256)
// const change_b = Math.floor(Math.random()*256)



// // randomBtn.addEventListener('click', changeColor)

// for(let i = 0; i < randomBtn.length; i++){
//    randomBtn[i].addEventListener('click',changeColor)
//    // function changeColor(){
//    //    randomBtn[i].style.background = `rgb(${change_r}, ${change_g}, ${change_b})` 
//    // }
   
// }

// function changeColor(e){
//    e.target.style.background = `rgb(${change_r}, ${change_g}, ${change_b})`
// }
// 1번


// const imgChange = document.querySelector('.test')

// function showImg(){
//    imgChange.classList.add('show')
// }
// function hideImg(){
//    imgChange.classList.remove('show')
// }

// setTimeout(showImg, 1000)
// setTimeout(hideImg, 3000)
// 2번

// const count = document.getElementById('num')

// function getTime(){
//    const time = new Date()
//    const seconds = time.getSeconds()

//    count.innerHTML = `${seconds}`
// }
// setInterval(getTime, 1000)
// 3번


// let text = document.querySelector(".text")
// let content = 'You are watching text now !'
// let i = 0

// function typingText()
// {
//   if(i < content.length)
//   {
//     let count = content.charAt(i)
//     text.innerHTML += count
//     i++
//   }
//   else if(i > content.length){
//    clearInterval(test)
//   }
// }

// const test = setInterval(typingText, 1000)
// 4번


// function clickCircle(e){
//    const Xcheck = e.clientX
//    const Ycheck = e.clientY
//    // circle.style.left = Xcheck + 'px'
//    // circle.style.top = Ycheck + 'px'
//    // console.log(Xcheck,Ycheck)

//    const test = document.createElement('div')
//    test.className = 'circle'
//    // const Xplus = document.createTextNode(Xcheck)
//    // const Yplus = document.createTextNode(Ycheck)
//    test.style.top = Ycheck + 'px'
//    test.style.left = Xcheck + 'px'
   
   
//    console.log(test)

//    // const currentDiv = document.getElementById('circle')
//    document.body.appendChild(test)
// }

// // window.addEventListener('mousemove', moveCircle)
// window.addEventListener('click', clickCircle)
// 5번



const photos = document.getElementById('photos')
const photosLength = photos.querySelectorAll('.photo').length // 사진의 총 갯수
const selection = document.querySelector('#selection') // 인디케이터 컨테이너
const widthOfPhoto = 500 // 사진너비 
let timerID = null // 타이머 ID 
let index = 0 // 사진 인덱스 


// function changeIndicator(index){
//   const prevIndicator = selection.querySelector('.active') // 이전 인디케이터 비활성화
//   prevIndicator.classList.remove('active')
//   const activeIndicator = selection.querySelectorAll('.options')[index] // 현재 인디케이터 활성화
//   activeIndicator.classList.add('active')
// }

function changePosition(e){
if(e.target.className === 'options'){

   // 현재 클릭한 인디케이터 스타일 변경
   e.target.classList.add('active')
}
else if(e.target.className === 'options active'){
   e.target.classList.remove('active')
}
console.log(index)
//   index++
//   if(index > photosLength - 1){ // 인덱스 초기화
//     index = 0 
//   }
//   photos.style.marginLeft = -1 * index * widthOfPhoto + 'px' // 왼쪽으로 이동
//   changeIndicator(index) // 인디케이터 변경
  
}
// function startCarousel(){
//   timerID = setInterval(changePosition, 1000)
// }
// function stopCarousel(){
//   clearInterval(timerID)
// }

selection.addEventListener('click', changePosition)
// photos.addEventListener('mouseleave', stopCarousel)


