import React, { Component } from 'react';
import './App.css';


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

import Product from './Component/Product';
import Header from './Component/Header';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      products: [],
      searchText: ""
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

  textSearch = (keyword) => {
    this.setState({searchText: keyword})
  }

  render(){
    const {loading, products, searchText} = this.state

    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchText.toLowerCase())
    })
  
    if(loading){
      return(
        <div className='loading'>
          <h1>Loding ... </h1>
        </div>
      )
    }else{
      return(
        <div className='test'>
          {/* <div className="header">
                <button className="sort-btns">Price</button>
          </div> */}
          <Header onSearch={(keyword) => this.textSearch(keyword)}></Header>
          {filteredProducts.map(product => {
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
// 5번

export default App;