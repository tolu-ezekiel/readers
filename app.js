var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/readers');
var Book = require('./src/models/bookModel');
var Author = require('./src/models/authorModel');

var app = express();

var port = process.env.PORT || 5500;
var nav =  [{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}];
var bookRouter = require('./src/routes/bookRoutes') (nav, Book, Author);
var adminRouter = require('./src/routes/adminRoutes') (nav, Book, Author);
var authRouter = require('./src/routes/authRoutes') (nav, Book, Author);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: 'library', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));

require('./src/config/passport') (app);

app.set('views', './src/views');
app.set('view engine', '.ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);
app.get('/', function(req, res){
    res.render('index', {title: 'Hello from render', nav: nav });
});

app.listen(port, function(err){
    console.log('running server on port', port);
});



