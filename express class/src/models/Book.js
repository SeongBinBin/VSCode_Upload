const mongoose = require('mongoose')
const moment = require('moment')

const { Schema } = mongoose
const { Types: {ObjectId} } = Schema

const bookSchema = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    loanStatus: {
        type: Boolean,
        default: true,
    },
    loanDate: {
        type: String,
        default: function(){
            if(this.loanStatus == true)
            return moment().format('YYYY-MM-DD')
        },
        trim: true,
    },
    returnDate: {
        type: String,
        default: function(){
            if(this.loanStatus == true)
            return moment(this.loanDate).add(7, 'day').format('YYYY-MM-DD')
        },
        trim: true,
    }, 
}, { versionKey: false })

const Book = mongoose.model('Book', bookSchema)
module.exports = Book

// const book = new Book({
//     author: '홍길동',
//     title: '해리포터',
//     category: '판타지',
//     loanStatus: false,
// })
// book.save()
// .then(() => console.log('add book information'))