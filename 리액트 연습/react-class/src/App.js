// import React, { useEffect, useState } from 'react';
import React, {Component} from 'react';
import './App.css';

// import Modal from './Modal'
// import Button from './Button'
// function App(){
//   const [open, setOpen] = useState(false)

//   const openModal = () => {
//     setOpen(true)
//   }
//   const closeModal = () => {
//     setOpen(false)
//   }

//   return(
//     <div className='App'>
//       <Button handleClick={openModal}>Add Todo</Button>
//       <Modal open={open}>
//         <div className='header'>You Want To Add New Todo ? </div>
//         <div className='body'>
//           <label>todo name : <input type="text"></input></label><br/>
//           <label>todo description : <input type="text"></input></label>
//         </div>
//         <div className='footer'>
//           <Button size="small">Add</Button>
//           <Button size="small" handleClick={closeModal}>Close</Button>
//         </div>
//       </Modal>
//     </div>
//   )
// }
// 0번

// function App(){
//   const [count, setCount] = useState(0)

//   const showUI = (cnt) => {
//     let ui = null
//     switch(cnt){
//       case 0:
//         ui = <h1>Home</h1>
//         break;
//       case 1:
//         ui = <h1>About</h1>
//         break;
//       case 2:
//         ui = <h1>Detail</h1>
//         break;
//       default:
//         ui = <h1>Not Found</h1>
//     }
//     return ui
//   }

//   const increase = () => {
//     setCount(count + 1)
//   }
//   return(
//     <>
//       {showUI(count)}
//       <button type='button' onClick={increase}>카운팅</button>
//     </>
//   )
// }
// 1번

// import ImageData from './Component/ImageData'
// function App(){
//   const [count, setCount] = useState(0)

//   const animal = ImageData[count % ImageData.length]
//   useEffect(() => {
//     const increaseCount = () => {
//       clearTimeout(timerID)
//       setCount(count + 1)
//     }
//     const timerID = setTimeout(increaseCount, 1000)
//     return () => {
//       clearTimeout(timerID)
//     }
//   }, [count])

//   return(
//     <div className='App'>
//       <h1>Image Gallery</h1>
//       <img src={animal.src} alt={animal.title}></img>
//       <p>{animal.title}</p>
//     </div>
//   )
// }
// 2번

// import Movie from './Component/Movie'
// function App(){
//   const [loading, setLoading] = useState(true)
//   const [movies, setMovies] = useState([])

//   useEffect(() => {
//     fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//     .then(res => res.json())
//     .then(result => {
//       const {data: {movies}} = result
//       setMovies(movies)
//       setLoading(false)
//     })
//   }, [])

//   if(loading){
//     return(
//       <div style={{position: 'absolute', 
//       left: '50%', 
//       top:'50%', 
//       transform: 'translate(-50%, -50%)', 
//       fontSize: '2rem'}}>
//         <h1>Loading ... </h1>
//       </div>
//     )
//   }else{
//     return(
//       <div style={{display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//       alignItems: 'center',
//       width: '60%',
//       margin: '100px auto',
//       textAlign: 'center'}}>
//         {movies.map(movie => {
//           return(
//             <Movie key={movie.id} title={movie.title} genres={movie.genres} cover={movie.medium_cover_image} summary={movie.summary}></Movie>
//           )
//         })}
//       </div>
//     )
//   }
// }
// 3번

// function App(){
//   const [numbers, setNumbers] = useState('')

//   const pickRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
//   const isDuplicated = (numbers, picked) => {
//     return numbers.find(num => num === picked)
//   }
//   const getLottoNum = (numbers) => {
//     const picked = pickRandomNumber(1, 45)
//     const duplicatedNum = isDuplicated(numbers, picked)
//     if(duplicatedNum){
//       getLottoNum(numbers)
//     }else{
//       numbers.push(picked)
//     }
//   }

//   const showRandomNumber = () => {
//     const numbers = []

//     while(numbers.length < 6){
//       getLottoNum(numbers)
//     }

