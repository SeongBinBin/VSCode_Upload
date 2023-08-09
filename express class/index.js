// // 미들웨어 (middleware)
// // 미들웨어 중에서 라우트 경로가 포함된 미들웨어 -> 라우트 핸들러 함수
// // '/' -> 라우트(route)
// // get -> HTTP 메서트 (GET)
// // HTTP 메서드 (GET, POST, PUT, DELETE)
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.post('/', function(req, res){
//     res.send('Got a POST request')
// })

// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user');
// })

// app.delete('/user', function(req, res){
//     res.send('Got a DELETE request at /user')
// })

// ------------------------------------------------------

// // 모든 요청에 대하여 항상 실행되는 미들웨어
// // req, res 객체도 중간에서 변경함
// // req : {requestTime : Mon Aug 07 2023 11:01:12 GMT+0900}
// const myLogger = function(req, res, next){
//     req.requestTime = new Date()
//     console.log(`LOGGED - ${req.requestTime} `)
//     next()  // 요청을 그 다음 미들웨어로 넘겨주는 함수
// }

// // 미들웨어 등록
// app.use(myLogger)   // 콜백

// app.get('/', function(req, res){    // 미들웨어 - 라우트핸들러 함수
//     res.send(`Hello World! - ${req.requestTime}`)
// })

// ------------------------------------------------------

// router.use(function (req, res, next){
//     console.log('Time:', Date.now())
//     next()  // 아직 서버에서 처리가 끝나지 않은 상태
// })

// // :id : URL 파라미터 (/user/12345)
// // use : 모든 HTTP 메서드에 대하여 해당 경로와 일치하면 실행
// router.use('/user/:id', function (req,res,next){
//     console.log('Request URL: ', req.originalUrl)
//     // res.status(200).send(`user id : ${req.params.id}`)
//     next()
// }, function (req, res, next){
//     console.log('Request Type: ', req.method)
//     next()
// })

// router.get('/user/:id', function (req, res, next){
//     if(req.params.id == 0) next('route')
//     else next()
// }, function(req, res, next){
//     // 일반 홈페이지
//     res.send('일반 사용자')
// })

// // req.params.id == 0인 경우 실행
// router.get('/user/:id', function (req,res,next){
//     res.send('관리자 유저')
//     // 어드민 페이지
// })

// // /api 라는 주소부터 시작해서 하위에 서브 URL을 만들어서
// // 그 안에 라우트 핸들러 함수로 실행
// app.use('/api', router) // 서브 URL에 대한 처리로직을 생성

// ------------------------------------------------------

const express = require('express')  // 모듈 임포트
const app = express()
const router = express.Router()
const port = 3000   // 서버 포트
var cors = require('cors')
var logger = require('morgan')
const mongoose = require('mongoose')
const moment = require('moment')
var axios = require('axios')
var usersRouter = require('./src/routes/users')
var booksRouter = require('./src/routes/books')
var config = require('./config')

var corsOptions = { // CORS 옵션
    origin: 'http://127.0.0.1:5500',    // 해당 URL 주소만 요청을 허락함 (화이트리스트)
    credentials: true // 사용자 인증이 필요한 리소스를 요청할 수 있도록 허용함
}

mongoose.connect(config.MONGODB_URL)
.then(() => console.log('mongodb connected ... '))
.catch(e => console.log(`failed to connect mongodb: ${e}`))

app.use(cors(corsOptions))  // CORS 설정
app.use(express.json()) // request body 파싱
app.use(logger('tiny')) // Logger 설정

app.use('/api/users', usersRouter)
app.use('/api/books', booksRouter)

// const Logger = function(req, res ,next){
//     // req.requestTime = new Date()
//     // console.log(`요청 시각 : ${req.requestTime}`)
//     next()
// }
// app.use(Logger)

app.get('/user', function(req, res, next){
    const array = books.map(item => {
        return {name: item.name, book: item.book}
    })
    res.json(array)
    next()
})

app.get('/user/:name', function(req, res, next){
    const names = books.find(array => array.name === req.params.name)

    if(!names){
        res.send('※ 존재하지 않는 회원정보 입니다.')
    }else{
        res.json(names)
    }
    
    next()
})

app.get('/user/:name/books', function(req, res, next){
    // console.log(req.query.book)
    const user = books.find(array => array.name === req.params.name)

    if(!user){
        res.send('※ 존재하지 않는 회원정보 입니다.')
    }else{
        res.json({book: user.book})
    }
    
    next()
})

app.post('/user/:name/books', function(req, res, next){
    const user = books.find(array => array.name === req.params.name)

    if(!user){
        res.send('※ 존재하지 않는 회원정보 입니다.')
    }else{
        const newBook = req.query.book
        user.book.push(newBook)
        res.json({book: user.book})
    }

    next()
})

app.get('/user/:name/books/:bookname', function(req, res, next){
    const user = books.find(array => array.name === req.params.name)
    // const bookinfo = books.find(array => array.book.indexOf(req.params.bookname))
    
    // console.log(bookinfo)
    
    if(!user){
        res.send('※ 존재하지 않는 회원정보 입니다.')
    }else{
        res.json(req.params.bookname)
    }

    next()
})

app.put('/user/:name/books/:bookname', function(req, res, next){
    const oldBookName = req.params.bookname
    const newBookName = req.query.book
    const user = books.find(array => array.name === req.params.name)
    
    if(!user){
        res.send('※ 존재하지 않는 회원정보 입니다.')
    }else{
        const bookIndex = user.book.indexOf(oldBookName)

        user.book[bookIndex] = newBookName
        // res.json({ book: user.book[bookIndex] })
        res.json(newBookName)
    }

    next()
})

app.delete('/user/:name/books/:bookname', function (req, res, next) {
    const user = books.find(array => array.name === req.params.name)
    const Bookname = req.params.bookname

    if (!user) {
        res.send('※ 존재하지 않는 회원정보 입니다.')
    } else {
        const bookIndex = user.book.indexOf(Bookname)

        user.book.splice(bookIndex, 1)
        res.send(`${Bookname}가 삭제되었습니다.`)
    }

    next()
})

app.use((req, res, next) => {   // 사용자가 요청한 페이지가 없는 경우 에러처리 (순서 중요)
    res.status(404).send("Page Not Found")
})
app.use((err, req, res, next) => {  // 서버 내부 오류 처리
    console.error(err.stack)
    res.status(500).send("Internal Server Error")
})


// 서버를 구동하고 브라우저 요청을 기다림
// 코드 맨 하단에 있는것이 좋음
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})