const photos = document.getElementById('photos')
const photosLength = document.querySelectorAll('.photo').length
const selection = document.querySelector('#selection')
const widthOfPhotos = 500 // 사진너비 (500px)
let timerId = null // 타이머 ID 값 (타이머 정지)
let index = 0

function changeIndicator(index){
   const prevIndicator = selection.querySelector('.active')
   prevIndicator.classList.remove('active')
   const activeIndicator = selection.querySelectorAll('.options')[index]
   activeIndicator.classList.add('active')
}
function changePostion(){
   index++
   if(index > photosLength - 1){
      index = 0
   }
   photos.style.marginLeft = -1 * index * widthOfPhotos + 'px'
   
   //인디케이터 변경
   changeIndicator(index)
}
function startCarousel(){
   // 1초마다 마진값 변경
   timerId = setInterval(changePostion, 1000)
}
function stopCarousel(){
   // 타이머 정지
   clearInterval(timerId)
}

photos.addEventListener('mouseenter', startCarousel)
photos.addEventListener('mouseleave', stopCarousel)



// const photoContainer = document.getElementById('photo-container')
// const photos = document.getElementById('photos')
// const widthOfPhotos = 500 // 사진너비 (500px)
// let marginLeft = widthOfPhotos // 사진의 이동간격
// let timerId = null // 타이머 ID 값 (타이머 정지)

// function changeIndicator(index){
//    // 이전에 active한 인디케이터를 찾아서 active 클래스 제거
//    const selection = document.getElementById('selection')
//    const activeOption = selection.querySelector('.active')
//    if(activeOption) activeOption.classList.remove('active')
//    // 현재 index에 해당하는 인디케이터에 active 클래스 추가
//    selection.querySelectorAll('.options')[index].classList.add('active')
// }

// function changePostion(){
//    const photosLength = photos.querySelectorAll('.photo').length // 사진의 갯수 계산
//    // photos 컨테이너를 왼쪽으로 이동시켜주기
//    photos.style.marginLeft = marginLeft * -1 + 'px' // -1 곱하여 왼쪽으로 이동, 'px' 더하여 문자열에서 픽셀값으로 변경
//    // marginLeft = marginLeft >= (photosLength - 1) * widthOfPhotos ? 0 : marginLeft + widthOfPhotos // 마지막 사진이면 다시 초기로 돌아가기

//    //현재 사진의 인덱스 값 계산
//    const index = parseInt(marginLeft / widthOfPhotos)
//    changeIndicator(index) // 해당하는 index의 인디케이터 변경

//    if(marginLeft >= ((photosLength - 1) * widthOfPhotos)){
//       marginLeft = 0
//    }
//    else{
//       marginLeft = marginLeft + widthOfPhotos
//    }

// }
// function startCarousel(){
//    // 1초마다 마진값 변경
//    timerId = setInterval(changePostion, 1000)
// }
// function stopCarousel(){
//    // 타이머 정지
//    clearInterval(timerId)
// }

// photoContainer.addEventListener('mouseenter', startCarousel)
// photoContainer.addEventListener('mouseleave', stopCarousel)