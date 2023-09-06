import React, { Component } from 'react';
import './App.css';

// class App extends Component{
//   state = {
//     count: []
//   }
//   pickRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max-min+1)) + min
//   }
//   createdNumber = () => {
//     const numbers = []
//     // for(let i = 0; i < 6; i++){
//     //   const random = this.pickRandomNumber(1, 45)
//     //   if(!numbers.includes(random)){
//     //     numbers.push(random)
//     //   }
//     // }
//     while (numbers.length < 6) {
//       const random = this.pickRandomNumber(1, 45);
//       if (!numbers.includes(random)) {
//         numbers.push(random);
//       }
//     }
//     this.setState({count: numbers})
//   }
//   componentDidMount(){
//     this.timerId = setInterval(this.createdNumber, 1000);
//   }

//   render(){
//     const {count} = this.state
//     console.log(count)
//     return(
//       <div className='App'>
//         <h1>로또번호 자동 생성기</h1>
//         <h1>카운팅 : {count.join(', ')}</h1>
//       </div>
//     )
//   }
// }
// 2번

// import dummyData from './dummyData';
// class App extends Component{
//   state = {
//     count: 0
//   }
//   increaseCount = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   componentDidMount(){
//     this.countID = setInterval(this.increaseCount, 1000)
//   }

//   render(){
//     const {count} = this.state
//     const words = dummyData[count % dummyData.length]
    
//     return(
//       <div className='word'>
//         <h1>{words.word}</h1>
//         <h3>{words.meaning}</h3>
//       </div>
//     )
//   }
// }
// 3번

import Product from './Product';
import Header from './Header';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      products: []
    }
  }

  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(res => res.json())
    .then(result => {
      const products = result
      console.log(products)
      this.setState({loading: false, products})
    })
  }

  // 원본을 선택할지 정렬된 배열을 선택할지 상태를 변경하는 함수
  sortProduct(){
    const sort = true
    
  }


  render(){
    const {loading, products} = this.state
    const loadingStyle = {
      position: 'absolute', 
      left: '50%', 
      top:'50%', 
      transform: 'translate(-50%, -50%)', 
      fontSize: '2rem'
    }
  
    if(loading){
      return(
        <div style={loadingStyle}>
          <h1>Loding ... </h1>
        </div>
      )
    }else{
      return(
        <div className='root'>
          {/* <div className="header">
                <button className="sort-btns">Price</button>
          </div> */}
          <Header></Header>
          {products.map(product => {
            return(
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                cover={product.image_link}
                description={product.description}
              ></Product>
            )
          })}
        </div>
      )
    }
  }
}
// 4번

export default App;