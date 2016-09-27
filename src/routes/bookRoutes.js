var express = require('express');
var bookRouter = express.Router();


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

module.exports = bookRouter;