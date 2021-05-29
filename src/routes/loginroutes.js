const express =require ('express');
const loginRouter  = express.Router();

function loginRoute(nav) {
    loginRouter.get("/",function (req,res) {
        res.render("Login",
        {
            nav,
            title :'Library'
        })
    })
    return loginRouter
}

module.exports=loginRoute;