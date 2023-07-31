const button = document.querySelector('button')
const modalWindow = document.querySelector('.modal-window')
const container = document.querySelector('.container')
const closeButton = document.querySelector('.closeModal')
const moveTop = document.querySelector('.move_top')
const navBar = document.querySelector('.nav_bar')
const apiLoad = document.querySelector('.loading')
const hideBar = document.querySelector('.hide_bar')
const moreInformation = document.querySelector('.more_information')
const leftBottomItem = document.querySelector('.left_bottom_item')

function openModal(){
  modalWindow.classList.add('show')
  container.classList.add('show')
  button.classList.add('hide')
  document.body.style.overflow = 'hidden'
}
button.addEventListener('click', openModal)

function closeModal(){
  modalWindow.classList.remove('show')
  container.classList.remove('show')
  button.classList.remove('hide')
  document.body.style.overflow = ''
}
modalWindow.addEventListener('click', closeModal)
closeButton.addEventListener('click', closeModal)

function gotoTop(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
moveTop.addEventListener('click', gotoTop)


function updateScrollResult(){
  if(scrollY >= 650){
    leftBottomItem.classList.remove('hide')
    leftBottomItem.classList.add('show')
  }else if(scrollY >= 400){
    moveTop.classList.remove('hide')
    moveTop.classList.add('show')
    navBar.classList.add('hide')
  }else{
    moveTop.classList.remove('show')
    moveTop.classList.add('hide')
    navBar.classList.remove('hide')

    leftBottomItem.classList.remove('show')
    leftBottomItem.classList.add('hide')
  }
}

updateScrollResult()
window.addEventListener('scroll', updateScrollResult)


const scrollContainer = document.querySelector('.scroll_container')
let isDown = false // 플래그 : 현재 마우스 클릭여부 판단
let startX // 마우스 클릭시 마우스의 x 좌표 
let scrollLeft // 최근 스크롤바 위치 저장

scrollContainer.addEventListener('mousedown', e => {
  isDown = true
  scrollContainer.classList.add('active')
  // 컨테이너 기준 클릭한 마우스의 x 좌표
  startX = e.pageX - scrollContainer.offsetLeft
  // 현재 스크롤바 위치 저장
  scrollLeft = scrollContainer.scrollLeft
})

function deactive(){
  isDown = false
  scrollContainer.classList.remove('active')
}
scrollContainer.addEventListener('mouseleave', deactive)
scrollContainer.addEventListener('mouseup', deactive)

scrollContainer.addEventListener('mousemove', e => {
  if(!isDown) return
  e.preventDefault()
  // 마우스를 드래그할 때 현재 마우스의 x좌표
  const x = e.pageX - scrollContainer.offsetLeft
  // 마우스 드래그 지점에서 이전에 마우스 클릭지점까지 이동한 거리
  const walk = x - startX
  // 최근 스크롤바 위치에서 마우스 이동거리만큼 더하거나 빼줌
  scrollContainer.scrollLeft = scrollLeft - walk
})


fetch('https://picsum.photos/v2/list?page=2&limit=100')
  .then(response => response.json())
  .then(data => {
      data.sort((a, b) => a.author.localeCompare(b.author))
    
      // API로드 시간 측정 및 활용
      const downloadUrls = data.map(item => item.download_url)
      const begin = new Date().getMilliseconds()
      const end = new Date().getMilliseconds()
      const timeCheck = end - begin

      const authors = data.map(item => item.author)

      apiLoad.classList.remove('hide')
      setTimeout(() => {
        apiLoad.classList.add('hide')
      }, timeCheck)
      
    for(let i = 0; i < downloadUrls.length; i++){
      changeImage(i, downloadUrls[i])
      changeText(i, authors[i])

      cardChangeImage(i, downloadUrls[i])
      cardChangeText(i, authors[i])
    }
   
  })
  

  function changeImage(indexNum, arrayNum) {
    const imageElement = document.getElementsByClassName('item_img')[indexNum]
    if (imageElement){
      imageElement.src = arrayNum
    }
  }
  
  function cardChangeImage(indexNum, arrayNum) {
    const imageElement = document.getElementsByClassName('card_img')[indexNum]
    if (imageElement){
      imageElement.src = arrayNum
    }
  }

function changeText(i, author){
  const textElement = document.getElementsByClassName('author')[i]
  if(textElement){
    textElement.textContent = author
  }
}
function cardChangeText(i, author){
  const textElement = document.getElementsByClassName('card_text')[i]
  if(textElement){
    textElement.textContent = author
  }
}

const choseItem = document.querySelectorAll('.item')
const copyImage = document.querySelector('.copy_img')
const copyAuthor = document.querySelector('.copy_author')
const popupAuthor = document.querySelector('.popup_author')

function copyItem(e){
  const target = e.target
  const textElement = target.nextElementSibling
  const authorName = textElement.innerText
  
  copyImage.src = target.src
  copyAuthor.innerText = authorName
  popupAuthor.innerText = `현재 ${authorName}의 
                           작품을 보고 계십니다.`
  // console.log(textElement)
}
// console.log(popupAuthor)

for(let item of choseItem){
  item.addEventListener('click', copyItem)
}

const hideMenu = document.querySelector('.hide_menu')
const closeBtn = document.querySelector('.close_btn')
function showMenu(){
  hideBar.classList.remove('hide')
  hideBar.classList.add('show')
}
function closeMenu(){
  hideBar.classList.remove('show')
  hideBar.classList.add('hide')
}
hideMenu.addEventListener('click', showMenu)
closeBtn.addEventListener('click', closeMenu)


// 다크모드
const darkOn = document.querySelector('.dark_on')
const darkOff = document.querySelector('.dark_off')
const modalInformation = document.querySelector('.modal_information')
const darkInformation = document.querySelector('.dark_information')
const menuHovers = document.querySelectorAll('.menu_hover')

function changeDarkMode(){
  darkOn.classList.remove('show'); darkOn.classList.add('hide')
  
  darkOff.classList.remove('hide'); darkOff.classList.add('show')

  navBar.classList.add('gray'); document.body.classList.add('dark')

  modalInformation.classList.add('gray')
  darkInformation.classList.add('gray')
  hideBar.classList.add('dark')

  for(let menu of menuHovers){
    menu.classList.add('gray')
  }
}

function changeLightMode(){
  darkOff.classList.remove('show'); darkOff.classList.add('hide')

  darkOn.classList.remove('hide'); darkOn.classList.add('show')

  navBar.classList.remove('gray'); document.body.classList.remove('dark')

  modalInformation.classList.remove('gray')
  darkInformation.classList.remove('gray')
  hideBar.classList.remove('dark')

  for(let menu of menuHovers){
    menu.classList.remove('gray')
  }
}
darkOn.addEventListener('click', changeDarkMode)
darkOff.addEventListener('click', changeLightMode)

const closePopup = document.querySelector('.close_popup')
function popupclose(){
  leftBottomItem.classList.add('hide')
}
function popupopen(){
  leftBottomItem.classList.remove('hide')
  leftBottomItem.classList.add('show')
}
copyImage.addEventListener('click', popupopen)
closePopup.addEventListener('click', popupclose)


// 애니메이션
const animationSection = document.querySelectorAll('.card_component')
const header = document.querySelector('header')

window.addEventListener('scroll', (event) => {
  animationSection.forEach(section => {
    if((window.scrollY >= 1200)){
      const cards = section.querySelectorAll('.card')
      cards.forEach(card => card.classList.add('animation_show'))
    }else if(window.scrollY <= 200){
      const cards = section.querySelectorAll('.card')
      cards.forEach(card => card.classList.remove('animation_show'))
    }

  })
  
})

// 무한 스크롤
const cardComponent = document.querySelector('.card_component')
const card = document.querySelector('.card')

const scroller = new Scroller(false)

window.addEventListener('scroll', (event) => {
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )

  if(Math.abs(scroller.getScrollPosition() + document.documentElement.clientHeight - scrollHeight) < 100){
    // console.log('scroll is bottom')
    cardComponent.innerHTML += getCardList(20)
  }
})

