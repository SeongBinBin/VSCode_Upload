import React, { Component } from 'react';
import './App.css';


import Button from './Button'

// 서버에서 넘어온 가상의 위치 데이터
const coordinates = [
  {
    "name": "서울 강남",
    "coordinate": [
        37.497944,  // 위도
        127.027618  // 경도
    ]
  },
  {
      "name": "대구 동성로",
      "coordinate": [
          35.865467,
          128.593369
      ]
  },
  {
      "name": "부산 해운대",
      "coordinate": [
          35.1884,
          129.166957
      ]
  },
  {
    "name": "대전 서구",
    "coordinate": [
        36.3504,
        127.384912
    ]
  },
  {
    "name": "제주 서귀포",
    "coordinate": [
        33.2540,
        126.559445
    ]
  },
  {
    "name": "일본 오사카",
    "coordinate": [
        34.5692,
        135.515221
    ]
  },
]
class App extends Component{
  state = {
    selectedValue: '',  // 사용자가 선택한 메뉴
    map: null,
    marker: null,
    info: ''  // 사용자가 선택한 위치정보
  }

  decomposeArgs = (args) => {
    const {name, coordinate} = args
    const [lat, lon] = coordinate
    return [lat, lon, name] // 위치정보 반환하기 (위도/경도/지역명)
  }
  display = (map, marker, loc) => {
    const [lat, lon, name] = this.decomposeArgs(loc)
    this.displayLocation(lat, lon, name, map, marker) // 사용자가 선택한 위치를 지도에 표시하기
  }
  displayLocation = (lat, lon, name, mapObj, marker) => {
    const map = mapObj.setView([lat, lon], 13)

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    marker.setLatLng([lat, lon])  // 마커 위치기 설정한 위도, 경도로 변경
    .bindPopup(name)  // 마커에 대한 말풍선 표시
    .openPopup()

    this.setState({   // 화면에 위치정보(위도/경도/지역명) 보여주기
      info:`
        지역: ${name}
        위치: ${lat} (위도) / ${lon} (경도)
      `
    })
  }

  selectItem = (e) => {
    const {map, marker} = this.state

    // 사용자가 선택한 위치정보 조회
    const selectedLocation = coordinates[e.target.selectedIndex] // 사용자가 선택한 위치정보 조회하기
    console.log(selectedLocation)

    this.display(map, marker, selectedLocation)
    this.setState({selectedValue: e.target.value})
  }

  componentDidMount(){
    const map = window.L.map('map')   // 지도 객체 조회하기
    const marker = window.L.marker([0, 0]).addTo(map)   // 마커 객체 조회하기

    const firstLocation = coordinates[0]  // 초기 위치정보 조회하기
    this.display(map, marker, firstLocation)  // 지도에 초기 위치정보 디스플레이
    this.setState({map, marker}) // 초기 렌더링시 한번만 정의하기
  }

  render(){
    const {selectedValue, info} = this.state

    return(
      <div className='App'>
        <select value={selectedValue} onChange={this.selectItem}>
          {coordinates.length !== 0 && coordinates.map((coord, id) => {
            return <option key={id} value={coord.name}>{coord.name}</option>
          })}
        </select>

        <div id="map"></div>
        <p>{info}</p>
      </div>
    )
  }
}


// import Sidebar from './Component/Sidebar'
// import Button from './Button';

// const menus = [ // 메뉴 데이터 (서버에서 전달받아서 보여주는 데이터)
//   {
//     icon: '♜',
//     title: 'HOME'
//   },
//   {
//     icon: '♞',
//     title: 'ABOUT'
//   },
//   {
//     icon: '☻',
//     title: 'SETTING'
//   },
//   {
//     icon: '♜',
//     title: 'HOME'
//   },
//   {
//     icon: '♞',
//     title: 'ABOUT'
//   },
//   {
//     icon: '☻',
//     title: 'SETTING'
//   }
// ]

// class App extends Component{
//   state = {
//     toggle: false 
//   }
//   toggleMenu = () => {
//     this.setState({ toggle: !this.state.toggle })
//   }
//   render(){
//     const { toggle } = this.state 

