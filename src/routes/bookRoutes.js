const express =require ('express');
const booksRouter = express.Router();

function router(nav) {
    var books=[
        {
            title:"Tom and Jerry",
            author:"Joseph Barbera",
            genre:"Cartoon",
            Img:"tom.jpg"
        },
        {
            title:"Harry potter",
            author:"J K Rowling",
            genre:"Fantasy",
            Img:"Harry.jpg"
        },
        {
            title:"Paathummayude aadu",
            author:"Basheer",
            genre:"Drama",
            Img:"aadu.jpg"
        },
        {
            title:"The 3 Mistakes of my life",
            author:"Chetan Bhagat",
            genre:"Fiction",
            Img:"3mistakes.jpg"
        }
    ]
    booksRouter.get("/",function (req,res) {
        res.render("books",
        {
            nav,
            title :'Library',
            books 
        })
    })
    booksRouter.get('/:id',function (req,res) {
        const id =req.params.id
        res.render('book',
        {
            nav,
            title :'Library',
            book :books[id]
        })  
    })
    return booksRouter
}


module.exports=router;