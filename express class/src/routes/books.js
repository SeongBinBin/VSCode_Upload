const express = require('express')
const Book = require('../models/Book')
const expressAsyncHandler = require('express-async-handler')
const {isAuth} = require('../../auth')

const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose

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
    // console.log(books)
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

router.put('/:id', isAuth, expressAsyncHandler(async (req, res, next) => {
    const book = await Book.findOne({
        author: req.user._id,
        _id: req.params.id
    })
    if(!book){
        res.status(404).json({code: 404, message: 'Book Not Found'})
    }else{
        book.title = req.body.title || book.title
        book.category = req.body.category || book.category
        book.loanStatus = req.body.loanStatus || book.loanStatus

        const updatedBook = await book.save()
        res.json({
            code: 200,
            message: 'Book Updated',
            updatedBook
        })
    }
}))

router.delete('/:id', isAuth, expressAsyncHandler(async (req, res, next) => {
    const book = await Book.findOne({
        author: req.user._id,
        _id: req.params.id
    })
    if(!book){
        res.status(404).json({code: 404, message: 'Book Not Found'})
    }else{
        await Book.deleteOne({
            author: req.user._id,
            _id: req.params.id
        })
        res.status(204).json({code: 204, message: 'Book Deleted Successfully !'})
    }
}))

router.get('/group/:field', isAuth, expressAsyncHandler(async (req, res, next) => {
    if(!req.user.isAdmin){
        res.status(401).json({code: 401, message: 'You are not authorized to use this service !'})
    }else{
        const docs = await Book.aggregate([
            {
                $group: {
                    _id: `$${req.params.field}`,
                    count: {$sum: 1}
                }
            }
        ])

        // console.log(`Number Of Group: ${docs.length}`) // 그룹 갯수
        docs.sort((d1, d2) => d1._id - d2._id)
        res.json({code: 200, docs})
    }
}))

router.get('/group/mine/:field', isAuth, expressAsyncHandler(async (req, res, next) => {
    const docs = await Book.aggregate([
        {
            $match: { author: new ObjectId(req.user._id) }
        },
        {
            $group: {
                _id: `$${req.params.field}`,
                count: {$sum: 1}
            }
        }
    ])

    // console.log(`Number Of Group: ${docs.length}`) // 그룹 갯수
    docs.sort((d1, d2) => d1._id - d2._id)
    res.json({code: 200, docs})
}))

router.get('/group/date/:field', isAuth, expressAsyncHandler(async (req, res, next) => {
    if(!req.user.isAdmin){
        res.status.apply(401).json({code: 401, message: '관리자가 아닙니다.'})
    }else{
        if(req.params.field === 'loanDate' || req.params.field === 'returnDate'){
            const docs = await Book.aggregate([
                {
                    $group: {
                        _id: {year: {$year: `$${req.params.field}`}, month: {$month: `$${req.params.field}`}},
                        count: {$sum: 1}
                    }
                },
                { $sort : { _id: 1}}
            ])

            docs.sort((d1, d2) => d1._id - d2._id)
            res.json({code: 200, docs})
        }else{
            res.status(204).json({code: 204, message: 'No Content'})
        }
    }
}))

module.exports = router