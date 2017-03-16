var express = require('express');
// var bookRouter = express.Router();
var authorRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var router = function(nav, Book, Author) {
    var bookService = require('../services/goodreadsService')();
    var authorController = require('../controllers/authorController')(bookService, nav, Book, Author);
    authorRouter.use(authorController.middleware);
    authorRouter.route('/')
        .get(authorController.getIndex);
    authorRouter.route('/:id')
        .get(authorController.getById);
    authorRouter.route('/addAuthor')
        .post(authorController.postAuthor);
    return authorRouter;
};

// var router = function(nav, Book, Author) {
//     var bookService = require('../services/goodreadsService')();
//     var bookController = require('../controllers/bookController')(bookService, nav, Book, Author);

//     bookRouter.use(bookController.middleware);
//     bookRouter.route('/addBook')
//         .post(bookController.postBook);
//     bookRouter.route('/')
//         .get(bookController.getIndex);
//     bookRouter.route('/:id')
//         .get(bookController.getById);
//     return bookRouter;
// };

module.exports = router;
