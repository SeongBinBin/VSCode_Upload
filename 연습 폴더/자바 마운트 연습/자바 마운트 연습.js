const menu = document.createElement('div')
menu.id = 'menu'

const bar = document.createElement('div')
bar.className = 'bar'
const bar_2 = document.createElement('div')
bar_2.className = 'bar'
const bar_3 = document.createElement('div')
bar_3.className = 'bar'

const screen_mode = document.createElement('div')
screen_mode.id = 'screen-mode'

const circle_btn = document.createElement('div')
circle_btn.id = 'circle-btn'

const profile_menu = document.createElement('div')
profile_menu.id = 'profile-menu'

const img_1 = document.createElement('img')
img_1.src = 'https://cdn.pixabay.com/photo/2022/12/24/14/18/bear-7675987_1280.jpg'
img_1.alt = 'img_1'

const center = document.createElement('div')
center.id = 'center'

const healing = document.createElement('div')
healing.id = 'healing'

const healing_h1 = document.createElement('h1')
healing_h1.innerText = 'My photo gallery'
const healing_h4 = document.createElement('h4')
healing_h4.innerText = 'my old memories from my life'

const search = document.createElement('div')
search.id = 'search'

const search_input = document.createElement('input')
search_input.type = 'text'
search_input.placeholder = 'Search photo ... '

const photo_container = document.createElement('div')
photo_container.className = 'photo-container'
const photo_container_2 = document.createElement('div')
photo_container_2.className = 'photo-container'
const photo_container_3 = document.createElement('div')
photo_container_3.className = 'photo-container'
const photo_container_4 = document.createElement('div')
photo_container_4.className = 'photo-container'


const photo_card = document.createElement('div')
photo_card.className = 'photo-card'
const photo_card_2 = document.createElement('div')
photo_card_2.className = 'photo-card'
const photo_card_3 = document.createElement('div')
photo_card_3.className = 'photo-card'
const photo_card_4 = document.createElement('div')
photo_card_4.className = 'photo-card'


const img_2 = document.createElement('img')
img_2.src = 'https://cdn.pixabay.com/photo/2022/12/24/14/18/bear-7675987_1280.jpg'
img_2.alt = 'img_2'
const img_3 = document.createElement('img')
img_3.src = 'https://cdn.pixabay.com/photo/2022/12/24/14/18/bear-7675987_1280.jpg'
img_3.alt = 'img_3'
const img_4 = document.createElement('img')
img_4.src = 'https://cdn.pixabay.com/photo/2022/12/24/14/18/bear-7675987_1280.jpg'
img_4.alt = 'img_4'
const img_5 = document.createElement('img')
img_5.src = 'https://cdn.pixabay.com/photo/2022/12/24/14/18/bear-7675987_1280.jpg'
img_5.alt = 'img_5'

const photo_name = document.createElement('div')
photo_name.className = 'photo-name'
photo_name.innerText = '이름'
const photo_name_2 = document.createElement('div')
photo_name_2.className = 'photo-name'
photo_name_2.innerText = '이름'
const photo_name_3 = document.createElement('div')
photo_name_3.className = 'photo-name'
photo_name_3.innerText = '이름'
const photo_name_4 = document.createElement('div')
photo_name_4.className = 'photo-name'
photo_name_4.innerText = '이름'


const header = document.createElement('div')
header.id = 'header'
header.innerText = 'Food Recipe'

const body = document.createElement('div')
body.id = 'body'

const body_p = document.createElement('p')
body_p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi nesciunt facilis tempora qui temporibus, odio dolores reiciendis, quis voluptate ducimus quam. Voluptatum omnis, rem quam porro ipsam nam dolorum.'

const footer = document.createElement('div')
footer.id = 'footer'

const footer_btn = document.createElement('button')
footer_btn.innerText = 'Close'

// const body_mount = document.body.appendChild(title) 바디에 추가 하는법

const nav_mount = document.getElementById('nav')
nav_mount.append(menu, screen_mode, profile_menu)

const menu_mount = document.getElementById('menu')
menu_mount.append(bar, bar_2, bar_3)

const screen_mode_mount = document.getElementById('screen-mode')
screen_mode_mount.append(circle_btn)

const profile_menu_mount = document.getElementById('profile-menu')
profile_menu_mount.append(img_1)

const title_mount = document.getElementById('title')
title_mount.append(center)

const center_mount = document.getElementById('center')
center_mount.append(healing, search)

const healing_mount = document.getElementById('healing')
healing_mount.append(healing_h1, healing_h4)

const search_mount = document.getElementById('search')
search_mount.append(search_input)

const photo_list_mount = document.getElementById('photo-list')
photo_list_mount.append(photo_container,photo_container_2,photo_container_3,photo_container_4)

photo_container.append(photo_card)
photo_container_2.append(photo_card_2)
photo_container_3.append(photo_card_3)
photo_container_4.append(photo_card_4)

photo_card.append(img_2, photo_name)
photo_card_2.append(img_3, photo_name_2)
photo_card_3.append(img_4, photo_name_3)
photo_card_4.append(img_5, photo_name_4)


const modal_window = document.getElementsByClassName('modal-window')[0]
modal_window.append(header, body, footer)

const body_mount = document.getElementById('body')
body_mount.append(body_p)

const footer_mount = document.getElementById('footer')
footer_mount.append(footer_btn)