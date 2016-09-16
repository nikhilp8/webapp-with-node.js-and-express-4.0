var express = require('express');   // pulls in express

var app = express();    // an instance of express

var port = 5000         // port that express listens on my machine

app.listen(port, function(err) {    // a callback basically is a function which gets executed when it's done doing what's it doing
    console.log('running server on port '+ port);
})

app.use(express.static('public'));      // first express looks at this static directory public
app.use(express.static('src/views'));   // then in src/views


app.get('/', function(req,res){
    res.send('Hello World');
})  // if it didn't find in the above,then it finds in the routes

app.get('/books', function(req,res){
    res.send('Hello Books');
})