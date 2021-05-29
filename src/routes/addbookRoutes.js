const express =require ('express');
const addbookRouter = express.Router();

function addbookroute(nav) {
    addbookRouter.get('/',function (req,res) {
        res.render('addbooks',
        {
            nav,
            title :'Library'
        })
    })
    return addbookRouter
}
module.exports=addbookroute