var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function(bookService, nav, Book, Author) {
    var middleware = function(req, res, next) {
        // if (!req.user) {
        //     res.redirect('/');
        // }
        next();
    };
    var postBook = function(req, res) {
        console.log('req', req.body)
        var book = new Book(req.body);
        var author = new Author(
            title = req.body.title
            )
        if (!req.body.title) {
            res.status(400);
            res.send('Title is required');
        } else {
            author.save()
            book.save();
            res.status(201);
            // res.send(book);
            res.render('bookView', { title: 'Books from render', nav: nav, book: book });
        }
    };
    var getIndex = function(req, res) {
        var url = 'mongodb://localhost:27017/readers';
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            collection.find({}).toArray(function(err, results) {
                res.render('bookListView', { title: 'Books from render', nav: nav, books: results });
            });
        });
    };
    var getById = function(req, res) {
        var id = objectId(req.params.id);
        var url = 'mongodb://localhost:27017/readers';
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            collection.findOne({ _id: id }, function(err, results) {
                if (results.bookId) {
                    bookService.getBookById(results.bookId, function(err, book) {
                        results.book = book;
                        res.render('bookView', { title: 'Books from render', nav: nav, book: results });
                    });
                } else {
                    res.render('bookView', { title: 'Books', nav: nav, book: results });
                }
            });
        });
    };

    return {
        postBook: postBook,
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;