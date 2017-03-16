var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var authorController = function(bookService, nav, Book, Author) {
    var middleware = function(req, res, next) {
        // if (!req.user) {
        //     res.redirect('/');
        // }
        next();
    };
    var getIndex = function(req, res) {
        var url = 'mongodb://localhost:27017/readers';
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('authors');
            collection.find({}).toArray(function(err, results) {
                res.render('authorListView', {title: 'Authors', nav: nav, authors: results});
            });
        });
    };
    var postAuthor = function(req, res) {
        var author = new Author(req.body);
        if (!req.body.name) {
            res.status(400);
            res.send('Name is required');
        } else {
            author.save();
            res.status(201);
            res.render('bookView', { title: 'Books from render', nav: nav, book: book });
        }
    };
    return {
        getIndex: getIndex,
        postAuthor: postAuthor,
        middleware: middleware
    };
};

module.exports = authorController;
