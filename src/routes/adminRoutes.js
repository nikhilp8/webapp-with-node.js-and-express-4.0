var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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

var router = function(nav) {
    
    adminRouter.route('/addBooks')
    .get(function(req,res){
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('books');
            collection.insertMany(books, function(err,results){
                res.send(results);
                db.close();
            });
        })

        //res.send("Adding books");
    })
    
    return adminRouter;
};

module.exports = router; 