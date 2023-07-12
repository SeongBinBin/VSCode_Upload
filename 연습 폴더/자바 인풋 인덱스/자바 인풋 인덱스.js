const colorBox = document.querySelector('.color-box')
const colorInput = document.getElementById('color-input')
const colorList = document.querySelector('.color-list')

// 색상목록 배열로 정의
const colors = ['orange', 'blue', 'brown', 'green', 'red', 'white', 'skyblue', 'black']

// 키 입력으로 선택한 이전 색상과 현재 색상의 인덱스값
let index = -1
let prevIndex = -1

// 색상목록 생성하고 문서에 마운트
function addColors(colors){
   for(let color of colors){
      const item = `<div class='color-item'>${color}</div>`
      colorList.innerHTML += item
   }
}
function initHighlight(){
   // index 값 초기화 전에 하이라이트 제거
   unsetHighLightItem(index)// 현재 화살표키로 선택한 하이라이트 제거
   index = -1
   prevIndex = -1   
}



function setBackground(color){
   console.log('you picked color :', color)
   colorInput.value = color   // 선택한 값이 인풋창에 입력되기
   colorList.classList.remove('show')
   colorBox.style.background = color   // 고른 값이 배경색으로 입력
   initHighlight() // 하이라이트 초기화

   // 키보드 이벤트 해제 (색상 리스트가 없는데도 키로 선택을 하면 안됨)
   colorInput.removeEventListener('keyup', selectColor)
}

function changeHighLightItem(key){
   prevIndex = index
   if(key === 40){ // 아래 화살표키를 누른 경우
      index++
      if(index > colors.length - 1){
         index = 0
      }
   }
   else if(key === 38){
      index--
      if(index < 0){
         index = colors.length - 1
      }
   }
   else if(key === 13){
      // 사용자가 현재 선택한 색상값 조회
      const colorItem = document.querySelectorAll('.color-item')[index]
      setBackground(colorItem.innerText) // 사용자가 현재 화살표키로 선택한 색상 문자열
   }
   // console.log('직전에 선택한 색상', prevIndex)
   // console.log('현재 선택한 색상', index)
}

function unsetHighLightItem(colorIndex){
   if(colorIndex >= 0 && colorIndex < colors.length){
      // 사용자가 직전에 화살표키로 선택한 색상 엘리먼트
      const colorItem = document.querySelectorAll('.color-item')[colorIndex]
      colorItem.classList.remove('highlight') // 하이라이트 해제
   }
}
function highLightColorItem(colorIndex){
   if(colorIndex >= 0 && colorIndex < colors.length){
      // 사용자가 현재 화살표키로 선택한 색상 엘리먼트
      const colorItem = document.querySelectorAll('.color-item')[colorIndex]
      colorItem.classList.add('highlight') // 하이라이트 설정
   }
}

function selectColor(e){
   // console.log(e.keyCode)

   if(e.keyCode){
      // 사용자가 선택한 색상에 대한 인덱스 값
      changeHighLightItem(e.keyCode)
      unsetHighLightItem(prevIndex) // 사용자가 직전에 선택한 색상에 대한 하이라이트 해제
      highLightColorItem(index) // 사용자가 현재 선택한 색상에 하이라이트 적용
   }
}

function typeColor(e){
   console.log(e.target.value) // 사용자 입력값
   // 랜덤값 생성
   // 값을 입력할때마다 colorBox 의 배경색을 랜덤값으로 설정 
   const hex = '#' + Math.round(Math.random() * 0xffffff).toString(16);
   colorBox.style.background = hex
   console.log(hex)

   if(e.target.value !== ''){
      // console.log('you typed somthing')
      colorList.classList.add('show')
      colorInput.addEventListener('keyup', selectColor)
      
   }
   else{
      // console.log('you didnt type anything')
      colorList.classList.remove('show')
      colorInput.removeEventListener('keyup', selectColor)
   }
}

function setColor(e){
   // console.log(e.target.value)
   
   if(e.target.className === 'color-item'){
      const pickedColor = e.target.innerText
      setBackground(pickedColor)
   }
}

addColors(colors)
colorInput.addEventListener('input', typeColor)
colorList.addEventListener('click', setColor) // 이벤트 위임