//     return (
//       <div className='App'>
//         <Button handleClick={this.toggleMenu}>사이드바 열기/닫기</Button>
//         <Sidebar open={toggle}>
//           {menus.map( (menu, id) => {
//             return <div className='menu' key={id}>
//               {menu.icon} {menu.title}
//             </div>
//           })}
//         </Sidebar>
//       </div>
//     )
//   }
// }
// 연습 대비

// import Nav from './Nav'

// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <Nav></Nav>
//       </div>
//     )
//   }  
// }
// 1번

// import Modal from './Modal'
// import Button from './Button'

// class App extends Component{
//   state = {
//     open: false,
//     show: false
//   }
//   openModal = () => {
//     this.setState({open: true})
//     this.setState({show: false})
//   }
//   removeModal = () => {
//     this.setState({open: false})
//     this.setState({show: true})
//   }
//   closeModal = () => {
//     this.setState({open: false})
//   }

//   render(){
//     const {open, show} = this.state
//     const {openModal, closeModal, removeModal} = this 

//     return(
//       <div className='App'>
//         <Button handleClick={openModal} color="tomato">Remove Todo</Button>
//         <h1>{show? 'Removed Successfully !': ""}</h1>
//         <Modal open={open}>
//           <div className='Modal-header'>You want to remove this Todo ? </div>
//           <div className='Modal-body'>
//             <label>If you remove this Todo, you cannot see this gain later !</label>
//           </div>
//           <div className='Modal-footer'>
//             <Button size="small" handleClick={removeModal}>Remove</Button>
//             <Button size="small" handleClick={closeModal}>Close</Button>
//           </div>
//         </Modal>
//       </div>
//     )
//   }
// }
// 2번

// import dummyData from './Component/dummyData';

// class App extends Component{
//   state = {
//     count: 0
//   }
//   increaseCount = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   componentDidMount(){
//     this.countID = setInterval(this.increaseCount, 1500)
//   }

//   render(){
//     const {count} = this.state
//     const words = dummyData[count % dummyData.length]
    
//     return(
//       <div className='word_card'>
//         <h1>Flash card</h1>
//         <div className='word'>
//           <h2>{words.word}</h2>
//           <h2>{words.meaning}</h2>
//         </div>
//       </div>
//     )
//   }
// }
// 3번

// import Input from './Input'

// function App(){
//   const handleChange = () => console.log('Typing something ... ')
//   return(
//     <div className='App'>
//       <Input size="small" color="skyblue" handleChange={handleChange} disabled={true} label="Add Todo" placeholder="Type todo to add ..."/>
//       <Input size="medium" color="tomato" label="입력창" placeholder="뭐든지 입력하세요 !"/>
//       <Input size="large" color="grey" label="Remove Todo" placeholder="Type todo to remove ..."/>
//     </div>
//   )
// }
// 4번

// import Product from './Component/Product';
// import Header from './Component/Header';

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       loading: true,
//       products: [],
//       searchText: ""
//     }
//   }

//   componentDidMount(){
//     fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
//     .then(res => res.json())
//     .then(result => {
//       const products = result
//       console.log(products)
//       this.setState({loading: false, products})
//     })
//   }

//   textSearch = (keyword) => {
//     this.setState({searchText: keyword})
//   }

//   render(){
//     const {loading, products, searchText} = this.state

//     const filteredProducts = products.filter((product) => {
//       return product.name.toLowerCase().includes(searchText.toLowerCase())
//     })
  
//     if(loading){
//       return(
//         <div className='loading'>
//           <h1>Loding ... </h1>
//         </div>
//       )
//     }else{
//       return(
//         <div className='test'>
//           {/* <div className="header">
//                 <button className="sort-btns">Price</button>
//           </div> */}
//           <Header onSearch={(keyword) => this.textSearch(keyword)}></Header>
//           {filteredProducts.map(product => {
//             return(
//               <Product
//                 key={product.id}
//                 name={product.name}
//                 price={product.price}
//                 cover={product.image_link}
//                 description={product.description}
//               ></Product>
//             )
//           })}
//         </div>
//       )
//     }
//   }
// }
// 5번

export default App;