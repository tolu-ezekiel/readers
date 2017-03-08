var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function(bookService, nav) {
    var middleware = function(req, res, next) {
        // if (!req.user) {
        //     res.redirect('/');
        // }
        next();
    };
        // .post(function(req, res){
        //     var url = 'mongodb://localhost:27017/readers';
        //     mongodb.connect(url, function(err, db) {
        //         var collection = db.collection('users');
        //         var user = {
        //             username: req.body.userName,
        //             password: req.body.password
        //         };
        //         collection.insert(user, function(err, results){
        //             req.login(results.ops[0], function(){
        //                 res.redirect('/auth/profile');
        //             });
        //         });
        //     });
        // });

    var postBook = function(req, res) {
        var url = 'mongodb://localhost:27017/readers';
        mondodb.connect(url, function(err, db) {
            var collection = db.connection('books');
            var book = {
                title: req.body.title,
                genre:
                author:
                read:
                image:
            }
            var author = {
                author:
                image:
            }
                collection.insert(book, function(err, results){
                    res.send(results);
                    res.redirect('/auth/profile');
                    db.close();
                });

        });

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