//     setNumbers(numbers.join(', '))
//   }

//   useEffect(() => {
//     const timerID = setTimeout(showRandomNumber, 1000)
//     return () => {
//       clearTimeout(timerID)
//     }
//   }, [numbers])

//   return(
//     <div className='App'>
//       <h1>로또번호 자동 생성기</h1>
//       <h1>번호 : {numbers}</h1>
//     </div>
//   )
// }
// 4번

// import Movie from './Component/Movie'
// function App(){
//   const [movies, setMovies] = useState([])

//   useEffect(() => {
//     fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//     .then(res => res.json())
//     .then(result => {
//       const {data: {movies}} = result
//       setMovies(movies)
//     })
//   }, [])

//   return(
//     <div className='App'>
//       <h1>영화목록</h1>
//       {movies.map((movie, id) => {
//         // return(
//         //   <div key={id}>
//         //     <h2>{movie.title}</h2>
//         //     <img src={movie.medium_cover_image} alt={movie.title}></img>
//         //     <h4>{movie.genres.join(", ")}</h4>
//         //     <p>------------------------------------------</p>
//         //   </div>
//         // )
//         return(
//           <Movie
//             key={id}
//             title={movie.title}
//             genres={movie.genres}
//             cover={movie.medium_cover_image}
//           ></Movie>
//         )
//       })}
//     </div>
//   )
// }
// 5번

// import wordData from './Component/dummyData'
// import Button from './Button'
// function App(){
//   const [words, setWords] = useState(wordData)

//   const handleRemove = (id, e) => {
//     const word = e.target.previousSibling.innerText
//     alert(`You want to delete word - '${word}' ? `)
//     const newwords = words.filter((w, index) => index !== id)
//     setWords(newwords)
//   }

//   return(
//     <div>
//       <h1 style={{textAlign: 'center'}}>Word List</h1>
//       {words.map((w, id) => {
//         return(
//           <div key={id} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <h2>{w.word}</h2>
//             <Button size="small" type="button" handleClick={(e) => handleRemove(id, e)}>DELETE</Button>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
// 6번

// import images from './Component/ImageData'
// import Button from './Button'
// function App(){
//   const [index, setIndex] = useState(0)

//   const decreaseIndex = () => {
//     const nextIndex = index - 1
//     setIndex((nextIndex < 0)? images.length - 1: nextIndex)
//   }
//   const increaseIndex = () => {
//     const nextIndex = index + 1
//     setIndex((nextIndex > images.length - 1)? 0: nextIndex)
//   }

//   const path = images[index].src
//   const title = images[index].title
//   return(
//     <div className='App'>
//       <div className='img-container'>
//         <img src={path} alt={title}></img>
//       </div>

//       <div className='control-btns'>
//         <Button handleClick={decreaseIndex}>Prev</Button>
//         <Button handleClick={increaseIndex}>Next</Button>
//       </div>
//     </div>
//   )
// }
// 7번

// import Button from './Button'
// function App(){
//   const [id, setID] = useState('')
//   const [password, setPassword] = useState('')

//   const handleChange = (e) => {
//     const {name, value} = e.target

//     if(name === "id"){
//       setID(value)
//     }else if(name === "password"){
//       setPassword(value)
//     }
//   }
//   const login = (e) => {
//     e.preventDefault()

//     if(id === '' || password === ''){
//       console.log('login failed')
//     }else if(id !== '' || password !== ''){
//       console.log('login')
//     }
//   }

//   return(
//     <div className='App'>
//       <form>
//         <label>ID<input type="text" placeholder="아이디를 입력하세요." name="id" value={id} onChange={handleChange}></input></label>
//         <label>PASSWORD<input type="password" placeholder="비밀번호를 입력하세요." name="password" value={password} onChange={handleChange}></input></label>
//         <div className='login-btn'><Button handleClick={login}>Login</Button></div>
//       </form>
//     </div>
//   )
// }
// 8번

// import Button from './Button'
// function App(){
//   const [fileName, setFileName] = useState('')
//   const [imgSrc, setImgSrc] = useState('')
//   const fileInput = React.createRef()

