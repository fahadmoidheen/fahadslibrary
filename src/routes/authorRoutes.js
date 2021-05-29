const express =require ('express');
const authorRouter = express.Router();
function authorRout(nav) {
    var authors=[
        {
            name:"J K Rowling",
            language:"English",
            genre:"	Fantasy, drama, young adult fiction,tragicomedy, crime fiction",
            Img:"Rowling.jpg"
        },
        {
            name:"Chetan Bhagat",
            language:"English, Hindi",
            genre:"romance, realistic fiction, non-fiction",
            Img:"chetan.jpg"
        },
        {
            name:"Joseph Barbera",
            language:"English",
            genre:"Animator, director, producer, artist",
            Img:"Barbera.jpg"
        },
        {
            name:"Basheer",
            language:"Malayalam",
            genre:"Novel, short story, essays, memoirs",
            Img:"basheer.jpg"
        }
    ]
    authorRouter.get("/",function (req,res) {
        res.render("authors",
        {
            nav,
            title :'Library',
            authors
        })
    })
    authorRouter.get("/:id2",function (req,res) {
       const id= req.params.id2
        res.render("author",
        {
            nav,
            title :'Library',
            author :authors[id]
        })
    })
    return authorRouter;
}


module.exports=authorRout;