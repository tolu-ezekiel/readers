var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var bookModel = new Schema({
    bookId: {
        type: Number
    },
    title: {
        type: String,
        unique: true
    },
    author: {
        type: Schema.Types.ObjectId, ref: 'Author'
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
