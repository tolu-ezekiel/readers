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
        var book = new Book(req.body);
        var author = new Author();
        if (!req.body.title) {
            res.status(400);
            res.send('Title is required');
        } else {
            var title = req.body.title.split(' ').join('+')
            var author_name = req.body.author.split(' ').join('+')
            bookService.getBookByTitle(title, author_name, function(err, returned_book) {
                console.log(returned_book);
                book.image = returned_book.image_url
                book.bookId = returned_book.id
                book.description = returned_book.description
                if (author_name == '') {
                    author_name = returned_book.authors.author[0].name
                }
                author.authorId = returned_book.authors.author[0].id
                author.name = author_name
                author.image = returned_book.authors.author[0].image_url._
                // author.save();
                // book.author = 
                // book.save();

                res.status(201);
                res.render('bookView', { title: 'Books from render', nav: nav, book: book });
            });
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