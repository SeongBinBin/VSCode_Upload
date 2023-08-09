const express = require('express')
const Book = require('../models/Book')
const expressAsyncHandler = require('express-async-handler')
const {isAuth} = require('../../auth')

const router = express.Router()

router.get('/', isAuth, expressAsyncHandler(async (req, res, next) => {
    const books = await Book.find({author: req.user._id})
    if(books.length === 0){
        res.status(404).json({code: 404, message: 'Fall to find todos !'})
    }else{
        res.json({code: 200, books})
    }
}))

router.get('/:id', isAuth, expressAsyncHandler(async (req, res, next) => {
    const books = await Book.findOne({ title: req.params.id })
    console.log(books)
    if(!books){
        res.status(404).json({code: 404, message: 'This Book Is Not Founded'})
    }else{
        res.json({code: 200, books})
    }
}))

router.post('/', isAuth, expressAsyncHandler(async (req, res, next) => {
    const searchedBook = await Book.findOne({
        author: req.user._id,
        title: req.body.title,
    })
    if(searchedBook){
        res.status(204).json({code: 204, message: 'This book is already exists in DB !'})
    }else{
        const book = new Book({
            author: req.user._id,
            title: req.body.title,
            category: req.body.category,
            loanStatus: req.body.loanStatus
        })
        const newBook = await book.save()
        if(!newBook){
            res.status(401).json({code: 401, message: 'Failed to save book'})
        }else{
            res.status(201).json({
                code: 201,
                message: 'New Book Created',
                newBook
            })
        }
    }
}))

router.put('/:id', (req, res, next) => {    // /api/todos/{id}
    res.json("특정 책 변경")
})

router.delete('/:id', (req, res, next) => {     // /api/todos/{id}
    res.json("특정 책 삭제")
})

module.exports = router