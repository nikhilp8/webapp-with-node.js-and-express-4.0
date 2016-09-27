var express = require('express');

var app = express();

var port = 5000;

var bookRouter = express.Router();

app.use(express.static('public'));
// app.use(express.static('src/views'));
app.set('views','./src/views');               // views are in src/views 
//app.set('view engine', 'jade');                //view engine is jade
//app.set('view engine', '.hbs');  
app.set('view engine', '.ejs');  



var handlebars = require('express-handlebars');
app.engine('.hbs',handlebars({extname:'.hbs'}));

app.listen(port, function(err){
    console.log('running server on portnumber '+port);
});

var books = [
    {
        title:'India After Gandhi',
        genre:'History',
        author:'Ramchandra Guha',
        read:false
    },
     {
        title:'Rich Dad Poor Dad',
        genre:'fiction',
        author:'Robert Kioski',
        read:false
    },
     {
        title:'The White Tiger',
        genre:'fiction',
        author:'Aravind Adiga',
        read:false
    },
     {
        title:'The Glass Palace',
        genre:'fiction',
        author:'Amitav Ghosh',
        read:false
    },
     {
        title:'The encyclopedia of Bodybuilding',
        genre:'education',
        author:'Arnold Schwazenegger',
        read:false
    },
     {
        title:'Quiet',
        genre:'biography',
        author:'Susan Caine',
        read:false
    },
     {
        title:'Kim',
        genre:'fiction',
        author:'Rudyard Kipling',
        read:false
    }
    
];

bookRouter.route('/')
    .get(function(req,res){
        res.render('books',{
        title:'hello,I am title',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }],
        books: books
    
    })
});
bookRouter.route('/single')
    .get(function(req,res){
        res.send('Hello Single Books')
});

app.use('/Books', bookRouter);

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

