var express=require("express")
var router=express.Router()

const person={
    username:'femina',
    password:'123'
}


router.post('/login',(req,res)=>{
    if(req.body.username==person.username&&req.body.password==person.password){
        req.session.user=req.body.username
        res.redirect('/route/dashboad')
    }else{
        res.redirect('/')
    }
})
router.get('/dashboad',(req,res,next)=>{
    console.log(req.session.user)
    if(req.session.user){
        console.log(2)
        res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.setHeader('Expires', '-1');
        res.setHeader('Pragma', 'no-cache');
        res.render('dashboad',{user:req.session.user})
        next()
    }else{
        console.log(3)   
        res.redirect('/')
    }
})
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send("error")
        }else{
            res.render('base',{title:"Express",logout:"logout succesfully"})
        }
    })
})
router.get('/abc',(req,res)=>{

    res.render('index')
})
module.exports=router;