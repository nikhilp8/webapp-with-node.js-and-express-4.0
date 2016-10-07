var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'); // parse the cookies in the session
var passport = require('passport');
var session = require('express-session');

var app = express();

var port = 5000;

var nav = [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);


app.use(express.static('public'));
app.use(bodyParser.json());         // checks if there is any body in json and sets it up to req.body
app.use(bodyParser.urlencoded());   // does the same for URL encoded bodies
app.use(cookieParser());
app.use(session({secret:'library'}));
app.use(passport.initialize());
app.use(passport.session());





// app.use(express.static('src/views
app.set('views','./src/views');               // views are in src/views 
//app.set('view engine', 'jade');                //view engine is jade
//app.set('view engine', '.hbs');  
app.set('view engine', '.ejs');  



var handlebars = require('express-handlebars');
app.engine('.hbs',handlebars({extname:'.hbs'}));

app.listen(port, function(err){
    console.log('running server on portnumber '+port);
});




app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);


app.get('/', function(req,res){
    res.render('index',{
        title:'hello,I am title',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    
    });
});

