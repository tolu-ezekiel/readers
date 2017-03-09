var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
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
    }
});

module.exports = mongoose.model('Book', bookModel);
