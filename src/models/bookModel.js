var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    bookId: {
        type: Number
    },
    title: {
        type: String,
        unique: true
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Book', bookModel);
