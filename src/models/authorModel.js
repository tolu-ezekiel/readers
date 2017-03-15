var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var authorModel = new Schema({
    authorId: {
        type: Number
    },
    name: {
        type: String,
        unique: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Author', authorModel);
