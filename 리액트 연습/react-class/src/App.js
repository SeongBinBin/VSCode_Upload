import React, { Component } from 'react';
import './App.css';

import Movie from './Movie';

// const users = [
//   {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//   {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//   {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
//   {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
//   {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
//   {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//   {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
//   {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//   {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//   {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
// ]

// class App extends Component{
//   render(){
//     const correctUser = users.filter((user) => {
//       return(
//       user.age > 0
//       && user.age % 1 === 0
//       && user.email.includes('@')
//       && user.email.includes('.com')
//       )
//     })
  
//     return(
//       <>
//         <h1>* 유효한 사용자 정보 *</h1>
//         {correctUser.map((user) => {
//           return(
//             <div key={user.name}>
//               <h3>{user.name} ({user.age})</h3>
//               <h3>{user.city}</h3>
//               <h3>{user.email}</h3>
//               <h3>----------------------</h3>
//             </div>
//           )
//         })}
//       </>
//     )
//   }
// }
// 2번

// class App extends Component{
//   state = {
//     friends: [
//       {name: 'victoria', age: 13, city: 'seoul'},
//       {name: 'sun', age: 34, city: 'busan'},
//       {name: 'johseb', age: 25, city: 'busan'},
//       {name: 'syleemomo', age: 9, city: 'seoul'},
//       {name: 'hannah', age: 41, city: 'daegu'},
//       {name: 'shara', age: 37, city: 'seoul'},
//       {name: 'martin', age: 28, city: 'daegu'},
//       {name: 'gorgia', age: 39, city: 'seoul'},
//       {name: 'nana', age: 24, city: 'busan'},
//       {name: 'dannel', age: 19, city: 'seoul'},
//     ],
//     updatedFriends: null 
//   }

//   filterCity = (city) => {
//     const filteredFriends = this.state.friends.filter((friend) => city === friend.city)
//     this.setState({updatedFriends: filteredFriends})
//   }

//   filterDelete = () => {
//     this.setState({updatedFriends: null})
//   }

//   render(){
//     let {friends, updatedFriends} = this.state

//     return(
//       <>
//         <button onClick={this.filterDelete}>전체</button>
//         <button onClick={() => this.filterCity("seoul")}>서울</button>
//         <button onClick={() => this.filterCity("busan")}>부산</button>
//         <button onClick={() => this.filterCity("daegu")}>대구</button>

//         <h1>필터링된 사용자 조회</h1>
//         {updatedFriends? updatedFriends.map((friend) => (
//             <div key={friend.name}>
//               <h3>이름: {friend.name} 나이: {friend.age} 지역: {friend.city}</h3>
//             </div>
//         )): friends.map((friend) => (
//             <div key={friend.name}>
//               <h3>이름: {friend.name} 나이: {friend.age} 지역: {friend.city}</h3>
//             </div>
//         ))
//       }
//       </>
//     )
//   }
// }
// 3번

const signs = [
  [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  ]
]

class App extends Component {
  state = {
    index: 0,
  }

  // 구현하기
  redraw = () => {
    const {index} = this.state
    const newIndex = (index + 1) % signs.length
    this.setState({index: newIndex})
  }

  componentDidMount(){
    setInterval(this.redraw, 1000)
  }

  // 구현하기
  render(){
    const { index } = this.state
    const currentSign = signs[index]

    return(
      <div className='sign'>
        {currentSign.map((sign, id) => {
          return(
            <div key={id}>
              {sign.map((col, colId) => (
                <div key={colId} className={col ? 'cell' : 'cell bright'}>

                </div>
              ))}
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;