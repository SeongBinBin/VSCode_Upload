// import React, { useEffect, useState } from 'react';
import React, { useRef, useState, useMemo, useCallback, useReducer, useEffect } from 'react';
// import React, {Component} from 'react';
import './App.css';

// import UserList from './Component/UserList'
// import CreateUser from './Component/CreateUser'
// // import Counter from './Component/Counter'

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   inputs: {
//     username: '',
//     email: ''
//   },
//   users: [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false
//     }
//   ]
// };

// function reducer(state, action){
//   switch(action.type){
//     case 'CHANGE_INPUT':
//       return{
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.name]: action.value
//         }
//       }
//     case 'CREATE_USER':
//       return{
//         inputs: initialState.inputs,
//         users: state.users.concat(action.user)
//       }
//     case 'TOGGLE_USER':
//       return{
//         ...state,
//         users: state.users.map(user => 
//           user.id === action.id? {...user, active: !user.active}: user)
//       }
//     case 'REMOVE_USER':
//       return{
//         ...state,
//         users: state.users.filter(user => user.id !== action.id)
//       }
//     default:
//       return state
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   const {users, inputs} = state
//   const {username, email} = inputs
//   const nextId = useRef(4)

//   const onChange = useCallback(e => {
//     const {name, value} = e.target  // input
//     dispatch({
//       type: 'CHANGE_INPUT',
//       name, // username / email
//       value // 사용자가 입력한 값
//     })
//   }, [])

//   const onCreate = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     })
//     nextId.current += 1
//   }, [username, email])

//   const onToggle = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     })
//   }, [])

//   const onRemove = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     })
//   }, [])

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <>
//       <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
//       <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }


import Product from './Component/Product';
import Header from './Component/Header';
import './css/Header.css'
import './css/Beauty.css'

function App(){
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState("")
  const [show, setShow] = useState(true)
  const [scrollToTop, setScrollToTop] = useState(false)
  const [sortPrice, setSortPrice] = useState(false)

  useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(res => res.json())
    .then(result => {
      setLoading(false)
      setProducts(result)
      loadingHide()
    })
    window.addEventListener('scroll', handleScroll)
  }, [])

  const loadingHide = () => {
    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  const handleScroll = () => {
    if(window.scrollY > 300){
      setScrollToTop(true)
    }else{
      setScrollToTop(false)
    }
  }
  console.log(window.scrollY)

  const handleSortByPrice = () => {
    setSortPrice((prevState) => !prevState)
  }

  const textSearch = (keyword) => {
    setSearchText(keyword)
  }

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  const sortProducts = [...products].sort((a,b) => {
    if(sortPrice){
      return a.price - b.price
    }
  })
  const filteredProducts = sortProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchText.toLowerCase())
  })
  
  if(!loading){
    return(
      <div className='test'>
        <div className={`loading ${show? "": 'close'}`}>
          <div>로딩 완료!</div>
        </div>

        <Header onSearch={(keyword) => textSearch(keyword)}
        handleSortByPrice={handleSortByPrice}></Header>
        {filteredProducts.map(product => {
          return(
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              cover={product.image_link}
              description={product.description}
            >
            </Product>
          )
        })}
        <p className={scrollToTop? 'scrollToTop': 'close'} onClick={scrollTop}>Scroll To Top</p>
      </div>
    )
  }
}


export default App;