function getCardList(num){
	let cardList = ''
	for(let i = 0; i < num; i++){
    console.log('scroll is bottom')
    cardList += `
    <div class="card up"> <img src="" class="card_img" alt=""> <div class="card_text"></div> </div>
    <div class="card down"> <img src="" class="card_img" alt=""> <div class="card_text"></div> </div>
    <div class="card up"> <img src="" class="card_img" alt=""> <div class="card_text"></div> </div>
    `
  }
  return cardList
}

// 새로고침 시 스크롤 맨 위로
window.onload = function(){
  setTimeout(function(){
    scrollTo(0, 0)
  }, 100)
}

const clickItems = document.querySelectorAll('.item')
function moveScroll(){
  window.scrollTo({
    top: 900,
    // left: 0,
    behavior: 'smooth'
  })  
}
clickItems.forEach(item => {
  item.addEventListener('click', moveScroll)
})



// 검색
function filter(){
  const value = document.getElementById('value').value.toUpperCase()
  const item = document.getElementsByClassName('item')

  for(i = 0; i < item.length; i++){
    author = item[i].getElementsByClassName('author')
    if(author[0].innerHTML.toUpperCase().indexOf(value) > -1){
      item[i].style.display = 'block'
    }else{
      item[i].style.display = 'none'
    }
  }
  console.log(value)
}