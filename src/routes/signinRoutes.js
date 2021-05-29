const express =require ('express');
const signinRouter  = express.Router();

function signinRoute(nav) {
    signinRouter.get("/",function (req,res) {
        res.render("Signin",
        {
            nav,
            title :'Library'
        })
    })
  
    return signinRouter
}

module.exports=signinRoute