//   const isValid = (type) => {
//     return type === 'image'
//   }
//   const handleChange = (e) => {
//     const file = e.target.files[0]
//     const imgSrc = URL.createObjectURL(file)

//     if(isValid(file.type.split('/')[0])){
//       setFileName(file.name)
//       setImgSrc(imgSrc)
//     }else{
//       setFileName('File is not valid type ! ')
//       setImgSrc('')
//     }
//   }

//   const openFileWindow = () => {
//     fileInput.current.click()
//   }

//   return(
//     <div className='App'>
//       <h1>{fileName}</h1>
//       {imgSrc !== '' && <img src={imgSrc} alt="preview-img" width="300px" height="400px"></img>}
//       <input className='Upload' type="file" onChange={handleChange} ref={fileInput}></input>
//       <Button handleClick={openFileWindow}>Upload</Button>
//     </div>
//   )
// }
// 9번

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
//   clickMenu = () => {
//     this.setState({toggle: false})
//   }
//   closeSide = () => {
//     const {toggle} = this.state
//     if(toggle === false){
//       this.setState({toggle: false})
//       alert('test')
//     }
//   }

//   componentDidMount(){
//     window.addEventListener('click', this.closeSide)
//   }
//   componentWillUnmount(){
//     window.removeEventListener('click', this.closeSide)
//   }
//   render(){
//     const { toggle } = this.state 
//     return (
//       <div className='App'>
//         <Button handleClick={this.toggleMenu}>사이드바 열기/닫기</Button>
//         <Sidebar open={toggle}>
//           {menus.map( (menu, id) => {
//             return <div onClick={this.clickMenu} className='menu' key={id}>
//               {menu.icon} {menu.title}
//             </div>
//           })}
//         </Sidebar>
//       </div>
//     )
//   }
// }
// 5번, 6번

// import Product from './Component/Product';
// import Header from './Component/Header';
// import './css/Header.css'
// import './css/Beauty.css'

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       loading: true,
//       products: [],
//       searchText: "",
//       show: true,
//       scrollToTop: true
//     }
//   }
//   componentDidMount(){
//     fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
//     .then(res => res.json())
//     .then(result => {
//         const products = result
//         this.setState({loading: false, products})
//         this.loadingHide()
//     })
//     window.addEventListener('scroll', this.handleScroll)
//     // this.state.scrollToTop('click', this.scrollTop)
//   }
//   textSearch = (keyword) => {
//     this.setState({searchText: keyword})
//   }
//   loadingHide = () => {
//     setTimeout(() => {
//         this.setState({show: false})
//     }, 3000)
//   }

//   handleScroll = () => {
//     if (window.scrollY > 300) {
//       this.setState({scrollToTop: true})
//     } else {
//       this.setState({scrollToTop: false})
//     }
//   }
//   // scrollTop = () => {
//   //   window.scrollY === 0
//   // }

//   render(){
//     console.log(this.state.show)
//     const {loading, products, searchText} = this.state
//     const filteredProducts = products.filter((product) => {
//       return product.name.toLowerCase().includes(searchText.toLowerCase())
//     })
//     if(!loading){
//       return(
//         <div className='test'>
//             <div className={`loading ${this.state.show? "": 'close'}`}>
//                 <div>로딩 완료 !</div>
//             </div>

//             {/* <div className="header">
//                   <button className="sort-btns">Price</button>
//             </div> */}
//             <Header onSearch={(keyword) => this.textSearch(keyword)}></Header>
//             {filteredProducts.map(product => {
//               return(
//                 <Product
//                   key={product.id}
//                   name={product.name}
//                   price={product.price}
//                   cover={product.image_link}
//                   description={product.description}
//                 ></Product>
//             )
//         })}
//         <p className={this.state.scrollToTop? this.state.scrollToTop: 'close'} style={{position: 'fixed',bottom: '10px', left: '10px'}}>scroll to top</p>
//         </div>
//       )
//     }
//   }
// }
// 

export default App;