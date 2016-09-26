var express = require('express');

var app = express();

var port = 5000;

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

app.get('/books', function(req,res){
    res.send('Hello Books');
});