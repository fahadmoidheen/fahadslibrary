const express =require ('express');
const addauthorRouter = express.Router();

function addauthorroute(nav) {
    addauthorRouter.get('/',function (req,res) {
        res.render('addauthor',
        {
            nav,
            title :'Library'
        })
    })
    return addauthorRouter
}
module.exports=addauthorroute