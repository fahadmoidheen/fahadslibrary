const express =require ('express');
const app= express();
const port=process.env.PORT || 5000;

var nav =[
    {
        link:'/books',name:'Book'
    },
    {
        link:'/author',name:'Author'
    },
    {
        link:'/signin',name:'Sign In'
    },
    {
        link:'/login',name:'Log In'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    }
]

const booksRouter =require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav)
const signinRouter=require('./src/routes/signinRoutes')(nav);
const loginRouter =require('./src/routes/loginroutes')(nav);
const addbookRouter=require('./src/routes/addbookRoutes')(nav)
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav)
app.use(express.static('./public'))
app.set('view engine','ejs');
app.set('views','./src/views')
app.use('/books',booksRouter);
app.use('/author',authorRouter);
app.use('/signin',signinRouter);
app.use('/login',loginRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter)




app.get("/",function (req,res) {
    res.render("index",
    {
        nav,
        title :'Library'
    })
})



app.listen(port,()=>{console.log("server is ready at "+port)});