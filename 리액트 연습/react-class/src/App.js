import React, { Component } from 'react';
import './App.css';


// import Button from './Button'
// import youtubeVideos from './Component/youtubeVideos';
// class App extends Component{
//   state = {
//     index: 0
//   }
//   decreaseIndex = () => {
//     const nextIndex = this.state.index - 1
//     this.setState({index: (nextIndex < 0)? youtubeVideos.length - 1: nextIndex})
//   }
//   increaseIndex = () => {
//     const nextIndex = this.state.index + 1
//     this.setState({index: (nextIndex > youtubeVideos.length - 1)? 0: nextIndex})
//   }

//   render(){
//     const {index} = this.state
//     const path = youtubeVideos[index].src
//     const title = youtubeVideos[index].title

//     return(
//       <div className='App'>
//         <div>
//           <iframe src={path} alt={title}></iframe>
//           <p>{title}</p>
//         </div>

//         <div className='control-btns'>
//           <Button handleClick={this.decreaseIndex}>이전</Button>
//           <Button handleClick={this.increaseIndex}>다음</Button>
//         </div>
//       </div>
//     )
//   }
// }
// 1번

// import Button from './Button'
// import Modal from './Modal'
// import loginData from './Component/loginData';
// class App extends Component{
//   state = {
//     id: '',
//     password: '',
//     open: true,
//     show: false,
//     modal: false,
//   }
 
//   handleChange = (e) => {
//     const {name, value} = e.target
//     this.setState({[name]: value})
//   }
//   login = (e) => {
//     e.preventDefault()
//     const {id, password} = this.state
    
//     if(id !== loginData.USER_ID || password !== loginData.USER_PASSWORD){
//       // alert(`You Failed To Login ! `)
//       this.setState({modal: true})
//     }else{
//       // alert(`You Successed To Login ! `)
//       this.setState({open: false})
//       this.setState({show: true})
//     }
//   }
//   closeModal = () => {
//     this.setState({modal: false})
//   }

//   render(){
//     const {id, password, open, show, modal} = this.state
    
//     return(
//       <div className='App'>
//         {open && (
//           <form>
//             <label>ID
//               <input type="text" placeholder='아이디를 입력해주세요.' name='id' value={id} onChange={this.handleChange}></input>
//             </label>
//             <label>PASSWORD
//               <input type="password" placeholder='비밀번호를 입력해주세요.' name='password' value={password} onChange={this.handleChange}></input>
//             </label>
//             <div className='login-btn'><Button handleClick={this.login}>LOGIN</Button></div>
//           </form>
//         )}
//         <Modal open={modal}>
//           <div className='Modal-body'><br/>You Failed To Login !</div>
//           <div className='Modal-footer'><Button handleClick={this.closeModal}>CLOSE</Button></div>
//         </Modal>
//         <div>
//           {show && (
//             <h1 open={show}>HOME PAGE</h1>
//           )}
//         </div>
//       </div>
//     )
//   }
// }
// 2번, 3번

// import Button from './Button'
// class App extends Component{
//   state = {
//     selectedFiles: [],
//     imagePreviews: [],
//   }
//   fileInput = React.createRef()

//   handleButtonClick = () => {
//     this.fileInput.current.click()
//   }
//   handleChange = (e) => {
//     const selectedFiles = Array.from(e.target.files)
//     this.setState({selectedFiles})

//     const imagePreviews = selectedFiles.map((file) => URL.createObjectURL(file))
//     this.setState({imagePreviews})
//   }

//   render(){
//     const {selectedFiles, imagePreviews} = this.state
//     return(
//       <div className='App'>
//         {imagePreviews.length > 0 && (
//           <div>
//             {imagePreviews.map((preview, index) => (
//               <img key={index} src={preview} alt={`image ${index + 1}`}></img>
//             ))}
//           </div>
//         )}
//         <div>
//           <Button handleClick={this.handleButtonClick}>Upload</Button>
//           <input
//             className="Upload"
//             type="file"
//             onChange={this.handleChange}
//             ref={this.fileInput}
//             accept="image/*"
//             multiple
//             style={{display: 'none'}}
//           ></input>
//         </div>
//       </div>
//     )
//   }
// }
// 5번


import Sidebar from './Component/Sidebar'
import Button from './Button';
const menus = [ // 메뉴 데이터 (서버에서 전달받아서 보여주는 데이터)
  {
    icon: '♜',
    title: 'HOME'
  },
  {
    icon: '♞',
    title: 'ABOUT'
  },
  {
    icon: '☻',
    title: 'SETTING'
  },
  {
    icon: '♜',
    title: 'HOME'
  },
  {
    icon: '♞',
    title: 'ABOUT'
  },
  {
    icon: '☻',
    title: 'SETTING'
  }
]

class App extends Component{
  state = {
    toggle: false 
  }
  toggleMenu = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  clickMenu = () => {
    this.setState({toggle: false})
  }
  closeSide = () => {
    const {toggle} = this.state
    if(toggle === false){
      this.setState({toggle: false})
      alert('test')
    }
  }

  componentDidMount(){
    window.addEventListener('click', this.closeSide)
  }
  componentWillUnmount(){
    window.removeEventListener('click', this.closeSide)
  }
  render(){
    const { toggle } = this.state 
    return (
      <div className='App'>
        <Button handleClick={this.toggleMenu}>사이드바 열기/닫기</Button>
        <Sidebar open={toggle}>
          {menus.map( (menu, id) => {
            return <div onClick={this.clickMenu} className='menu' key={id}>
              {menu.icon} {menu.title}
            </div>
          })}
        </Sidebar>
      </div>
    )
  }
}
// 5번, 6번

export default App;